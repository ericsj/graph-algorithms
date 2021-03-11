let n = 7; // number of nodes in the graph
let adj = [
  [1, 5],
  [0, 2, 3],
  [1],
  [1, 4],
  [3,5],
  [0, 4],
  []
]; // adjacency list representing unweighted graph 

function dfsOfGraph(V, adj){
  let traversal_order = [];
  // general vars
  let stack = [];
  let visited = Array(V).fill(false);
  let prev = Array(V);
  // setting source
  stack.push(0);
  visited[0] = true;
  traversal_order.push(0);
  // iterate through elementsin
  while(stack.length){
      let node = stack.pop();
      let neighbours = adj[node];
      for(let neighbour of neighbours) {
          if(!visited[neighbour]){
              stack.push(neighbour);
              visited[neighbour] = true;
              prev[neighbour] = node;
              traversal_order.push(neighbour);
          }
      }
  }
  return traversal_order;
}
  
console.log(dfsOfGraph(n, adj))