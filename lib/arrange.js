var config = require("./config.js");

exports = module.exports = {};

exports.byAuthor = function(object){
  var authors = [];
  var author = config.fieldNames.author;

  for (var i = 0; i<object.data; i++) {
    var thisAuthor = object.data[i].attributes.author;
    if(authors.indexOf(thisAuthor) === -1){
        authors.push(thisAuthor);
    } else {
      continue;
    }
  }

  return object;
}
