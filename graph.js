'use strict'

class Queue {
    constructor(){
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
       return this.items.shift();
    }

    peek(){
        return this.items[0];
    }

    isEmpty(){
        return this.items.length === 0;
    }
}

class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.adjList = new Map();
    }

    addVertex(v) {
        this.adjList.set(v,[]);
    }

    addEdge(v,w){
        this.adjList.get(v).push(w);
        //Since its an undirected graph push the same edge on other vertex
        this.adjList.get(w).push(v);
    }

    printGraph() {
        let keys = this.adjList.keys();

        for(let i of keys) {
            let values = this.adjList.get(i);
            let concatenate = '';

            for(let j of values) {
                concatenate += j + ' ';
            }
            console.log(i, '->', concatenate);
        }
    }

    bfs(startingNode) {
        let visited = [];

        for(let i = 0; i < this.noOfVertices; i++) {
            visited[i] = false;
        }

        let q = new Queue();
        visited[startingNode] = true;
        q.enqueue(startingNode);
        let path = [];

        while(!q.isEmpty()) {
            let queueElement = q.items.shift();

            path.push(queueElement);
            let childList = this.adjList.get(queueElement);

            for(let i in childList){
                let neighbor = childList[i];
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    q.enqueue(neighbor);
                }
            }
        }
        return path;
    }

    dfs(startingNode) {
        let visited = [];
        for(let i = 0; i < this.noOfVertices; i++) {
            visited[i] = false;
        }

        return this.dfsUtil(startingNode, visited, []);
    }

    dfsUtil(vertex, visited, path) {
        visited[vertex] = true;
        path.push(vertex);

        let childList = this.adjList.get(vertex);
        for(let i in childList) {
            let neighbor = childList[i];
            if(!visited[neighbor]) {
                this.dfsUtil(neighbor, visited, path);
            }
        }

        return path;
    }

}

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
console.log('BFS');
console.log(graph.bfs('A'));
console.log('DFS');
console.log(graph.dfs('A'));

