class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value = 0) {
        this.length = 0;
        if (value !== null) {
            const newNode = new Node(value);
            this.head = newNode;
            this.tail = newNode;
            this.length += 1;
        } else {
            this.head = null;
            this.tail = null;
        }
    }

    printList() {
        let temp = this.head;
        while (temp) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return true;
    }

    pop() {
        if (this.length === 0) return null;
        let temp = this.head;
        let prev = this.head;
        while (temp.next) {
            prev = temp;
            temp = temp.next;
        }
        prev.next = null;
        this.tail = prev;
        this.length -= 1;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
            return temp.value;
        }
        return temp.value;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        if (this.length === 0) this.tail = newNode;
        this.length += 1;
        return true;
    }

    popFirst() {
        if (this.length === 0) return null;
        const temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length -= 1;
        if (this.length === 0) {
            this.tail = null;
        }
        return temp;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    setValue(index, value) {
        const temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.prepend(value);
        if (index === this.length) return this.append(value);
        const temp = this.get(index);
        const newNode = new Node(value);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length += 1;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return this.popFirst();
        if (index === this.length - 1) return this.pop();
        let temp = this.head;
        let prev = this.head;
        for (let i = 0; i < index; i++) {
            prev = temp;
            temp = temp.next;
        }
        prev.next = temp.next;
        return temp;
    }

    getLength() {
        return this.length;
    }

    findMiddleNode() {
        const length = this.getLength();
        if (length === 0) return null;
        let temp = this.head;
        const loop = length % 2 === 0 ? length / 2 : (length + 1) / 2;
        for (let i = 0; i < Math.floor(loop); i++) {
            temp = temp.next;
        }
        return temp.value;
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let after = temp.next;
        let before = null;
        for (let i = 0; i < this.length; i++) {
            after = temp.next;
            temp.next = before;
            before = temp;
            temp = after;
        }
        return true;
    }
}

// Example usage
const myLL = new LinkedList(1);
myLL.append(2);
myLL.append(3);
myLL.append(4);
myLL.printList();
console.log(`Middle: ${myLL.findMiddleNode()}`);
console.log(`Length: ${myLL.length}`);
console.log(`Head: ${myLL.head ? myLL.head.value : "None"}`);
console.log(`Tail: ${myLL.tail ? myLL.tail.value : "None"}`);
