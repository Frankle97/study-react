"use strict";
var QueueType;
(function (QueueType) {
    QueueType[QueueType["enqueue"] = 0] = "enqueue";
    QueueType[QueueType["dequeue"] = 1] = "dequeue";
})(QueueType || (QueueType = {}));
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
iterate(QueueType.enqueue);
iterate(QueueType.dequeue);
function iterate(queueType) {
    for (let i = 0; i <= 4; i++) {
        if (queueType === QueueType.enqueue) {
            queue.enqueue(i);
        }
        else {
            console.log(queue.dequeue());
        }
    }
}
