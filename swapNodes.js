var tree_nodes=[]

function inorder(n){
    if(n==0) inorder_array=[]
    
    var left=tree_nodes[n][0]
    if(left!=-1) inorder(left-1)
        
    inorder_array.push(n+1)
    
    var right=tree_nodes[n][1]
    if(right!=-1) inorder(right-1)
    
    return inorder_array
}
function traverse(node,height,current_h){
        
        if(current_h%height==0){
            var temp=tree_nodes[node][0]
            tree_nodes[node][0]=tree_nodes[node][1]
            tree_nodes[node][1]=temp
        }
        var left_subtree=tree_nodes[node][0]
        var right_subtree=tree_nodes[node][1]
        
        if(left_subtree>-1)
            traverse(left_subtree-1,height,current_h+1);
        if(right_subtree>-1)
            traverse(right_subtree-1,height,current_h+1);
        
    if(node==0) console.log(inorder(0).join(' '))
}

function processData(input) {
    //Enter your code here
    input=input.split('\n')
    n=Number(input.shift())
    
    for(var i=0;i<n;i++){
        var node=input.shift().split(' ').map(function(a){ return Number(a) })
        tree_nodes[i]=node
    }
    
    n=Number(input.shift())
    for(var i=0;i<n;i++){
        var height=Number(input.shift())
        traverse(0,height,1)   
    }
} 

//First element indicates number of nodes (root always starts with 1), child elements, -1 indicate for null node, 
//next indicate how many times node needs to be swapped and then the height of node to be swapped
var input = '3\n2 3\n-1 -1\n-1 -1\n2\n1\n1';
processData(input);
input = '5\n2 3\n-1 4\n-1 5\n-1 -1\n-1 -1\n1\n2';
processData(input);
