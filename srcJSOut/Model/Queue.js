"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    _queue;
    _head;
    _tail;
    constructor() {
        this._queue = {};
        this._head = 0;
        this._tail = 0;
    }
    get isEmpty() {
        return this.getSize === 0;
    }
    get getSize() {
        return this._tail - this._head;
    }
    get getHead() {
        return this._head;
    }
    get getTail() {
        return this._tail;
    }
    enqueue(E) {
        this._queue[this._tail] = E;
        this._tail++;
    }
    dequeue() {
        if (this.isEmpty) {
            return undefined;
        }
        const value = this._queue[this._head];
        delete this._queue[this._head];
        this._head++;
        return value;
    }
    peek() {
        if (this.isEmpty) {
            return undefined;
        }
        return this._queue[this._head];
    }
    clear() {
        this._queue = {};
        this._head = 0;
        this._tail = 0;
    }
    print() {
        console.log(this);
    }
}
exports.Queue = Queue;
