var Emitter = require("./emitter");

var emtr = new Emitter();

emtr.on("greet", function() {
    console.log("Somewhere, someone said hello.");
});

emtr.on("greet", function() {
    console.log("A greeting occurred!");
});

emtr.on("xesque", function() {
    console.log("dale");
});

emtr.on("xesque", function() {
    console.log("dele");
});

emtr.on("xesque", function() {
    console.log("dolly");
});

console.log("Hello!");
emtr.emit("greet");
emtr.emit("xesque");
