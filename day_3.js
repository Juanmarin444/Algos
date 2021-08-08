// Create a function to get the factorial of any
// given non negative number using recursion

function factorial(n) {
    if (n <= 1) {
        return n;
    } else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(-6)); // => -6
console.log(factorial(6)); // => 720
