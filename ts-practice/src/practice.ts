enum QueueType {
  enqueue,
  dequeue
}

class Queue<T> {
  list: T[] = [];

  get length() {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
iterate(QueueType.enqueue);
iterate(QueueType.dequeue);

function iterate(queueType: QueueType) {
  for (let i = 0; i <= 4; i++) {
    if (queueType === QueueType.enqueue) {
      queue.enqueue(i);
    } else {
      console.log(queue.dequeue());
    }
  }

}