let n = 7; // number of nodes in the graph
let adj = [
  [1, 5],
  [0, 2, 3],
  [1],
  [1, 4],
  [3],
  [0, 4],
  []
]; // adjacency list representing unweighted graph 

function solve(s) {
  // set basic variables: q, visited, prev
  let q = []; // queue in which the nodes will be enqueued or dequeued
  visited = Array(n).fill(false);
  let prev = Array(n);
  // set origin node
  q.push(s);
  visited[s] = true;
  // iterate through q
  while (q.length) {
    node = q.shift();
    let neighbours = adj[node];
    for (let neighbour of neighbours) {
      if (!visited[neighbour]) {
        q.push(neighbour);
        visited[neighbour] = true;
        prev[neighbour] = node;
      }
    }
  }
  // console.log(prev)
  return prev;
}

function reconstructPath(s, e, prev) {
  // reconstructs path going backwards from e
  path = [];
  for (let at = e; at != null; at = prev[at]) {
    path.push(at);
  }
  path.reverse();
  // checks if the exists a path
  if (path[0] == s) {
    return path;
  }
  return [];
}

/*
s: start node
e: end node
0 <= e,s <= n
*/
function bfs(s, e) {
  // do a bfs starting at s
  let prev = solve(s);
  // return reconstructured path from s -> e
  return reconstructPath(s, e, prev);
}
console.log(bfs(0,5));