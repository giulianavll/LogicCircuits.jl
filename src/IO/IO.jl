module IO

using ..Utils
using ..Logical

export

# CircuitParser
load_logical_circuit, 
load_smooth_logical_circuit, 
load_struct_smooth_logical_circuit, 
load_psdd_logical_circuit,
load_lc_logical_circuit, 
parse_lc_file, 
parse_psdd_file,

# CircuitLineCompiler
# CircuitLineTypes
# can be kept internal

# CircuitSaver
save_as_dot, is_true_node, save_circuit,
# get_node2id,get_vtree2id,vtree_node, decompile, make_element, save_lines, save_psdd_comment_line, save_sdd_comment_line, 
# save_line, to_string

# VtreeParser / Saver
parse_vtree_file, compile_vtree_format_lines, load_vtree, save,

# Loaders
mnist, sampled_mnist, twenty_datasets, twenty_dataset_names, dataset, 
zoo_vtree_file, zoo_vtree, zoo_psdd, zoo_lc, zoo_clt,
zoo_cnf_file, zoo_cnf, zoo_dnf_file, zoo_dnf,
zoo_lc_file, zoo_psdd_file, zoo_clt_file, zoo_sdd_file

include("VtreeLineCompiler.jl")
include("VtreeParser.jl")
include("VtreeSaver.jl")

include("CircuitLineTypes.jl")
include("CircuitLineCompiler.jl")
include("CircuitParser.jl")

include("CircuitSaver.jl")

include("Loaders.jl")

end