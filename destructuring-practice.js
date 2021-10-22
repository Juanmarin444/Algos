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
