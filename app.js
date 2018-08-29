var name = "John Doe";
var greet = `Hello ${name}`;

var obj = {
    name: "John Doe",
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
};

obj.greet();
obj.greet.call({ name: "Jane Doe" });
obj.greet.apply({ name: "Jane Doe" });
