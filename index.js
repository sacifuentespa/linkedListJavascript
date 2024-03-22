import LinkedList from "./linkedList.js";
import Node from "./node.js";

const list = new LinkedList()
const node0 = new Node(100);

const node1 = new Node(200);

const node2 = new Node(300);

const node3 = new Node(400);

const node4 = new Node(500);

list.prepend(node0);

list.prepend(node1);

list.prepend(node2);

list.append(node3);

list.append(node4);

console.log(list);
console.log(list.head);
console.log(list.head.next);
console.log(list.head.next.next);

//console.log(list.head);