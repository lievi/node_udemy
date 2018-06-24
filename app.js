function Person(firstName, lastName) {
    this.lastName = lastName;
    this.firstName = firstName;
}

Person.prototype.greet = function () {
    console.log('Hello, ' + this.firstName);
}
var john = new Person('John', 'Doe');
var jane = new Person('Jane', 'Doe');
john.greet();
jane.greet();

console.log(john.__proto__);

