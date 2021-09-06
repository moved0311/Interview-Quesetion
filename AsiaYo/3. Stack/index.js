const Stack = function () {
  this.stack = []
}
Stack.prototype.push = function (num) {
  this.stack.push(num)
}
Stack.prototype.pop = function () {
  return this.stack.pop()
}
Stack.prototype.size = function () {
  return this.stack.length
}

s = new Stack()
s.push(10)
s.push(5)
s.push(7)
s.pop() // 7
s.push(8)
s.size() // 3
