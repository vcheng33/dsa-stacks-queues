const LinkedList = require("../dsa-arrays-linked-lists/linked-list");

/** Node: node for a queue. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  first = null;
  last = null;
  size = 0;

  constructor(){
    this._ll = new LinkedList();
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    this._ll.push(val);

    if (this.size === 0) this.first = this._ll.tail;
    this.last = this._ll.tail;
    this.size += 1;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0){
      throw new Error ('Empty Queue');
    }
    let removed = this._ll.shift();
    this.first = (this.size === 1) ? null : this._ll.getAt(0);
    
    this.size -= 1;
    return removed;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
