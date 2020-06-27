"""
Module with general utilities and missing standard library features that could be useful in any Julia project
"""
module Utils
using StatsFuns
import StatsFuns.logsumexp

export copy_with_eltype, issomething, flatmap, map_something, ntimes, some_vector, always, never,
assign, accumulate_val, accumulate_prod, accumulate_prod_normalized, assign_prod,
assign_prod_normalized, prod_fast, count_conjunction, sum_weighted_product, 
order_asc, @no_error, disjoint, typejoin, lower_element_type, map_values, groupby, logsumexp,
unzip, uniform, pushrand!,
Node, DagNode, TreeNode, DiGraph, Dag, Tree, 
NodeType, Leaf, Inner, 
inodes, innernodes, leafnodes, children, num_children, has_children, num_nodes, num_edges,
node_stats, leaf_stats, inode_stats, tree_num_nodes, node2dag, dag2node, grapheltype, 
isequal_unordered, isequal_local, pre_order_traverse, 
left_most_child, right_most_child, isleaf, isinner, lca, parent, descends_from,
foldup, foldup_rec, foreach_rec, flip_bit, foldup_aggregate, foldup_aggregate_rec,
folddown_aggregate, folddown_aggregate_rec

import Base.@time
import Base.print
import Base.println

# various utilities

"""
Is the argument not `nothing`?
"""
@inline issomething(x) = !isnothing(x)

@inline map_something(f,v) = (v == nothing) ? nothing : f(v)

ntimes(f,n) = (for i in 1:n-1; f(); end; f())

@inline order_asc(x, y) = x > y ? (y, x) : (x , y)


macro no_error(ex)
    quote
        try
            $(esc(ex))
            true
        catch
            false
        end
    end
end

function disjoint(set1::AbstractSet, sets::AbstractSet...)::Bool
    seen = set1 # can be sped up by copying seen first then reusing it with union!?
    for set in sets
        if !isempty(intersect(seen,set))
            return false
        else
            seen = union(seen, set)
        end
    end
    return true
end

"Marginalize out dimensions `dims` from log-probability tensor"
function logsumexp(A::AbstractArray, dims)
    return dropdims(mapslices(StatsFuns.logsumexp, A, dims=dims), dims=dims)
end

macro unzip(x) 
    quote
        local a, b = zip($(esc(x))...)
        a = collect(a)
        b = collect(b)
        a, b
    end
end


"""
Push element into random position
"""
function pushrand!(v::AbstractVector{<:Any}, element)
    len = length(v)
    i = rand(1:len + 1)
    if i == len + 1
        push!(v, element)
    else
        splice!(v, i:i, [element, v[i]])
    end
    v
end

#####################
# array parametric type helpers
#####################

"""
Copy the array while changing the element type
"""
copy_with_eltype(input, Eltype::Type) = copyto!(similar(input, Eltype), input)

import Base.typejoin

"Get the most specific type parameter possible for an array"
Base.typejoin(array::AbstractArray) = mapreduce(e -> typeof(e), typejoin, array)

"Specialize the type parameter of an array to be most specific"
function lower_element_type(array::AbstractArray{T}) where T
    U = typejoin(array)
    if T == U
        return array
    else
        return copy_with_eltype(array, U)
    end
end

#####################
# probability semantics and other initializers for various data types
#####################

@inline always(::Type{T}, dims::Int...) where T<:Number = ones(T, dims...)
@inline always(::Type{T}, dims::Int...) where T<:Bool = trues(dims...)

@inline never(::Type{T}, dims::Int...) where T<:Number = zeros(T, dims...)
@inline never(::Type{T}, dims::Int...) where T<:Bool = falses(dims...)

@inline some_vector(::Type{T}, dims::Int...) where T<:Number = Vector{T}(undef, dims...)
@inline some_vector(::Type{T}, dims::Int...) where T<:Bool = BitArray(undef, dims...)
@inline some_vector(::Type{T}, dims::Int...) where T<:Tuple = Vector{T}(undef, dims...) #Enables propagation of tuples instead of a single value

@inline uniform(dims::Int...) = ones(Float64, dims...) ./ prod(dims)

#####################
# functional programming
#####################

# Your regular flatmap
# if you want the return array to have the right element type, provide an init with the desired type. Otherwise it may become Array{Any}
@inline flatmap(f, arr::AbstractVector, init=[]) = mapreduce(f, append!, arr; init=init)

function map_values(f::Function, dict::AbstractDict{K}, vtype::Type)::AbstractDict{K,vtype} where K
    mapped_dict = Dict{K,vtype}()
    for key in keys(dict)
        mapped_dict[key] = f(dict[key])
    end
    mapped_dict
end

function groupby(f::Function, list::Union{Vector{E},Set{E}})::Dict{Any,Vector{E}} where E
    groups = Dict{Any,Vector{E}}()
    for v in list
        push!(get!(groups, f(v), []), v)
    end
    groups
end

#####################
# compute kernels
#####################

include("Kernels.jl")

#####################
# graphs
#####################

include("Graphs.jl")

end #module
