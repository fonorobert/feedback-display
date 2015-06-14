var convert = require("./lib/convert.js");

var file = "res/uhfeedback.csv";

console.log(convert.toObject(file).data[0].attributes);
