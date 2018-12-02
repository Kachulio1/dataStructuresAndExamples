class Stack {
  constructor() {
    this._storage = {};
    this._length = 0
  }
  push(value) {
    this._storage[++this._length] =  value
    
  }

  pop() {
   this._length && delete this._storage[this._length--]
  }

  peek() {
    return  this._storage[this._length]
  }
}

const myStack = new Stack()
myStack.push('joseph')
myStack.push('jane')
myStack.push('doe')



console.log(myStack)
console.log(myStack.peek())


console.log(myStack)
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())

 console.log(myStack)