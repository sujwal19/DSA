function hasCycle(node, parent, visited, graph) {
  visited.add(node);

  for (let nei of graph.get(node)) {
    if (!visited.has(nei)) {
      if (hasCycle(nei, node, visited, graph)) return true;
    } else if (nei !== parent) {
      return true;
    }
  }

  return false;
}
