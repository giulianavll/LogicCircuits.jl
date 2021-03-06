using DataStructures
using Random

#############
# Trimmed SDD types and structs
#############

"Root of the trimmed SDD manager node hierarchy"
abstract type TrimMgrNode <: SddMgrNode end

# alias structured logical nodes with a trimmed sdd manager vtree
const TrimTrue = SddTrueNode{TrimMgrNode}
const trimtrue = TrimTrue()
const TrimFalse = SddFalseNode{TrimMgrNode}
const trimfalse = TrimFalse()

const TrimConstant = SddConstantNode{TrimMgrNode}
const Trim⋁ = Sdd⋁Node{TrimMgrNode}
const Trim⋀ = Sdd⋀Node{TrimMgrNode}
const TrimNode = SddNode{<:TrimMgrNode} # would this be better?: Union{TrimTrue,TrimFalse,TrimConstant,Trim⋁,Trim⋀}

# alias SDD terminology
const Element = Tuple{TrimNode,TrimNode}
Element(prime::TrimNode, sub::TrimNode)::Element = (prime, sub) 
const XYPartition = Set{Element}

const Unique⋁Cache = Dict{XYPartition,Trim⋁}
const ApplyCache = Dict{Tuple{TrimNode,TrimNode},TrimNode}


mutable struct TrimSddMgrInnerNode <: TrimMgrNode

    left::TrimMgrNode
    right::TrimMgrNode
    
    parent::Union{TrimSddMgrInnerNode, Nothing}

    variables::BitSet
    unique⋁cache::Unique⋁Cache

    conjoin_cache::ApplyCache
    disjoin_cache::ApplyCache

    TrimSddMgrInnerNode(left::TrimMgrNode, right::TrimMgrNode) = begin
        # @assert isempty(intersect(variables(left), variables(right)))
        this = new(left, right, 
            nothing, 
            union(variables(left), variables(right)), 
            Unique⋁Cache(), ApplyCache(), ApplyCache())
        left.parent = this
        right.parent = this
        this
    end

end

mutable struct TrimSddMgrLeafNode <: TrimMgrNode

    var::Var
    parent::Union{TrimSddMgrInnerNode, Nothing}

    positive_literal::SddLiteralNode{TrimSddMgrLeafNode} # aka TrimLiteral
    negative_literal::SddLiteralNode{TrimSddMgrLeafNode} # aka TrimLiteral

    TrimSddMgrLeafNode(v::Var) = begin
        this = new(v, nothing)
        this.positive_literal = SddLiteralNode(var2lit(v), this)
        this.negative_literal = SddLiteralNode(-var2lit(v), this)
        this
    end    

end

const TrimLiteral = SddLiteralNode{TrimSddMgrLeafNode}

const TrimSddMgr = AbstractVector{<:TrimMgrNode}
const TrimSdd = AbstractVector{<:TrimNode}

Base.eltype(::Type{TrimSdd}) = TrimNode


#####################
# Constructor
#####################

TrimMgrNode(v::Var) = TrimSddMgrLeafNode(v)
TrimMgrNode(left::TrimMgrNode, right::TrimMgrNode) = TrimSddMgrInnerNode(left, right)

#####################
# Traits
#####################

@inline NodeType(::TrimSddMgrLeafNode) = Leaf()
@inline NodeType(::TrimSddMgrInnerNode) = Inner()

#####################
# Methods
#####################

@inline children(n::TrimSddMgrInnerNode) = [n.left, n.right]

@inline variables(n::TrimSddMgrLeafNode)::BitSet = BitSet(n.var)
@inline variables(n::TrimSddMgrInnerNode)::BitSet = n.variables

import ..Utils: parent, descends_from, lca # make available for extension

@inline prime(e::Element) = e[1]
@inline sub(e::Element) = e[2]

@inline parent(n::TrimMgrNode)::Union{TrimSddMgrInnerNode, Nothing} = n.parent

@inline pointer_sort(s,t) = (hash(s) <= hash(t)) ? (s,t) : (t,s)

