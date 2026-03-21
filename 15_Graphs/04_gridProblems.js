// const graph = new Map();
// graph.set(0, [1, 2]);
// graph.set(1, [0, 3]);
// graph.set(2, [0]);
// graph.set(3, [1]);

const matrix = [
  [0, 1, 1],
  [1, 0, 0],
  [1, 0, 0],
];

function dfs(node, visited, graph) {
  if (visited.has(node)) return;

  visited.add(node);

  for (let nei of graph.get(node)) {
    dfs(nei, visited, graph);
  }
}

// Weighted Graph
const weightedGraph = {
  A: [
    ["B", 5],
    ["C", 2],
  ],
  B: [["A", 5]],
  C: [["A", 2]],
};

// console.log(weightedGraph);

let edges = [
  ["A", "B"],
  ["A", "C"],
  ["B", "D"],
];

const graph = {};

function buildGraph(edges) {
  const graph = {};

  for (let [u, v] of edges) {
    if (!graph[u]) graph[u] = [];
    if (!graph[v]) graph[v] = [];

    graph[u].push(v);
    graph[v].push(u); // ❗ remove if directed
  }

  return graph;
}
console.log(buildGraph(edges));
