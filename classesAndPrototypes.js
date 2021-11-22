////// PROTOTYPE //////

// Prototypes are the mechanism by which
// JavaScript objects inherit features from one another

function Deck() {
  this.initialize();
}
Deck.prototype.initialize = function() {
  var suits = ['Diamond', 'Heart', 'Spade', 'Club'];
  var faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  var deck = [];
  for (var sindex = 0; sindex < suits.length; sindex++) {
    for (var findex = 0; index < faces.length; findex++) {
      deck.push(this.createCard(suits[sindex], faces[findex]));
    }
  }
  this.deck = deck;
};
Deck.prototype.createCard = function(suit, face) {
  return new Card(suit, face);
};
function Card(suit, face) {
  this.suit = suit;
  this.face = face;
}
Object.defineProperties(Card.prototype, {
  image: {
    get: function () {
      return this.suit.toLowerCase() + '-' + this.face.toLowerCase() + '.jpg';
    }
  },
  value: {
    get: function () {
      switch (this.face.toLowerCase()) {
        case 'ace':
          return 14;
        case 'king':
          return 13;
        case 'queen':
          return 12;
        case 'jack':
          return 11;
        default:
          return parseInt(this.face, 10);
      }
    }
  }
});

// classes are blue prints to create objects
// contains three important things
// propterties, constructor - to initialize those properties, methods to manipulate properties


// subclass are also classes with properties, constructor, and methods
// and on top of that it inherits all the base class' methods and properties

class Mammal {
  constructor(_legs, _name="John Doe") {
    this.legs = _legs;
    this.name = _name;
    this.warmBlooded = true;
  }
  walk() {
    return `${this.name} is walking`
  };
}

// subclass
class Bat extends Mammal { // extends means that the Mammal will be its base class to let class Bat inhereit all Mammal propterties
  constructor(_legs, _name, _eatsMeat) {
    super(_legs, _name);   // what super is doing is taking all the base Class (Mammal) properties and inheriting them for class Bat
    this.eatsMeat = _eatsMeat;
  }
  fly() {
    return `${this.name} is flying`;
  }
  walk(){
    let holding = this.eatsMeat ? 'bug' : 'carrot'; // if (this.eatsMeat === true) {console.log('bug');} else {console.log('carrot');}
    return `${super.walk()} with a ${holding}`;
  }
}

let fruitBat = new Bat(4, 'peter', false); // The (new) KEYWORD is used to create a "new" class out of the class Bat().

console.log(fruitBat);
console.log(fruitBat.walk());
console.log(fruitBat.fly());

class Mammal {
  constructor(a, b, c, d, e) {
    Object.assign(this, {a, b, c, d, e});

  }
}

class Bat extends Mammal { // extends means that the Mammal will be its base class to let class Bat inhereit all class Mammal propterties
  constructor(f, ...args){    // spread operator is used to grab all arguments being passed down from base Class Mammal
    super(...args);         // what super is doing is taking all the base Class (Mammal) properties and inheriting them for class Bat
    this.f = f;
  }
}

const newBat = new Bat('f', 'a', 'b', 'c', 'd', 'e');

console.log(newBat);

class Mammal {}

class Bat extends Mammal {
  constructor(){
    super();
  }
}

const newBat = new Bat();
// you dont need a constructor for base class Mammal either
// if you dont have one extends creates one for the base class
// YOU DO NEED ONE for the subclass bat because you need to have super in inside
// to be able to inhereit the Class Mammal properties
//
// only have one level of subclasses. no subclass for subclasses.