#TODO replace this by a bitset subset check on the set of variables
@inline descends_from(n::TrimNode, m::TrimNode) = descends_from(vtree(n), vtree(m))
@inline descends_from(::TrimMgrNode, ::TrimSddMgrLeafNode) = false
@inline descends_from(n::TrimMgrNode, m::TrimSddMgrInnerNode) = variables(n) ⊆ variables(m)

@inline descends_left_from(n::TrimNode, m::TrimNode)::Bool = descends_left_from(vtree(n), vtree(m))
@inline descends_left_from(n::TrimMgrNode, m::TrimSddMgrInnerNode)::Bool = (n === m.left) || descends_from(n, m.left)
@inline descends_left_from(::TrimMgrNode, ::TrimSddMgrLeafNode)::Bool = false

@inline descends_right_from(n::TrimNode, m::TrimNode)::Bool = descends_right_from(vtree(n), vtree(m))
@inline descends_right_from(n::TrimMgrNode, m::TrimSddMgrInnerNode)::Bool = (n === m.right) || descends_from(n,m.right)
@inline descends_right_from(::TrimMgrNode, ::TrimSddMgrLeafNode)::Bool = false

function lca(xy::XYPartition)::TrimSddMgrInnerNode
    # @assert !isempty(xy)
    # @assert all(e -> (prime(e) !== trimfalse), xy)
    element_vtrees = [parentlca(prime(e),sub(e)) for e in xy]
    return lca(element_vtrees...)
end

parentlca(p::TrimNode, s::TrimNode)::TrimSddMgrInnerNode = 
    lca(parent(vtree(p)), parent(vtree(s)))
parentlca(p::TrimNode, ::TrimConstant)::TrimSddMgrInnerNode = 
    parent(vtree(p))
parentlca(::TrimConstant, s::TrimNode)::TrimSddMgrInnerNode = 
    parent(vtree(s))
parentlca(p::TrimConstant, s::TrimConstant)::TrimSddMgrInnerNode = 
    error("This XY partition should have been trimmed to remove ($p,$s)!")

"""
Get the canonical compilation of the given XY Partition
"""
function canonicalize(xy::XYPartition)::TrimNode
    # @assert !isempty(xy)
    return canonicalize_compressed(compress(xy))
end

"""
Compress a given XY Partition (merge elements with identical subs)
"""
function compress(xy::XYPartition)::XYPartition
    # @assert !isempty(xy)
    sub2elems = groupby(e -> sub(e), xy)
    #TODO avoid making a new partition if existing one is unchanged
    compressed_elements = XYPartition()
    for (subnode,elements) in sub2elems
        primenode = mapreduce(e -> prime(e), (p1, p2) -> disjoin(p1, p2), elements)
        push!(compressed_elements, (primenode, subnode))
    end
    return compressed_elements
end

"""
Get the canonical compilation of the given compressed XY Partition
"""
function canonicalize_compressed(xy::XYPartition)::TrimNode
    # @assert !isempty(xy)
    # trim
    if length(xy) == 1 && (prime(first(xy)) === trimtrue)
        return sub(first(xy))
    elseif length(xy) == 2 
        l = [xy...]
        if (sub(l[1]) === trimtrue) && (sub(l[2]) === trimfalse)
            return prime(l[1])
        elseif (sub(l[2]) === trimtrue) && (sub(l[1]) === trimfalse)
            return prime(l[2])
        end
    end
    # get unique node representation
    return unique⋁(xy)
end

@inline function remove_false_primes(xy)
    return filter(e -> (prime(e) !== trimfalse), xy)
end

"""
Construct a unique decision gate for the given vtree
"""
function unique⋁(xy::XYPartition, mgr::TrimSddMgrInnerNode = lca(xy))::Trim⋁
    #TODO add finalization trigger to remove from the cache when the node is gc'ed + weak value reference
    get!(mgr.unique⋁cache, xy) do 
        node = Trim⋁(xy2ands(xy, mgr), mgr)
        not_xy = negate(xy)
        not_node = Trim⋁(xy2ands(not_xy, mgr), mgr, node)
        node.negation = not_node
        mgr.unique⋁cache[not_xy] = not_node
        node
    end
end

