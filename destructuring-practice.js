const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// DESTRUCTURING
// const { email } = person;
const [firstAnimal] = animals;
// console.log(email); // =>bob@marley.com
console.log(firstAnimal); // =>horse
// const { email, password } = person;

const password = "secretPaSsWord!"

const { password: myPassword } = person;

console.log(myPassword); //=> sekureP@ssw0rd9
console.log("=================================");

const sector_v_operatives = ["Numbuh_One", "Numbuh_Two", "Numbuh_Three", "Numbuh_Four", "Numbuh_Five"]

const [leader, pilot_tech, medic, combat, second_in_command] = sector_v_operatives;
console.log(leader); // => Numbuh 1
console.log(pilot_tech); // => Numbuh 2
console.log(medic); // => Numbuh 3
console.log(second_in_command); // => Numbuh 5

// Nested Destructuring

const numbuh_one = {
  firstName: "Nigel",
  lastName: "Uno",
  sector: "Sector V",
  specialty: "Leader of Sector V",
  codeName: "Numbuh One",
  addresses: [
    {
      address: '1600 Pennsylvania Avenue',
      city: 'Washington, D.C.',
      zipcode: '20500',
    },
    {
      address: '221B Baker St.',
      city: 'London',
      zipcode: 'WC2N 5DU',
    }
  ],
  createdAt: 1543945177623
}

// we want individual addresses as variables
// destructure addresses then destructure each addresses
const { addresses: addressesList } = numbuh_one;
const { addresses: [whitehouse, sherlock] } = numbuh_one;
//
console.log("whitehouse", whitehouse); // {address: '1600 Pennsylvania Avenue', city: 'Washington, D.C.', zipcode: '20500',}
console.log("sherlock", sherlock); // {address: '221B Baker St.',  city: 'London',  zipcode: 'WC2N 5DU'}
console.log("addressesList", addressesList); // [{...}, {...}] list of addresses

// we want to skip the first address and only want the city of the second, whilst using an alt. name

const { addresses: [ , { city: london }] } = numbuh_one;

console.log('city: ', london);

const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits.entries()) {
  console.log(fruit); // [0, apple] -> [1, banana] -> [2, cherry]
}

// I can now use destructuing coolness in our for loop

for(const [index, fruit] of fruits.entries()) {
  console.log(`${fruit} was found at index ${index}!`);
}

const test = Object.entries(person);
console.log(test); // [[firstName, Bob], [lastName, Marley],[...][...]]

for([key, value] of Object.entries(person)) {
  console.log(`${key} has the value of ${value}`);
}

console.log('======================================');

const myFarm = {
  owner: ['juan', 'andrew'],
  money: 389000.00,
  loan: 21000.00,
  vehicles: {
    tractors: {
      newHolland: ['T8 Series', 'T5 Series'],
      claas: ['Xerion 5000', 'Axion 960'],
      fiat: ['Fiat 180-90']
    },
    combines: {
      newHolland: ['CR Revelation'],
      claas: ['Claas Lexion 8000']
    },
    wheeleLoaders: {
      jcb: ['457 Wheel Loader'],
      cat: ['972M XE Wheel Loader']
    }
  }
}

const { money: dinero } = myFarm;
console.log(`Your farm is worth $${dinero}`);

const { loan } = myFarm;
console.log(`Your are $${loan} in debt!`);

const { vehicles } = myFarm;
console.log(vehicles);

const { vehicles: { tractors } } = myFarm;
console.log(tractors);

const { vehicles: { tractors: { claas } } } = myFarm;
console.log(claas);

const { vehicles: { tractors: { claas: [ , axion] } } } = myFarm;
console.log(axion);

const { vehicles: { combines: { claas: [lexion] } } } = myFarm;
console.log(lexion);
