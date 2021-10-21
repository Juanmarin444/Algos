////// List: Add Front
// Rudy isn't nice: he cuts in line in front of everyone else.
// Given a pointer to the first ListNode and a value, create a new node,
// assign it to the list head, and return a pointer to the new head node.

class Node2 {
  constructor(student, next = null) {
    this.student = student;
    this.next = next;
  }
}

class LinkedLst {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertFirst(student){
    this.head = new Node2(student, this.head);
    this.size++;
  }
  printStudentList(){
    var current = this.head;
    // console.log(current, "hey im inside printStudentList");
    while (current) {
      console.log(current.student);
      current = current.next;
    }
  }
  contains(name){
    var current = this.head,
    count = 0;

    while (current) {
      if (current.student === name) {
        console.log(current.student, "is at " + count);
        return;
      }
      count++;
      current = current.next;
    }

    console.log("Not here I guess.");
    return null;
  }
  removeFront(){

    this.head = this.head.next;

    // this = the location of Linkedlst {head: Node2 {val: val, next: Node2 {val:val, next: [Node2]}} }
    console.log( this);
  }
}

var studentsInLine = new LinkedLst();
studentsInLine.insertFirst("Juan")
studentsInLine.insertFirst("Rey");
studentsInLine.insertFirst("Curty");
studentsInLine.printStudentList();
studentsInLine.contains("Curty");
studentsInLine.insertFirst("Rudy");
studentsInLine.removeFront();
studentsInLine.printStudentList();
console.log(studentsInLine);
//
