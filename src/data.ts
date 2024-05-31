export const data = {
  nodes: [
    { node: 0, name: "node0" },
    { node: 1, name: "node1" },
    { node: 2, name: "node2" },
    { node: 3, name: "node3" },
  ],
  links: [
    { source: 0, target: 2, value: 2 },
    { source: 1, target: 2, value: 2 },
    { source: 1, target: 3, value: 2 },
  ],
};

export const data2 = {
  nodes: [
    { id: "bob" },
    { id: "alice" },
    { id: "carol" },
    { id: "mel" },
    { id: "yan" },
  ],
  links: [
    { source: "bob", target: "carol", value: 4 },
    { source: "alice", target: "carol", value: 3 },
    { source: "alice", target: "yan", value: 1 },
    { source: "carol", target: "mel", value: 6 },
    { source: "carol", target: "yan", value: 1 },
  ],
};