@inline negate(xy::XYPartition) = XYPartition([Element(prime(e), !sub(e)) for e in xy])
@inline xy2ands(xy::XYPartition, mgr::TrimSddMgrInnerNode) = [Trim⋀(prime(e), sub(e), mgr) for e in xy]

"""
Compile a given variable, literal, or constant
"""
compile(mgr::TrimSddMgr, x::Union{Var,Lit})::TrimLiteral = compile(mgr[end], x)

function compile(n::TrimMgrNode, v::Var)::TrimLiteral
    compile(n,var2lit(v))
end

function compile(n::TrimSddMgrLeafNode, l::Lit)::TrimLiteral
    # @assert n.var == lit2var(l)
    if l>0 # positive literal
        n.positive_literal
    else
        n.negative_literal
    end
end

function compile(n::TrimSddMgrInnerNode, l::Lit)::TrimLiteral
    if lit2var(l) in variables(n.left)
        compile(n.left, l)
    elseif lit2var(l) in variables(n.right)
        compile(n.right, l)
    else 
        error("$v is not contained in this vtree")
    end
end

function compile(constant::Bool)::TrimConstant
    if constant == true
        trimtrue
    else
        trimfalse
    end
end

"""
Conjoin two SDDs
"""
@inline conjoin(::TrimFalse, ::TrimTrue)::TrimFalse = trimfalse
@inline conjoin(::TrimTrue, ::TrimFalse)::TrimFalse = trimfalse
@inline conjoin(s::TrimNode, ::TrimTrue)::TrimNode = s
@inline conjoin(::TrimNode, ::TrimFalse)::TrimFalse = trimfalse
@inline conjoin(::TrimTrue, s::TrimNode)::TrimNode = s
@inline conjoin(::TrimFalse, ::TrimNode)::TrimFalse = trimfalse
@inline conjoin(::TrimTrue, s::TrimTrue)::TrimNode = trimtrue
@inline conjoin(::TrimFalse, s::TrimFalse)::TrimNode = trimfalse

function conjoin(s::TrimLiteral, t::TrimLiteral)::TrimNode 
    if vtree(s) == vtree(t)
        (s === t) ? s : trimfalse
    else
        conjoin_indep(s,t)
    end
end

function conjoin(s::TrimNode, t::TrimNode)::TrimNode 
    if vtree(s) == vtree(t)
        conjoin_cartesian(t,s)
    elseif descends_from(s,t)
        conjoin_descendent(s,t)
    elseif descends_from(t,s)
        conjoin_descendent(t,s)
    else
        conjoin_indep(s,t)
    end
end

"""
Conjoin two SDDs when they respect the same vtree node
"""
function conjoin_cartesian(n1::TrimNode, n2::TrimNode)::TrimNode
    if n1 === n2
        return n1
    elseif n1 == !n2
        return trimfalse
    end
    (n1,n2) = pointer_sort(n1,n2)

    get!(vtree(n1).conjoin_cache, (n1,n2)) do 
        elems_prod = Vector{Element}()
        elems1 = copy(children(n1))
        elems2 = copy(children(n2))
        for e1 in elems1
            for e2 in elems2
                if prime(e1) === prime(e2)
                    push!(elems_prod, Element(prime(e1), conjoin(sub(e1),sub(e2))))
                    filter!(e -> prime(e) !== prime(e1), elems1)
                    filter!(e -> prime(e) !== prime(e1), elems2)
                    break # go to next e1
                elseif prime(e1) === !prime(e2)
                    for e3 in elems2
                        if e3 !== e2
                            push!(elems_prod, Element(prime(e3), conjoin(sub(e3),sub(e1))))
                        end
                    end
                    for e4 in elems1
                        if e4 !== e1
                            push!(elems_prod, Element(prime(e4), conjoin(sub(e4),sub(e2))))
                        end
                    end
                    filter!(e -> prime(e) !== prime(e1), elems1)
                    filter!(e -> prime(e) !== prime(e2), elems2)
                    break # go to next e1
                end
            end
        end
        product = vec([(e1,e2) for e1 in elems1, e2 in elems2])
        #TODO sort product by probability of subsumes
        while !isempty(product)
            (e1, e2) = pop!(product)
            newprime = conjoin(prime(e1),prime(e2))
            if newprime != trimfalse
                push!(elems_prod, Element(newprime, conjoin(sub(e1),sub(e2))))
            end
            if newprime === prime(e1)
                # p1 |= p2 and therefore p1 will be mutex with all other p2-primes
                filter!(p -> prime(p[1]) !== prime(e1), product)
            elseif newprime === prime(e2)
                # p2 |= p1 and therefore p2 will be mutex with all other p1-primes
                filter!(p -> prime(p[2]) !== prime(e2), product)
            end
        end
        canonicalize(XYPartition(elems_prod))
    end
