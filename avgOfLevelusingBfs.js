'use strict'

class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.adjList = new Map();
    }

    addVertex(v) {
        this.adjList.set(v, []);
    }

    addEdge(v,w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }

    printGraph() {
        let keys = this.adjList.keys();
        for(let i of keys) {
            let concatenate = '';
            let elementList = this.adjList.get(i);

            for(let j of elementList) {
                concatenate += j + ' ';
            }
            console.log(i , '->' , concatenate);
        }
    }

    bfs(startingNode) {
        let visited = [];
        for(let i = 0; i < this.noOfVertices; i++) {
            visited[i] = false;
        }

        let items = [];
        visited[startingNode] = true;

        let level = [];
        level[startingNode] = 0;
        let levelIndex = 0;

        let bfsInfo = new Map();
        bfsInfo.set(levelIndex,[]);
        bfsInfo.get(levelIndex).push(startingNode);
        items.push(startingNode);

        while(items.length !== 0) {
            startingNode = items[0];
            let queueElement = items.shift();
            
            let elementList = this.adjList.get(queueElement);
            for(let j in elementList) {
                let neighbor = elementList[j];
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    level[neighbor]= level[startingNode]+1;
                    if(bfsInfo.has(level[neighbor])) {
                        bfsInfo.get(level[neighbor]).push(neighbor);
                    }
                    else {
                        bfsInfo.set(level[neighbor],[]);
                        bfsInfo.get(level[neighbor]).push(neighbor);
                    }
                    items.push(neighbor);
                }
            }
        }

        return bfsInfo;

    }
}

const graph = new Graph(6);
let vertices = [4,6,8,2,1,3];
for(let i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i]);
}

graph.addEdge(4,6);
graph.addEdge(4,8);
graph.addEdge(6,2);
graph.addEdge(6,1);
graph.addEdge(1,3);
graph.addEdge(8,3);

graph.printGraph();
var bfsInfo = graph.bfs(4);
for(let k = 0; k < bfsInfo.size; k++) {
    let elements = bfsInfo.get(k);
    let noOfElements = elements.length;
    let sum = 0;
    for(let j in elements) {
        sum += elements[j];
    }
    console.log('Level ' , k+1 , ' Avg ' , sum/noOfElements);
}

let vertices1 = ['A','B','C','D','E','F'];
for(let i = 0 ; i < vertices1.length; i++) {
    graph.addVertex(vertices1[i]);
}

graph.addEdge('A', 'B'); 
graph.addEdge('A', 'D'); 
graph.addEdge('A', 'E'); 
graph.addEdge('B', 'C'); 
graph.addEdge('D', 'E'); 
graph.addEdge('E', 'F'); 
graph.addEdge('E', 'C'); 
graph.addEdge('C', 'F'); 

var bfsInfo = graph.bfs('A');
for(let k = 0; k < bfsInfo.size; k++) {
    let elements = bfsInfo.get(k);
    let path = [];
    for(let j in elements) {
        path.push(elements[j]);
    }
    console.log('Level ' , k+1 , ' Path ' , path.join(','));
}