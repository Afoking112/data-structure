// Implements LIFO
// Example, stack of plates, browser history tracking, undo operation when typing,call stack, expression conversions.
// Methods include (length,push,pop,peekLast,peekFirst,isEmpty,print)

class Stack {
    constructor() {
        this.history = []
    }

    length() {
        return this.history.length === 0 ? 'no items in the stack yet' : `${this.history.length} item(s) in the stack`
    }

    push(item) {
        this.history.push(item)
    }

    pop() {
        if(this.history.length === 0) {
            return 'no items to be removed, nothing to be removed'
        } else {
            this.history.pop()
        }
    }

    peekFirst() {
        return this.history.length === 0 ? 'no first item in the stack' : `${this.history[0]} is the first item`
    }

    peekLast() {
        return this.history.length === 0 ? 'no last item in the stack' : `${this.history[this.history.length-1]} is the last item`
    }

    isEmpty() {
        return this.history.length === 0 ? `${true}: the stack is empty` : `${false}: the stack is not empty`
    }

    print() {
        return this.history.length === 0 ? `nothing has been added to the stack` : this.history
    }
}

const stack1 = new Stack()
stack1.push('Oluwafemi')
stack1.push('Tonia')
stack1.push('Tonia')
stack1.push('Tonia')
stack1.push('Afolabi')
console.log(stack1.pop());
console.log(stack1);
console.log(stack1.length());
console.log(stack1.peekFirst());
console.log(stack1.peekLast());
console.log(stack1.isEmpty());
console.log(stack1.print());

// [1,2,3,4]
// [11,22,43,64]

// 4 - length
// 3 - max index