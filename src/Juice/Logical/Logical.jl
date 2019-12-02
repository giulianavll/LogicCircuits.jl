module Logical

using StatsFuns: logsumexp

using ...Data
using ...Utils

export

# Circuits
Var, Lit, var2lit, lit2var, ΔNode, Δ, 
LiteralLeaf, ConstantLeaf, ⋁, ⋀, ⋁_nodes,
GateType, InnerGate, LeafGate, is_decomposable,
negative, positive, variable, literal, tree_size, variable_scopes, variable_scope, num_variables,
propagate_constants, is_smooth, smooth, forget, true_like, false_like, 
DecoratorΔ, DecoratorΔNode, origin, grand_origin, is_true, is_false, constant,

# LogicalCircuits
LogicalΔNode, UnstLogicalΔNode, LogicalLeafNode, LogicalΔ, UnstLogicalΔ,
LiteralNode, ConstantNode, ⋁Node, ⋀Node, TrueNode, FalseNode,

# UpFlowCircuits
UpFlowΔNode, UpFlowΔ, UpFlowΔ, UpFlowLeafNode, UpFlowInnerNode,
UpFlowLiteral, UpFlowConstant, UpFlow⋀Compact, UpFlow⋀Cached, UpFlow⋁Compact, UpFlow⋁Cached, UpFlow⋀, UpFlow⋁,
flow_opts★, pass_up, pass_up_node, pr_factors, pr, resize_flows, flow_length,

# DownFlowCircuits
DownFlowΔNode, DownFlowΔ, DownFlowΔ, DownFlowLeaf, DownFlowInnerNode,
DownFlow⋀Compact, DownFlow⋀Cached, DownFlow⋁Compact, DownFlow⋁Cached, DownFlow⋀, DownFlow⋁,
HasDownFlow, pass_down, pass_up_down, downflow, reset_downflow_in_progress, downflow_sinks,
FlowΔNode, FlowΔ, FlowΔ,

# AggregateFlowCircuits
AggregateFlowΔ, AggregateFlowΔ, AggregateFlowΔNode, AggregateFlow⋁,
reset_aggregate_flows, accumulate_aggr_flows_batch, accumulate_aggr_flows_cached, opts_accumulate_flows, collect_aggr_flows,
accumulate_aggr_flows,

# Vtree
VtreeNode, Vtree,

# StructuredLogicalCircuits
StructLogicalΔNode, StructLogicalLeafNode, StructLogicalCircuit,
StructLiteralNode, StructConstantNode, Struct⋁Node, Struct⋀Node, vtree,

# PlainVtree
PlainVtreeNode, PlainVtreeLeafNode, PlainVtreeInnerNode, isleaf, variables, num_variables, PlainVtree,
top_down_vtree, bottom_up_vtree,
path_length, random_vtree,

# SddMgr
SddMgrNode, SddMgr,

# TrimSddMgr
TrimSddMgrNode, TrimSddMgr, compile


include("Circuits.jl")
include("LogicalCircuits.jl")
include("UpFlowCircuits.jl")
include("DownFlowCircuits.jl")
include("AggregateFlowCircuits.jl")

include("vtrees/Vtree.jl")
include("StructuredLogicalCircuits.jl")

include("vtrees/PlainVtree.jl")
include("vtrees/SddMgr.jl")
include("vtrees/TrimSddMgr.jl")


end
