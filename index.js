var convert = require("./lib/convert.js");
var arrange = require("./lib/arrange.js");

var file = "test/feedbacks.csv";

var object = convert.toObject(file)
console.log(arrange.byAuthor(object));