end

"""
Conjoin two SDDs when one descends from the other
"""
function conjoin_descendent(d::TrimNode, n::TrimNode)::TrimNode
    get!(vtree(n).conjoin_cache, (d,n)) do 
        if descends_left_from(d, n)
            elements = Element[Element(conjoin(prime(e),d), sub(e)) for e in children(n)]
            elements = remove_false_primes(elements)
            push!(elements, Element(!d, trimfalse))
        else 
            # @assert descends_right_from(d, n)
            elements = Element[Element(prime(e),conjoin(sub(e),d)) for e in children(n)]
        end
        #TODO are there cases where we don't need all of compress-trim-unique?
        canonicalize(XYPartition(elements))
    end
end

"""
Conjoin two SDDs in separate parts of the vtree
"""
function conjoin_indep(s::TrimNode, t::TrimNode)::Trim⋁
    # @assert GateType(s)!=ConstantGate() && GateType(t)!=ConstantGate()
    mgr = parentlca(s,t)
    # @assert vtree(s) != mgr && vtree(t) != mgr
    (s,t) = pointer_sort(s,t)
    get!(mgr.conjoin_cache, (s,t)) do 
        if descends_left_from(vtree(s), mgr)
            # @assert descends_right_from(vtree(t), mgr)
            elements = Element[Element(s,t),Element(!s,trimfalse)]
        else 
            # @assert descends_left_from(vtree(t), mgr)
            # @assert descends_right_from(vtree(s), mgr)
            elements = Element[Element(t,s),Element(!t,trimfalse)]
        end
        # TODO: the XY partition must already be compressed and trimmed
        unique⋁(XYPartition(elements), mgr)
    end
end

@inline Base.:&(s,t) = conjoin(s,t)

"""
Disjoin two SDDs
"""
@inline disjoin(::TrimFalse, ::TrimTrue)::TrimTrue = trimtrue
@inline disjoin(::TrimTrue, ::TrimFalse)::TrimTrue = trimtrue
@inline disjoin(::TrimNode, ::TrimTrue)::TrimTrue = trimtrue
@inline disjoin(s::TrimNode, ::TrimFalse)::TrimNode = s
@inline disjoin(::TrimTrue, ::TrimNode)::TrimTrue = trimtrue
@inline disjoin(::TrimFalse, s::TrimNode)::TrimNode = s
@inline disjoin(::TrimTrue, s::TrimTrue)::TrimNode = trimtrue
@inline disjoin(::TrimFalse, s::TrimFalse)::TrimNode = trimfalse

function disjoin(s::TrimLiteral, t::TrimLiteral)::TrimNode 
    if vtree(s) == vtree(t)
        (s === t) ? s : trimtrue
    else
        disjoin_indep(s,t)
    end
end

function disjoin(s::TrimNode, t::TrimNode)::TrimNode 
    if vtree(s) == vtree(t)
        disjoin_cartesian(t,s)
    elseif descends_from(s,t)
        disjoin_descendent(s,t)
    elseif descends_from(t,s)
        disjoin_descendent(t,s)
    else
        disjoin_indep(s,t)
    end
end

