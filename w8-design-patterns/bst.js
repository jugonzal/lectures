function Node(key) {
  this.key = key;
  this.left = null;
  this.right = null;
  this.accept = function(visitor) {
    if (this.left)
      this.left.accept(visitor)
    visitor.visit(this)
    if (this.right)
      this.right.accept(visitor)
  }
}

var tree = {
  _root: null,

  accept: function(visitor) {
    if (this._root)
      this._root.accept(visitor)
  },
        
  insert: function (key) {
    var node = new Node(key);
    if (this._root) {
      var currentNode = this._root;
      while (currentNode) {
        var dir = (currentNode.key > key) ? 'left' : 'right';
        if (currentNode[dir]) {
          currentNode = currentNode[dir];
        } else {
          currentNode[dir] = node;
          currentNode = null;
        }
      }
    } else {
      this._root = node;
    }
  },
  get: function (key) {
    var currentNode = this._root;
    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode;
      }
      var dir = (currentNode.key > key) ? 'left' : 'right';
      currentNode = currentNode[dir];
    }
    return null;
  }
};

let sortVisitor = {
  visit: function(Node) {
    console.log(Node.key)
  }
}

let countVisitor = {
  count: 0,
  visit: function(Node) {
    this.count++
  }
}

tree.insert(1234);
tree.insert(7777);
tree.insert(123);
tree.insert(-1123);
tree.insert(0);
tree.insert(9999);
tree.insert(590)
tree.insert(14)
tree.insert(600)
tree.insert(6000)
tree.insert(800)
tree.insert(934)
tree.insert(1237)
tree.insert(7)

console.log(tree)
console.log(tree._root.key)
console.log(tree._root.left.key, '<- ->', tree._root.right.key )

tree.accept(sortVisitor)

tree.accept(countVisitor)
console.log('Nodes: ',countVisitor.count)