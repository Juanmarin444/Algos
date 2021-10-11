class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head)
    this.size++;
  }
}

let my_list = new LinkedList()
console.log(my_list);

my_list.insertFirst("chicken");
console.log(my_list);

my_list.insertFirst("cow");
console.log(my_list);
