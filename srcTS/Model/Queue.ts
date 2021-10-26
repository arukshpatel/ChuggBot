import { ObjectType } from "./objectType";

export class Queue<T>
{

    private _queue: ObjectType<T>;
    private _head: number;
    private _tail: number;


    constructor()
    {
        this._queue = {};
        this._head = 0;
        this._tail = 0;
    }

    get isEmpty(): boolean
    {
        return this.getSize === 0;
    }

    get getSize(): number
    {
        return this._tail - this._head;
    }

    get getHead(): number
    {
        return this._head;
    }

    get getTail(): number
    {
        return this._tail;
    }

    enqueue(E: T): void
    {
        this._queue[this._tail] = E;
        this._tail++;
    }

    dequeue(): T | undefined
    {
        if(this.isEmpty)
        {
            return undefined;
        }
        const value = this._queue[this._head];
        delete this._queue[this._head];
        this._head++;
        return value;
    }

    peek(): T | undefined
    {
        if(this.isEmpty)
        {
            return undefined;
        }

        return this._queue[this._head];
    }

    clear(): void
    {
        this._queue = {};
        this._head = 0;
        this._tail = 0;
    }

    print(): void
    {
        console.log(this);
    }
}