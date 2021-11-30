const LinkedList = require("../dsa-arrays-linked-lists/linked-list");

/** Node: node for a stack. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  top = null;
  size = 0;
  _ll = new LinkedList();

  /** push(val): add new value to the top of the stack. Returns undefined. */

  push(val) {
    this._ll.unshift(val);

    this.top = this._ll.head;
    this.size += 1;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) {
      throw new Error ('Empty Stack');
    }

    let removed = this._ll.shift();
    this.top = this._ll.head;
    this.size -= 1;
    return removed;
  }

  /** peek(): return the value of the top node in the stack. */

  peek() {
    return this.top.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
