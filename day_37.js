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
  // Insert at index
  insertAt(data, index) {
    // If index is out of range.
    if (index > 0 && index > this.size) {
      return;
    }
    // If first index zero
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    var node = new Node(data);
    let current, previous;

    //set current to first
    current = this.head;
    let count = 0;

    while(count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }
  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while(current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }
  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous,
    count = 0;
    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else { // if index is not equal to 0
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;

    }
    this.size--;
  }
}

let my_list = new LinkedList()
// console.table(my_list);

my_list.insertFirst("chicken");
// console.table(my_list);

my_list.insertFirst("cow");
// console.log(JSON.stringify(my_list));

my_list.insertLast("pig");
console.log(JSON.stringify(my_list));

my_list.insertLast("horse");
console.log(JSON.stringify(my_list));

my_list.insertAt("goat", 3);
console.log(JSON.stringify(my_list));

my_list.getAt(3);
my_list.getAt(2);

my_list.removeAt(3);
console.log(JSON.stringify(my_list));
