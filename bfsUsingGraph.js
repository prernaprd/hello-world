'use strict'
import Graph from './graph';

let graph = new Graph(6);
let vertices = ['A','B','C','D','E','F'];
for(let i = 0 ; i < vertices.length; i++) {
    graph.addVertex(vertices[i]);
}

graph.addEdge('A', 'B'); 
graph.addEdge('A', 'D'); 
graph.addEdge('A', 'E'); 
graph.addEdge('B', 'C'); 
graph.addEdge('D', 'E'); 
graph.addEdge('E', 'F'); 
graph.addEdge('E', 'C'); 
graph.addEdge('C', 'F'); 

graph.printGraph();