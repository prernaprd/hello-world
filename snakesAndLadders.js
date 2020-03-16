'use strict'

class Graph{
    constructor(noOfvertices) {
        this.noOfvertices = noOfvertices;
        this.adjList = new Map();
    }

    addVertex(v) {
        this.adjList.set(v,[]);
    }

    addEdge(v, w) {
        this.adjList.get(v).push(w);
    }

    printGraph() {
        let keys = this.adjList.keys();
        for(let k of keys) {
            let element = this.adjList.get(k);
            let concatenate = '';
            for(let l of element) {
                concatenate += l + ' '
            }
            console.log(k , '->', concatenate);
        }
    }

    replace(originalVertext, newVertex) {
        let keys = this.adjList.keys();
        let preceedingVertex = originalVertext - 6 < 0 ? 1 : originalVertext - 6;
        for(let k of keys) {
            if(k >= preceedingVertex && k < originalVertext) {

                let element = this.adjList.get(k);
                let newList = [];
                for(let l of element) {
                    if(l === originalVertext) {
                        newList.push(newVertex);
                    }
                    else {
                        newList.push(l);
                    }
                }
                this.adjList.set(k, newList);
            }
        }
    }

    bfs(startingNode) {
        let visited = [];
        for(let v = 0; v < visited; v++) {
            visited[v] = false;
        }

        let items = [];
        visited[startingNode] = true;
        //Enqueue
        items.push(startingNode);
        let level = [];
        level[startingNode] = 1;

        while(items.length !== 0) {
            startingNode = items[0];
            //Dequeue
            let element = items.shift();
            let elementList = this.adjList.get(element);

            for(let el in elementList) {
                let neighbor = elementList[el];

                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    level[neighbor] = level[startingNode] + 1;
                    //enqueue
                    items.push(neighbor);
                }
            }
        }

        return level;

    }

    shortestPath(graph, source, target) {
        if (source == target) {   // Delete these four lines if
          console.log(source);          // you want to look for a cycle
          return;                 // when the source is equal to
        }                         // the target.
        let queue = [ source ],
            visited = { source: true },
            predecessor = {},
            tail = 0;
        while (tail < queue.length) {
          var u = queue[tail++];  // Pop a vertex off the queue.
          let elementList = this.adjList.get(u);
              neighbors = graph.neighbors[u];
          for (var i = 0; i < elementList.length; ++i) {
            var v = neighbors[i];
            if (visited[v]) {
              continue;
            }
            visited[v] = true;
            if (v === target) {   // Check if the path is complete.
              var path = [ v ];   // If so, backtrack through the path.
              while (u !== source) {
                path.push(u);
                u = predecessor[u];
              }
              path.push(u);
              path.reverse();
              console.log(path.join(' &rarr; '));
              return;
            }
            predecessor[v] = u;
            queue.push(v);
          }
        }
        console.log('there is no path from ' + source + ' to ' + target);
      }
}

const graph = new Graph(100);
for(let i = 1; i <= 100; i++) {
    graph.addVertex(i);
}

for(let p = 1; p <= 100; p++) {
    for(let q = 1; q <= 6 && p+q <= 100; q++) {
        graph.addEdge(p, p+q);
    }
}

//Ladder
graph.replace(3, 54);
graph.replace(57, 100);

//Snake
graph.replace(56, 33);
graph.printGraph();
let levels = graph.bfs(1);
console.log(levels[100]);
graph.shortestPath(graph.adjList, 1, 100);