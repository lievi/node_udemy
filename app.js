var buf = new ArrayBuffer(8);
var view = new Int32Array(buf);
view[0] = 5;
view[1] = 80;
view[2] = 80;
console.log(view);
