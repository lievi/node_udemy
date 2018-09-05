var fs = require("fs");

var readable = fs.createReadStream(__dirname + "/greet.txt", {
    encoding: "utf-8",
    highWaterMark: 32 * 1024
});

var writable = fs.createWriteStream(__dirname + "/greetcopy.txt");
readable.on("data", function(chunk) {
    writable.write(chunk);
});
