class QueueWithStacks {
  constructor() {
    this.in = [];
    this.out = [];
  }

  enqueue(val) {
    this.in.push(val);
  }

  dequeue() {
    if (this.out.length === 0) {
      while (this.in.length > 0) {
        this.out.push(this.in.pop());
      }
    }
  }

  peek() {


  }
  empty() {
    return this.in.length === 0 && this.out.length === 0;
  }
}
var queue = new QueueWithStacks();
console.log(123);
