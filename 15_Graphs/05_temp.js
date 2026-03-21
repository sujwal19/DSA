let n = 5;
let edges = [
  [0, 1],
  [1, 2],
];

function buildGraph(n, edges) {
  const graph = {};
  for (let i = 0; i < n; i++) graph[i] = [];

  for (let [start, visited] of edges) {
    graph[start].push(visited);
    graph[visited].push(start);
  }
  return graph;
}
console.log(buildGraph(n, edges));
