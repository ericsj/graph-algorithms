const V = Array(7);
const E = [
  [1, 5],
  [0, 2, 3],
  [1],
  [1, 4],
  [3,5],
  [0, 4],
  []
]; // adjacency list representing unweighted graph 

const GRAPH = {'V':V,'E':E};

/**
 * hierholzer algorithm
 * @param {object} graph
 * @param {int} v
 */
function hierholzer(graph, v) {
  let visited_edges = Array(graph['V'].length).fill(false);
  let cycle = findEulerianSubcicle(graph, graph['V'][0], visited_edges);
  let NO_CYCLE = {'result': false, 'cycle': null};
  if (cycle['result'] === false) { // Eulerian cycle doesn't exist
    return NO_CYCLE;
  } else {
    // Eulerian cycle only exists in part of the graph.
    if (visited_edges.includes(false)) {
      return NO_CYCLE;
    } else {
      return {'result': true, 'cycle': cycle}; // Eulerian cycle exists
    }
  }
}