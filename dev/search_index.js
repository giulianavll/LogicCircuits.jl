var documenterSearchIndex = {"docs":
[{"location":"manual/examples/#Examples-1","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"manual/examples/#","page":"Examples","title":"Examples","text":"note: Note\nMore examples coming soon, for now please refer to the Juice Examples Repository","category":"page"},{"location":"api/internals/data/#Data-1","page":"Data","title":"Data","text":"","category":"section"},{"location":"api/internals/data/#","page":"Data","title":"Data","text":"Modules = [Data]","category":"page"},{"location":"api/internals/data/#LogicCircuits.Data.AbstractData","page":"Data","title":"LogicCircuits.Data.AbstractData","text":"Any form of data where features are of type X\n\n\n\n\n\n","category":"type"},{"location":"api/internals/data/#LogicCircuits.Data.BatchedXDataset","page":"Data","title":"LogicCircuits.Data.BatchedXDataset","text":"Batches of unlabeled data with train/validation/test splits\n\n\n\n\n\n","category":"type"},{"location":"api/internals/data/#LogicCircuits.Data.BatchedXYDataset","page":"Data","title":"LogicCircuits.Data.BatchedXYDataset","text":"Batches of labeled data with train/validation/test splits\n\n\n\n\n\n","category":"type"},{"location":"api/internals/data/#LogicCircuits.Data.Dataset","page":"Data","title":"LogicCircuits.Data.Dataset","text":"A dataset with train/validation/test splits\n\n\n\n\n\n","category":"type"},{"location":"api/internals/data/#LogicCircuits.Data.LabeledDataset","page":"Data","title":"LogicCircuits.Data.LabeledDataset","text":"A labeled dataset with train/validation/test splits\n\n\n\n\n\n","category":"type"},{"location":"api/internals/data/#LogicCircuits.Data.PlainXData","page":"Data","title":"LogicCircuits.Data.PlainXData","text":"Unlabeled data (X-values) with a direct matrix representation\n\n\n\n\n\n","category":"type"},{"location":"api/internals/data/#LogicCircuits.Data.UnlabeledDataset","page":"Data","title":"LogicCircuits.Data.UnlabeledDataset","text":"An unlabeled dataset with train/validation/test splits\n\n\n\n\n\n","category":"type"},{"location":"api/internals/data/#LogicCircuits.Data.WXData","page":"Data","title":"LogicCircuits.Data.WXData","text":"Unlabeled data (X-values) with weights for each example\n\n\n\n\n\n","category":"type"},{"location":"api/internals/data/#LogicCircuits.Data.XBatches","page":"Data","title":"LogicCircuits.Data.XBatches","text":"Batches of unlabeled XData\n\n\n\n\n\n","category":"type"},{"location":"api/internals/data/#LogicCircuits.Data.XData","page":"Data","title":"LogicCircuits.Data.XData","text":"Abstract unlabeled data (X-values)\n\n\n\n\n\n","category":"type"},{"location":"api/internals/data/#LogicCircuits.Data.XDataset","page":"Data","title":"LogicCircuits.Data.XDataset","text":"An single unlabeled dataset with train/validation/test splits\n\n\n\n\n\n","category":"type"},{"location":"api/internals/data/#LogicCircuits.Data.XYBatches","page":"Data","title":"LogicCircuits.Data.XYBatches","text":"Batches of labeled XYData\n\n\n\n\n\n","category":"type"},{"location":"api/internals/data/#LogicCircuits.Data.XYData","page":"Data","title":"LogicCircuits.Data.XYData","text":"Labeled data (X-values with Y-labels)\n\n\n\n\n\n","category":"type"},{"location":"api/internals/data/#LogicCircuits.Data.XYDataset","page":"Data","title":"LogicCircuits.Data.XYDataset","text":"An single labeled dataset with train/validation/test splits\n\n\n\n\n\n","category":"type"},{"location":"api/internals/data/#LogicCircuits.Data.aggr_weight_type-Tuple{Any}","page":"Data","title":"LogicCircuits.Data.aggr_weight_type","text":"What type should instance weights aggregate to?\n\n\n\n\n\n","category":"method"},{"location":"api/internals/data/#LogicCircuits.Data.feature_data-Tuple{XYData}","page":"Data","title":"LogicCircuits.Data.feature_data","text":"Get the unlabeled feature portion of the data\n\n\n\n\n\n","category":"method"},{"location":"api/internals/data/#LogicCircuits.Data.feature_matrix-Tuple{XData}","page":"Data","title":"LogicCircuits.Data.feature_matrix","text":"Get the data as a feature matrix\n\n\n\n\n\n","category":"method"},{"location":"api/internals/data/#LogicCircuits.Data.feature_type-Union{Tuple{Type{#s36} where #s36<:AbstractData{X}}, Tuple{X}} where X","page":"Data","title":"LogicCircuits.Data.feature_type","text":"Get the type of the feature matrix elements\n\n\n\n\n\n","category":"method"},{"location":"api/internals/data/#LogicCircuits.Data.label_type-Union{Tuple{XYData{X,Y,XD,V} where V<:(AbstractArray{#s13,1} where #s13<:Y) where XD<:(XData{#s14,M} where M<:(AbstractArray{#s141,2} where #s141<:#s14) where #s14<:X)}, Tuple{Y}, Tuple{X}} where Y where X","page":"Data","title":"LogicCircuits.Data.label_type","text":"Get the type of the label vector elements\n\n\n\n\n\n","category":"method"},{"location":"api/internals/data/#LogicCircuits.Data.labels-Tuple{XYData}","page":"Data","title":"LogicCircuits.Data.labels","text":"Get the label vector of the data\n\n\n\n\n\n","category":"method"},{"location":"api/internals/data/#LogicCircuits.Data.max_batch_size-Tuple{Union{XData, XYData}}","page":"Data","title":"LogicCircuits.Data.max_batch_size","text":"Size of the largest batch\n\n\n\n\n\n","category":"method"},{"location":"api/internals/data/#LogicCircuits.Data.num_batches-Tuple{Union{AbstractArray{#s14,1} where #s14<:XD where XD<:(XData{X,M} where M<:(AbstractArray{#s14,2} where #s14<:X)) where X, AbstractArray{#s14,1} where #s14<:XYD where XYD<:(XYData{X,Y,XD,V} where V<:(AbstractArray{#s13,1} where #s13<:Y) where XD<:(XData{#s14,M} where M<:(AbstractArray{#s141,2} where #s141<:#s14) where #s14<:X)) where Y where X}}","page":"Data","title":"LogicCircuits.Data.num_batches","text":"Number of batches in the dataset\n\n\n\n\n\n","category":"method"},{"location":"api/internals/data/#LogicCircuits.Data.num_examples-Tuple{Nothing}","page":"Data","title":"LogicCircuits.Data.num_examples","text":"Number of examples in data\n\n\n\n\n\n","category":"method"},{"location":"api/internals/data/#LogicCircuits.Data.num_features-Tuple{WXData}","page":"Data","title":"LogicCircuits.Data.num_features","text":"Number of features in the data\n\n\n\n\n\n","category":"method"},{"location":"api/internals/data/#LogicCircuits.Data.num_labels-Tuple{XYData}","page":"Data","title":"LogicCircuits.Data.num_labels","text":"Number of labels in the data\n\n\n\n\n\n","category":"method"},{"location":"api/internals/data/#LogicCircuits.Data.test-Tuple{Dataset}","page":"Data","title":"LogicCircuits.Data.test","text":"Get the testing fold of the data\n\n\n\n\n\n","category":"method"},{"location":"api/internals/data/#LogicCircuits.Data.total_example_weight-Tuple{Nothing}","page":"Data","title":"LogicCircuits.Data.total_example_weight","text":"Count the number of example in a weighted dataset\n\n\n\n\n\n","category":"method"},{"location":"api/internals/data/#LogicCircuits.Data.train-Tuple{Dataset}","page":"Data","title":"LogicCircuits.Data.train","text":"Get the training fold of the data\n\n\n\n\n\n","category":"method"},{"location":"api/internals/data/#LogicCircuits.Data.unweighted_data-Tuple{PlainXData}","page":"Data","title":"LogicCircuits.Data.unweighted_data","text":"Get the data as plain unweighted data\n\n\n\n\n\n","category":"method"},{"location":"api/internals/data/#LogicCircuits.Data.valid-Tuple{Dataset}","page":"Data","title":"LogicCircuits.Data.valid","text":"Get the validation fold of the data\n\n\n\n\n\n","category":"method"},{"location":"api/internals/data/#LogicCircuits.Data.vslice-Tuple{PlainXData,Any,Any}","page":"Data","title":"LogicCircuits.Data.vslice","text":"Get slices of data (rows and columns ids) as a view (no memory allocation)\n\n\n\n\n\n","category":"method"},{"location":"api/internals/data/#LogicCircuits.Data.weights-Tuple{WXData}","page":"Data","title":"LogicCircuits.Data.weights","text":"Get the weight vector of the data\n\n\n\n\n\n","category":"method"},{"location":"api/internals/data/#LogicCircuits.Data.replace_features-Union{Tuple{M}, Tuple{PlainXData,M}} where M","page":"Data","title":"LogicCircuits.Data.replace_features","text":"Replace the feature matrix in data by a given matrix\n\n\n\n\n\n","category":"method"},{"location":"api/internals/data/#LogicCircuits.Data.unslice-Union{Tuple{Array{PlainXData{X,M},1}}, Tuple{M}, Tuple{X}} where M where X","page":"Data","title":"LogicCircuits.Data.unslice","text":"Undo batch operation, combine batches into one\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#Utils-1","page":"Utils","title":"Utils","text":"","category":"section"},{"location":"api/internals/utils/#","page":"Utils","title":"Utils","text":"Modules = [Utils]","category":"page"},{"location":"api/internals/utils/#LogicCircuits.Utils","page":"Utils","title":"LogicCircuits.Utils","text":"Module with general utilities and missing standard library features that could be useful in any Julia project\n\n\n\n\n\n","category":"module"},{"location":"api/internals/utils/#Base.typejoin-Tuple{AbstractArray}","page":"Utils","title":"Base.typejoin","text":"Get the most specific type parameter possible for an array\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.children-Tuple{Node}","page":"Utils","title":"LogicCircuits.Utils.children","text":"Get the children of a given inner node\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.copy_with_eltype-Tuple{Any,Type}","page":"Utils","title":"LogicCircuits.Utils.copy_with_eltype","text":"Copy the array while changing the element type\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.flip_bit-Union{Tuple{DagNode}, Tuple{Bit}, Tuple{DagNode,Val{Bit}}} where Bit","page":"Utils","title":"LogicCircuits.Utils.flip_bit","text":"Flip the bit field throughout this circuit (or ensure it is set to given value)\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.foldup-Union{Tuple{T}, Tuple{AbstractArray{#s14,1} where #s14<:DagNode,Function,Function,Type{T}}} where T","page":"Utils","title":"LogicCircuits.Utils.foldup","text":"Compute a function bottom-up on the circuit.  f_leaf is called on leaf nodes, and f_inner is called on inner nodes. Values of type T are passed up the circuit and given to f_inner as a function on the children.\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.foldup_aggregate-Union{Tuple{T}, Tuple{AbstractArray{#s14,1} where #s14<:DagNode,Function,Function,Type{T}}} where T","page":"Utils","title":"LogicCircuits.Utils.foldup_aggregate","text":"Compute a function bottom-up on the circuit.  f_leaf is called on leaf nodes, and f_inner is called on inner nodes. Values of type T are passed up the circuit and given to f_inner in aggregate as a vector from the children.\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.grapheltype-Tuple{AbstractArray{#s14,1} where #s14<:Node}","page":"Utils","title":"LogicCircuits.Utils.grapheltype","text":"Get the type of node contained in this graph\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.has_children-Tuple{Node}","page":"Utils","title":"LogicCircuits.Utils.has_children","text":"Does the node have children?\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.inode_stats-Tuple{Union{DagNode, AbstractArray{#s14,1} where #s14<:Node}}","page":"Utils","title":"LogicCircuits.Utils.inode_stats","text":"Give count of types and fan-ins of inner nodes in the graph\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.inodes-Tuple{Union{DagNode, AbstractArray{#s14,1} where #s14<:Node}}","page":"Utils","title":"LogicCircuits.Utils.inodes","text":"Get the list of inner nodes in a given graph\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.isequal_local","page":"Utils","title":"LogicCircuits.Utils.isequal_local","text":"Is one node equal to another locally, ignoring children?\n\n\n\n\n\n","category":"function"},{"location":"api/internals/utils/#LogicCircuits.Utils.isequal_unordered-Tuple{AbstractArray{#s14,1} where #s14<:TreeNode,AbstractArray{#s14,1} where #s14<:TreeNode}","page":"Utils","title":"LogicCircuits.Utils.isequal_unordered","text":"Is one unordered tree equal to another?\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.issomething-Tuple{Any}","page":"Utils","title":"LogicCircuits.Utils.issomething","text":"Is the argument not nothing?\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.lca-Tuple{DagNode}","page":"Utils","title":"LogicCircuits.Utils.lca","text":"Find the least common ancestor (assumes the graph has a parent pointer and a list of descendents)\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.leaf_stats-Tuple{Union{DagNode, AbstractArray{#s14,1} where #s14<:Node}}","page":"Utils","title":"LogicCircuits.Utils.leaf_stats","text":"Give count of types of leaf nodes in the graph\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.leafnodes-Tuple{AbstractArray{#s14,1} where #s14<:Node}","page":"Utils","title":"LogicCircuits.Utils.leafnodes","text":"Get the list of leaf nodes in a given graph\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.left_most_child-Tuple{DagNode}","page":"Utils","title":"LogicCircuits.Utils.left_most_child","text":"Return the leftmost child.\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.lower_element_type-Union{Tuple{AbstractArray{T,N} where N}, Tuple{T}} where T","page":"Utils","title":"LogicCircuits.Utils.lower_element_type","text":"Specialize the type parameter of an array to be most specific\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.node2dag-Union{Tuple{DagNode}, Tuple{T}, Tuple{DagNode,Type{T}}} where T","page":"Utils","title":"LogicCircuits.Utils.node2dag","text":"Rebuild a DAG's linear bottom-up order from a new root node\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.node_stats-Tuple{Union{DagNode, AbstractArray{#s14,1} where #s14<:Node}}","page":"Utils","title":"LogicCircuits.Utils.node_stats","text":"Give count of types and fan-ins of all nodes in the graph\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.num_children-Tuple{Node}","page":"Utils","title":"LogicCircuits.Utils.num_children","text":"Get the number of children of a given inner node\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.num_edges-Tuple{AbstractArray{#s14,1} where #s14<:Node}","page":"Utils","title":"LogicCircuits.Utils.num_edges","text":"Number of edges in the graph\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.num_nodes-Tuple{AbstractArray{#s14,1} where #s14<:Node}","page":"Utils","title":"LogicCircuits.Utils.num_nodes","text":"Number of nodes in the graph\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.pushrand!-Tuple{AbstractArray{#s13,1} where #s13,Any}","page":"Utils","title":"LogicCircuits.Utils.pushrand!","text":"Push element into random position\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.right_most_child-Tuple{DagNode}","page":"Utils","title":"LogicCircuits.Utils.right_most_child","text":"Return the rightmost child.\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.tree_num_nodes-Tuple{AbstractArray{#s14,1} where #s14<:DagNode}","page":"Utils","title":"LogicCircuits.Utils.tree_num_nodes","text":"Compute the number of nodes in of a tree-unfolding of the DAG. \n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#StatsFuns.logsumexp-Tuple{AbstractArray,Any}","page":"Utils","title":"StatsFuns.logsumexp","text":"Marginalize out dimensions dims from log-probability tensor\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.Downpass","page":"Utils","title":"LogicCircuits.Utils.Downpass","text":"Compute a function top down on the circuit. f_root is called on the root node, f_leaf is called on leaf nodes, and f_inner is called on inner nodes. Values of type T are passed down the circuit and given to f_inner as a value from the parent.\n\n\n\n\n\n","category":"type"},{"location":"api/internals/utils/#Base.filter-Union{Tuple{T}, Tuple{Function,DagNode}, Tuple{Function,DagNode,Type{T}}} where T","page":"Utils","title":"Base.filter","text":"Retrieve list of nodes in circuit matching predicate p\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#Base.isequal-Tuple{AbstractArray{#s14,1} where #s14<:TreeNode,AbstractArray{#s14,1} where #s14<:TreeNode}","page":"Utils","title":"Base.isequal","text":"Is one ordered tree equal to another?\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.expand_product-Union{Tuple{E}, Tuple{Any,Type{E},Union{Expr, Symbol},Union{Expr, Symbol}}} where E","page":"Utils","title":"LogicCircuits.Utils.expand_product","text":"generate an expression for the loop-unrolled product of x1 and xs...\n\n\n\n\n\n","category":"method"},{"location":"api/internals/utils/#LogicCircuits.Utils.expand_product-Union{Tuple{E}, Tuple{Any,Type{E},Union{Expr, Symbol}}} where E","page":"Utils","title":"LogicCircuits.Utils.expand_product","text":"generate an expression for the loop-unrolled product of xs...\n\n\n\n\n\n","category":"method"},{"location":"api/internals/logicCircuit/#LogicCircuits-1","page":"LogicCircuits","title":"LogicCircuits","text":"","category":"section"},{"location":"api/internals/logicCircuit/#","page":"LogicCircuits","title":"LogicCircuits","text":"Modules = [LogicCircuits]","category":"page"},{"location":"manual/installation/#Installation-1","page":"Installation","title":"Installation","text":"","category":"section"},{"location":"manual/installation/#","page":"Installation","title":"Installation","text":"To install the latest stable release, run:","category":"page"},{"location":"manual/installation/#","page":"Installation","title":"Installation","text":"julia -e 'using Pkg; Pkg.add(\"LogicCircuits\")'","category":"page"},{"location":"api/internals/io/#IO-1","page":"IO","title":"IO","text":"","category":"section"},{"location":"api/internals/io/#","page":"IO","title":"IO","text":"Modules = [LogicCircuits.IO]","category":"page"},{"location":"api/internals/io/#LogicCircuits.IO.load_logical_circuit-Tuple{String}","page":"IO","title":"LogicCircuits.IO.load_logical_circuit","text":"Load a logical circuit from file. Support file formats:\n\n\".sdd\" for SDD files\n\".psdd\" for PSDD files\n\".circuit\" for Logistic Circuit files\n\n\n\n\n\n","category":"method"},{"location":"api/internals/io/#LogicCircuits.IO.load_smooth_logical_circuit-Tuple{String}","page":"IO","title":"LogicCircuits.IO.load_smooth_logical_circuit","text":"Load a smooth logical circuit from file. Support file formats:\n\n\".psdd\" for PSDD files\n\".circuit\" for Logistic Circuit files\n\n\n\n\n\n","category":"method"},{"location":"api/internals/io/#LogicCircuits.IO.load_struct_smooth_logical_circuit-Tuple{String,String}","page":"IO","title":"LogicCircuits.IO.load_struct_smooth_logical_circuit","text":"Load a smooth structured logical circuit from file. Support circuit file formats:\n\n\".psdd\" for PSDD files\n\".circuit\" for Logistic Circuit files\n\nSupported vtree file formats:\n\n\".vtree\" for VTree files\n\n\n\n\n\n","category":"method"},{"location":"api/internals/io/#LogicCircuits.IO.save-Tuple{AbstractArray{#s37,1} where #s37<:PlainVtreeNode,AbstractString}","page":"IO","title":"LogicCircuits.IO.save","text":"Saves a vtree in the given file path.\n\n\n\n\n\n","category":"method"},{"location":"api/internals/io/#LogicCircuits.IO.BiasLine","page":"IO","title":"LogicCircuits.IO.BiasLine","text":"A line representing a bias node in the circuit (an OR with one child)\n\n\n\n\n\n","category":"type"},{"location":"api/internals/io/#LogicCircuits.IO.CircuitCommentLine","page":"IO","title":"LogicCircuits.IO.CircuitCommentLine","text":"A string comment line for circuit files\n\n\n\n\n\n","category":"type"},{"location":"api/internals/io/#LogicCircuits.IO.CircuitFormatLine","page":"IO","title":"LogicCircuits.IO.CircuitFormatLine","text":"A parsed circuit file format line\n\n\n\n\n\n","category":"type"},{"location":"api/internals/io/#LogicCircuits.IO.CircuitFormatLines","page":"IO","title":"LogicCircuits.IO.CircuitFormatLines","text":"A file consisting for circuit formal lines\n\n\n\n\n\n","category":"type"},{"location":"api/internals/io/#LogicCircuits.IO.CircuitHeaderLine","page":"IO","title":"LogicCircuits.IO.CircuitHeaderLine","text":"A header line for circuit files\n\n\n\n\n\n","category":"type"},{"location":"api/internals/io/#LogicCircuits.IO.ConstantLine","page":"IO","title":"LogicCircuits.IO.ConstantLine","text":"A line representing either the true or false logical constants\n\n\n\n\n\n","category":"type"},{"location":"api/internals/io/#LogicCircuits.IO.DecisionLine","page":"IO","title":"LogicCircuits.IO.DecisionLine","text":"A line representing a decision node in the circuit (an OR of AND elements)\n\n\n\n\n\n","category":"type"},{"location":"api/internals/io/#LogicCircuits.IO.Element","page":"IO","title":"LogicCircuits.IO.Element","text":"Paired boxes, or elements, are conjunctions  in a larger decision node line\n\n\n\n\n\n","category":"type"},{"location":"api/internals/io/#LogicCircuits.IO.ID","page":"IO","title":"LogicCircuits.IO.ID","text":"Circuit and vtree node ids used for IO\n\n\n\n\n\n","category":"type"},{"location":"api/internals/io/#LogicCircuits.IO.InnerCircuitLine","page":"IO","title":"LogicCircuits.IO.InnerCircuitLine","text":"A circuit format line with child IDs\n\n\n\n\n\n","category":"type"},{"location":"api/internals/io/#LogicCircuits.IO.LeafCircuitLine","page":"IO","title":"LogicCircuits.IO.LeafCircuitLine","text":"A circuit format line without child IDs\n\n\n\n\n\n","category":"type"},{"location":"api/internals/io/#LogicCircuits.IO.LiteralLine","page":"IO","title":"LogicCircuits.IO.LiteralLine","text":"A line that represents a logical literal\n\n\n\n\n\n","category":"type"},{"location":"api/internals/io/#LogicCircuits.IO.UnweightedLiteralLine","page":"IO","title":"LogicCircuits.IO.UnweightedLiteralLine","text":"A line representing a single literal without parameters.\n\n\n\n\n\n","category":"type"},{"location":"api/internals/io/#LogicCircuits.IO.VtreeAbstractFile","page":"IO","title":"LogicCircuits.IO.VtreeAbstractFile","text":"Used to specify file type .vtree or .dot\n\n\n\n\n\n","category":"type"},{"location":"api/internals/io/#LogicCircuits.IO.VtreeFormatLine","page":"IO","title":"LogicCircuits.IO.VtreeFormatLine","text":"A line in one vtree file format\n\n\n\n\n\n","category":"type"},{"location":"api/internals/io/#LogicCircuits.IO.WeightedLiteralLine","page":"IO","title":"LogicCircuits.IO.WeightedLiteralLine","text":"A line representing a weighted single literal (for example a logistic circuit literal).\n\n\n\n\n\n","category":"type"},{"location":"api/internals/io/#LogicCircuits.IO.WeightedNamedConstantLine","page":"IO","title":"LogicCircuits.IO.WeightedNamedConstantLine","text":"A weighted constant line for a known variable\n\n\n\n\n\n","category":"type"},{"location":"api/internals/io/#LogicCircuits.IO.compile_logical-Tuple{AbstractArray{#s37,1} where #s37<:LogicCircuits.IO.CircuitFormatLine}","page":"IO","title":"LogicCircuits.IO.compile_logical","text":"Compile lines into a unstructured logical circuit\n\n\n\n\n\n","category":"method"},{"location":"api/internals/io/#LogicCircuits.IO.compile_logical_m-Tuple{AbstractArray{#s37,1} where #s37<:LogicCircuits.IO.CircuitFormatLine}","page":"IO","title":"LogicCircuits.IO.compile_logical_m","text":"Compile lines into a unstructured logical circuit,  while keeping track of id-to-node mappings\n\n\n\n\n\n","category":"method"},{"location":"api/internals/io/#LogicCircuits.IO.compile_smooth_logical-Tuple{AbstractArray{#s37,1} where #s37<:LogicCircuits.IO.CircuitFormatLine}","page":"IO","title":"LogicCircuits.IO.compile_smooth_logical","text":"Compile lines into a smooth unstructured logical circuit\n\n\n\n\n\n","category":"method"},{"location":"api/internals/io/#LogicCircuits.IO.compile_smooth_logical_m-Tuple{AbstractArray{#s37,1} where #s37<:LogicCircuits.IO.CircuitFormatLine}","page":"IO","title":"LogicCircuits.IO.compile_smooth_logical_m","text":"Compile lines into a smooth unstructured logical circuit,  while keeping track of id-to-node mappings\n\n\n\n\n\n","category":"method"},{"location":"api/internals/io/#LogicCircuits.IO.compile_smooth_struct_logical-Tuple{AbstractArray{#s37,1} where #s37<:LogicCircuits.IO.CircuitFormatLine,AbstractArray{#s37,1} where #s37<:LogicCircuits.IO.VtreeFormatLine}","page":"IO","title":"LogicCircuits.IO.compile_smooth_struct_logical","text":"Compile circuit and vtree lines into a structured logical circuit with its vtree\n\n\n\n\n\n","category":"method"},{"location":"api/internals/io/#LogicCircuits.IO.compile_smooth_struct_logical_m-Tuple{AbstractArray{#s37,1} where #s37<:LogicCircuits.IO.CircuitFormatLine,AbstractArray{#s37,1} where #s37<:LogicCircuits.IO.VtreeFormatLine}","page":"IO","title":"LogicCircuits.IO.compile_smooth_struct_logical_m","text":"Compile circuit and vtree lines into a structured logical circuit with its vtree,  while keeping track of id-to-node mappings\n\n\n\n\n\n","category":"method"},{"location":"api/internals/io/#LogicCircuits.IO.compile_smooth_struct_logical_m-Tuple{AbstractArray{#s37,1} where #s37<:LogicCircuits.IO.CircuitFormatLine,Dict{UInt32,PlainVtreeNode}}","page":"IO","title":"LogicCircuits.IO.compile_smooth_struct_logical_m","text":"Compile circuit lines and vtree node mapping into a structured logical circuit,  while keeping track of id-to-node mappings\n\n\n\n\n\n","category":"method"},{"location":"api/internals/io/#LogicCircuits.IO.load_cnf-Tuple{String}","page":"IO","title":"LogicCircuits.IO.load_cnf","text":"Load a CNF as a logical circuit from file. Supppor file formats:\n\n\".cnf\" for CNF files\n\n\n\n\n\n","category":"method"},{"location":"api/internals/io/#LogicCircuits.IO.load_dnf-Tuple{String}","page":"IO","title":"LogicCircuits.IO.load_dnf","text":"Load a CNF as a logical circuit from file. Supppor file formats:\n\n\".cnf\" for CNF files\n\n\n\n\n\n","category":"method"},{"location":"#LogicCircuits.jl-1","page":"Home","title":"LogicCircuits.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Documentation for LogicCircuits.jl","category":"page"},{"location":"#","page":"Home","title":"Home","text":"note: Note\nThe documentation is still under construction and not complete yet. For more information or documentation requests please refer to the github repo for now.","category":"page"},{"location":"api/public/#Public-Documentation-1","page":"Public","title":"Public Documentation","text":"","category":"section"},{"location":"api/public/#","page":"Public","title":"Public","text":"Documentation for LogicCircuits.jl's public interface.","category":"page"},{"location":"api/public/#","page":"Public","title":"Public","text":"See the Internals section of the manual for internal package docs covering all submodules.","category":"page"},{"location":"api/public/#Contents-1","page":"Public","title":"Contents","text":"","category":"section"},{"location":"api/public/#","page":"Public","title":"Public","text":"Pages = [\"public.md\"]","category":"page"},{"location":"api/public/#Index-1","page":"Public","title":"Index","text":"","category":"section"},{"location":"api/public/#","page":"Public","title":"Public","text":"Pages = [\"public.md\"]","category":"page"},{"location":"api/public/#Public-Interface-1","page":"Public","title":"Public Interface","text":"","category":"section"},{"location":"api/public/#","page":"Public","title":"Public","text":"load_logical_circuit\nload_smooth_logical_circuit","category":"page"},{"location":"api/public/#LogicCircuits.IO.load_logical_circuit","page":"Public","title":"LogicCircuits.IO.load_logical_circuit","text":"Load a logical circuit from file. Support file formats:\n\n\".sdd\" for SDD files\n\".psdd\" for PSDD files\n\".circuit\" for Logistic Circuit files\n\n\n\n\n\n","category":"function"},{"location":"api/public/#LogicCircuits.IO.load_smooth_logical_circuit","page":"Public","title":"LogicCircuits.IO.load_smooth_logical_circuit","text":"Load a smooth logical circuit from file. Support file formats:\n\n\".psdd\" for PSDD files\n\".circuit\" for Logistic Circuit files\n\n\n\n\n\n","category":"function"}]
}