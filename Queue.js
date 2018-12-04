class Queue {
  constructor() {
    this._storage = {};
    this._length = 0;
    this._headIndex = 0;
  }

  enqueue(value) {
    this._storage[this._length++ + this._headIndex] = value;
  }

  dequeue() {
    this._length && delete this._storage[(--this._length, this._headIndex++)];
  }

  peek(){
    return this._storage[this._headIndex]
  }
}

myQue = new Queue();

myQue.enqueue("jane");
myQue.enqueue("bravo");
console.log(myQue); // Queue { _storage: { '0': 'jane', '1': 'bravo' }, _length: 2, _headIndex: 0 }
myQue.dequeue();
console.log(myQue); // Queue { _storage: { '1': 'bravo' }, _length: 1, _headIndex: 1 }
myQue.enqueue("butter");
console.log(myQue); // Queue { _storage: { '1': 'bravo', '2': 'butter' }, _length: 2, _headIndex: 1 }
myQue.dequeue();
console.log(myQue); // Queue { _storage: { '2': 'butter' }, _length: 1, _headIndex: 2 }
console.log(myQue.peek()); // butter