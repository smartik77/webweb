const createParent = (value, children) => ({
  value,
  children,
  depth() {
    return 1 + Math.max(...this.children.map(n => n.depth()))
  }
})

const createLeaf = value => ({
  value,
  depth() { return 1 }
})

const tree = createParent('root', [
  createParent('child1', [
    createLeaf('leaf1'),
    createLeaf('leaf2')
  ]),
  createLeaf('child2'),
  createParent('child3', [
    createParent('child3.1', [
      createLeaf('leaf3')
    ])
  ])
])

console.log(tree.depth())
