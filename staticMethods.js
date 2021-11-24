////// STATIC METHODS //////

class Car {
  constructor(color = "no color given", price = "no price given", year = "unknown year", make = "no make given"){
    // this.color = color;
    // this.year = year;
    // this.make = make;

    // Object.assign can be used to replace all this."value" manual assignments
    Object.assign(this, {color, price, year, make});
  }

  // static methods are called on the class Car itself
  static comparePrice(car1, car2){
    // console.log(this); - console.dir() can be used for more getting more details on browser console
    return Math.abs(car1.price - car2.price); // it is using the instances that were specified, which were create by this Car class.
  }                                           // no need to use this.car1.price
  getColor(){
    return this.color;
  }
}

// Car.comparePrice();
const myCar = new Car('New Silver', '85000', '2018', 'Dodge');
console.log('My car color:', myCar.getColor());

const hisCar = new Car('Metallic Red', '79000', '2019', 'Ford');
console.log('His car color:', hisCar.getColor());

console.log(Car.comparePrice(hisCar, myCar));

// instance methods are called on instances of a class.
// for example an object fruitBat was created from Class Bat.
// and instance method would be fruitBat.fly().
// on the other hand
//
// static methods are methods intended to be used for the class itself.
// for example my class Bat contains a static method isBat()
// static isBat(){console.log(true);} and its invoked like Bat.isBat();
//
// static methods are good for comparing class instances
//
class Car2 {
  constructor(price){
    this.price = price;
  }
  static sellCar(carToSell){
    return `Selling for ${carToSell.price}`;
  }
}

class Toyota extends Car2 {
  constructor(price) {
    super(price);
  }
  static sellCar(car) {
    return `Toyota ${super.sellCar(car)}`;
  }
}

const camry = new Toyota(3000);
console.log(Toyota.sellCar(camry));
