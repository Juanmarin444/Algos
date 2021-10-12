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
  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // If empty, make head
    if(!this.head){
      this.head = node;
    } else {
      current = this.head;

      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
}

let my_list = new LinkedList()
// console.table(my_list);

my_list.insertFirst("chicken");
// console.table(my_list);

my_list.insertFirst("cow");
console.log(JSON.stringify(my_list));

my_list.insertLast("pig");
console.log(JSON.stringify(my_list));

my_list.insertLast("horse");
console.log(JSON.stringify(my_list));