"""
Disjoin two SDDs when they respect the same vtree node
"""
function disjoin_cartesian(n1::TrimNode, n2::TrimNode)::TrimNode
    if n1 === n2
        return n1
    elseif n1 == !n2
        return trimtrue
    end
    (n1,n2) = pointer_sort(n1,n2)

    get!(vtree(n1).disjoin_cache, (n1,n2)) do 
        elems_prod = Vector{Element}()
        elems1 = copy(children(n1))
        elems2 = copy(children(n2))
        for e1 in elems1
            for e2 in elems2
                if prime(e1) === prime(e2)
                    push!(elems_prod, Element(prime(e1), disjoin(sub(e1),sub(e2))))
                    filter!(e -> prime(e) !== prime(e1), elems1)
                    filter!(e -> prime(e) !== prime(e2), elems2)
                    break # go to next e1
                elseif prime(e1) === !prime(e2)
                    for e3 in elems2
                        if e3 !== e2
                            push!(elems_prod, Element(prime(e3), disjoin(sub(e3),sub(e1))))
                        end
                    end
                    for e4 in elems1
                        if e4 !== e1
                            push!(elems_prod, Element(prime(e4), disjoin(sub(e4),sub(e2))))
                        end
                    end
                    filter!(e -> prime(e) !== prime(e1), elems1)
                    filter!(e -> prime(e) !== prime(e2), elems2)
                    break # go to next e1
                end
            end
        end
        product = vec([(e1,e2) for e1 in elems1, e2 in elems2])
        while !isempty(product)
            (e1, e2) = pop!(product)
            newprime = conjoin(prime(e1),prime(e2))
            if newprime != trimfalse
                push!(elems_prod, Element(newprime, disjoin(sub(e1),sub(e2))))
            end
            if newprime === prime(e1)
                # p1 |= p2 and therefore p1 will be mutex with all other p2-primes
                filter!(p -> prime(p[1]) !== prime(e1), product)
            elseif newprime === prime(e2)
                # p2 |= p1 and therefore p2 will be mutex with all other p1-primes
                filter!(p -> prime(p[2]) !== prime(e2), product)
            end
        end
        canonicalize(XYPartition(elems_prod))
    end
end

"""
Disjoin two SDDs when one descends from the other
"""
function disjoin_descendent(d::TrimNode, n::TrimNode)::TrimNode
    get!(vtree(n).disjoin_cache, (d,n)) do 
        if descends_left_from(d, n)
            not_d = !d
            elements = Element[Element(conjoin(prime(e),not_d), sub(e)) for e in children(n)]
            elements = remove_false_primes(elements)
            push!(elements,Element(d, trimtrue))
        else 
            # @assert descends_right_from(d, n)
            elements = Element[Element(prime(e),disjoin(sub(e),d)) for e in children(n)]
        end
        #TODO are there cases where we don't need all of compress-trim-unique?
        canonicalize(XYPartition(elements))
    end
end

"""
Disjoin two SDDs in separate parts of the vtree
"""
function disjoin_indep(s::TrimNode, t::TrimNode)::Trim⋁
    # @assert GateType(s)!=ConstantGate() && GateType(t)!=ConstantGate()
    mgr = parentlca(s,t)
    # @assert vtree(s) != mgr && vtree(t) != mgr
    (s,t) = pointer_sort(s,t)
    get!(mgr.disjoin_cache, (s,t)) do 
        if descends_left_from(vtree(s), mgr)
            # @assert descends_right_from(vtree(t), mgr)
            elements = Element[Element(s,trimtrue),Element(!s,t)]
        else 
            # @assert descends_left_from(vtree(t), mgr)
            # @assert descends_right_from(vtree(s), mgr)
            elements = Element[Element(t,trimtrue),Element(!t,s)]
        end
        # TODO: the XY partition must already be compressed and trimmed
        unique⋁(XYPartition(elements), mgr)
    end
end

@inline Base.:|(s,t) = disjoin(s,t)

"""
Negate an SDD
"""
@inline negate(::TrimFalse)::TrimTrue = trimtrue
@inline negate(::TrimTrue)::TrimFalse = trimfalse

function negate(s::TrimLiteral)::TrimLiteral 
    if positive(s) 
        vtree(s).negative_literal
    else
        vtree(s).positive_literal
    end
end

negate(node::Trim⋁)::Trim⋁ = node.negation

@inline Base.:!(s) = negate(s)