// default parameters = so if the paramter is not invoked they fall to the default we set it to.
// how we did this before.
function calcPayment(price,salesTax, discount) {
  salesTax = salesTax || 0.047;
  discount = discount || 0;
  console.log('tax', salesTax);
  console.log('discount', discount);
  // math
}

calcPayment(100, 0, 0); /// because 0 counts as falsey our salesTax is set to the default so it bad :{
console.log("======================");

//// to fix the problem above we do the following

function calcPayment2(price, salesTax, discount) {
  salesTax = typeof salesTax === 'undefined' ? 0.047 : salesTax;
  discount = typeof salesTax === 'undefined' ? 0 : discount;
  console.log('tax', salesTax);
  console.log('discount', discount);
}

calcPayment2(100, 0, 0);
console.log("======================");

//// DEFAULT PARAMETERS WITH ES6 NOW!!!!! /////////

function isRequired(name) {
  throw new Error(name + ' is required')
}

function calcPayment3(price = isRequired('price'), salesTax = 0.047, discount = 0) {
  console.log('tax', salesTax);
  console.log('discount', discount);
}
calcPayment3(100, .5, .10); // will not throw error
console.log("======================");

calcPayment3(); // will throw an error (Comment out to continue with the examples below)
console.log("======================");


const credentials = {
  email: 'bob@marley.com',
  password: 'sekureP@ssw0rd9',
  username: 'barley',
};

function login({ email = 'some@email.com', password = 'superPass', username = 'noname' }) {
  console.log(email, password, username);
}

login({});
login(credentials);

// or use

function login2({ email = 'some@email.com', password = 'superPass', username = 'noname' } = {}) {
  console.log(email, password, username);
}

login2();
login2(credentials);
