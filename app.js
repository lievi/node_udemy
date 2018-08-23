var firstName = "Jane";

(function(lastName) {
    var firstName = "John";
    console.log(firstName);
    console.log(lastName);
})("Doe");

console.log(firstName);
