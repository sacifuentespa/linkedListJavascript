class LinkedList {
    constructor() {
        this.head = null;
    }

    // prepend(value) adds a new node containing value to the start of the list;
    prepend(value) {
        if (this.head === null) {
            this.head = value;
            return;
        }
        let tempHead = this.head;
        this.head = value;
        this.head.next = tempHead;
        return;
    }

    // append(value) adds a new node containing 
    // value to the end of the list
    append(value) {
        if (this.head === null) {
            this.head = value;
            return;
        }
        
        let current = this.head;
        
        while (current.next !== null) {
            current = current.next
        }
        current.next = value;
    }
}


export default LinkedList;