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

        return;
    }

    // size returns the total number of nodes in the list
    get size() {
        let size = 0
        if (this.head === null) {
            return size
        }
        let current = this.head;
        size++;
        while (current.next !== null) {
            current = current.next;
            size++;
        }
        return size;
    }

    // headList returns the first node in the list
    get headList(){
        return this.head;
    }

    // tail returns the last node in the list
    get tail(){
        if(this.head === null){
            return this.head
        }
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }
        return current;
    }


}


export default LinkedList;