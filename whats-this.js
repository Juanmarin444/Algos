//// The 'this' KEYWORD //////

// example:
// you have a fam of 4 and the wife says hey this house is falling apart.
// She can use this to refer to the house because you are currently in iside it.
// in js this is used similarly. whay object you are in.

// THIS INSIDE GLOBAL SCOPE

this.table = 'window table';
this.garage = {
  table: 'garage table'
};

// THIS INSIDE AN OBJECT "creating a private room"

let johnsRoom = {
  table: "John's table",
  cleanTable() {
    console.log(`cleaning ${this.table}`);
  }
};

console.log(johnsRoom.table);
johnsRoom.cleanTable();
// THIS INSIDE A METHOD

let marysRoom = {
  table: "Mary's table",
  cleanTable() {
    console.log(`cleaning ${this.table}`);
  }
};

let kitchen = {
  table: "kitchen table"
}
marysRoom.cleanTable();

// THIS INSIDE A FUNCTION

const cleanTable = function(soap) {
  console.log(`cleaning ${this.table} using ${soap}`);
};

cleanTable(); // wiill throw error because the inside of a function does not have access too this. USE CALL FUNCTION INSTEAD.
cleanTable.call(this, 'some soap');
cleanTable.call(this.garage, 'detergent');
cleanTable.call(kitchen, 'disinfectant');

// this inside an inner function

const cleanTable2 = function(soap) {
  let that = this;
  const innerFunc1 = function(_soap) {
    console.log(`cleaning ${this.table} using ${_soap}!`);
  }
  innerFunc1(soap);
  innerFunc1.call(this, soap);
  innerFunc1.bind(this)(soap); // innerFunc.bind() becomes a new function and you push soap in as a param
  // best solution is to convert innerFunc into an arrow func.
  const innerFunc2 = (_soap) => {
    console.log(`cleaning ${this.table} using ${_soap} arrow func btw.`);
  }
  innerFunc2(soap);
  // arrow functions allow this to be used from an parent scope i think.
};

cleanTable2.call(this, 'some soap');
cleanTable2.call(this.garage, 'detergent');
cleanTable2.call(kitchen, 'disinfectant');

let createRoom = function(name) {
  this.table = `${name}'s table`
}

const jerrysRoom = new createRoom('Jerry');
const tomsRoom = new createRoom('Tom');
const bathroom = new createRoom('the bathroom');


cleanTable2.call(this, 'some soap');
cleanTable2.call(this.garage, 'detergent');
cleanTable2.call(kitchen, 'disinfectant');
cleanTable2.call(marysRoom, 'soap');
cleanTable2.call(johnsRoom, 'soap');

// instead of using the call method now since we made a constructor we can create
// the same cleaning table func but for the constructor so it works for all instaces createdAt
// with createRoom contructor

createRoom.prototype.cleanTable3 = function(soap) {
  console.log(`Cleaning ${this.table} using ${soap}. USING A PROTOTYPED FUNC FOR CONSTRUCTOR!!!`);
}

jerrysRoom.cleanTable3("jabon");
tomsRoom.cleanTable3("sopa");
bathroom.cleanTable3('disinfectant');

// THIS INSIDE A CLASS

class CreateRoom2 {
  constructor(name) {
    this.table = `${name}'s table'`
  }
  cleanTable4(soap) {
    console.log(`Cleaning ${this.table} using ${soap}`);
  }
}

const juansRoom = new CreateRoom2('Juan');
juansRoom.cleanTable4('a damp cloth. Also this was called from a func within my createRoom2 class!!')
