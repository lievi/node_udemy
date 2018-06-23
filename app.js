// Function Statment

function greet() {
    console.log('Hello World');
}
greet();

//Functions are first-class
function logGreeting(fn) {
    fn();
}

logGreeting(greet);

// Function expression
var greetMe = function () {
    console.log('Hello Lievi');
}
greetMe();

// Function expression is still first-class
logGreeting(greetMe);

// Use a functions expression on the fly

logGreeting(function () {
    console.log('Hello Lievi on the fly');
})