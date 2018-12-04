class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;
  }

  insert(value) {
    const next = { value, next: null };
    this.tail.next = next;
    this.tail = next;
    return next;
  }
  isHead(node) {
    return node === this.head;
  }

  isTail(node) {
    return node === this.tail;
  }

  contains(value) {
    let currentNode = this.head;

    while (currentNode.value !== value) {
      if (!currentNode.next) {
        return;
      }
      currentNode = currentNode.next;
    }

    return currentNode.value == value;
  }

  remove(node) {
    let nextNode = null;
    let currentNode = this.head;

    if (node === this.head) {
      const afterHead = this.head.next;
      delete this.head;
      this.head = afterHead;
    } else if (node === this.tail) {
      while (currentNode.next !== node) {
        if (!currentNode.next) {
          return;
        }
        currentNode = currentNode.next;
      }
      delete currentNode.next;
      this.tail = currentNode;
    }

    while (currentNode.next !== node) {
      if (!currentNode.next) {
        return;
      }
      currentNode = currentNode.next;
    }
    nextNode = currentNode.next.next;
    delete currentNode.next;
    currentNode.next = nextNode;
  }

  removeTail() {
    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      if (!currentNode.next) {
        return;
      }
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    this.tail = currentNode;
  }
}

const linkedList = new LinkedList(1);

node2 = linkedList.insert(2);
node3 = linkedList.insert(3);
//node4 = linkedList.insert(4);

console.log(linkedList.remove("node3"));

console.log(linkedList); //LinkedList { head: { value: 1, next: { value: 2 } }, tail: { value: 2 } }
