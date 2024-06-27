class Stack {
    constructor(){
        this.items = []
    }

    push(item) {
        this.items.push(item)
    }

    pop() {
        return this.items.pop()
    }

    clear() {
        this.items = []
    }

    size() {
        return this.items.length
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    reverseContent() {
        return JSON.parse(JSON.stringify(this.items)).reverse()
    }
}

export default Stack