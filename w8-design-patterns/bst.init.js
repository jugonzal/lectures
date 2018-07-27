function Node(key, value) {
  this.key = key;
  this.value = value;
  this.left = null;
  this.right = null;
}

var tree = {
  _root: null,
        
  insert: function (key, value) {
    var node = new Node(key, value);
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
        return currentNode.value;
      }
      var dir = (currentNode.key > key) ? 'left' : 'right';
      currentNode = currentNode[dir];
    }
    return null;
  }
};

tree.insert(1234, 1);
tree.insert(7777, 2);
tree.insert(123, 3);
tree.insert(-1123, 4);
tree.insert(0, 5);
tree.insert(9999, 6);
tree.insert(590, 7)
tree.insert(14,8)
tree.insert(600,9)
tree.insert(6000,10)

console.log(tree)
console.log(tree._root.key)
console.log(tree._root.left.key, '<- ->', tree._root.right.key )


