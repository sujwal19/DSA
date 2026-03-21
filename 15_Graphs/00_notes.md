## 🔍 It’s a graph if:

- You see connections / relationships
  “friends”, “roads”, “dependencies”, “flights”
- You need shortest path / minimum steps
- Problem involves network traversal
- Words like:
  connected, components, path, cycle, route
  Grid problems (2D matrix) → often implicit graphs

- 👉 Rule of thumb:
  If you can model it as nodes + edges, it's a graph.

.......

## 🔥 2. Core Graph Patterns

### 1. Traversal (DFS / BFS)

- Used in:
  Explore all nodes
  Count components
  Detect cycles

- 👉 Use:
  DFS → deep exploration (recursion/stack)
  BFS → shortest path (unweighted)

### 2. Shortest Path

Unweighted → BFS
Weighted → Dijkstra
Negative weights → Bellman-Ford

### 3. Connected Components

“How many groups?”
Use DFS/BFS

### 4. Cycle Detection

Undirected → DFS + parent check
Directed → DFS + recursion stack

### 5. Topological Sort (DAG only)

- Used when:
  Dependencies exist
  Example: course schedule

- 👉 Tools:
  DFS (stack)
  Kahn’s Algorithm (BFS + indegree)

### 6. Union-Find (DSU)

- Used when:
  Dynamic connectivity
  Cycle detection in undirected graphs

### 7. Grid Graph Problems

Treat matrix as graph
Move in directions (up/down/left/right)
