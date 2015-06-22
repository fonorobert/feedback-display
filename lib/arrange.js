var config = require("./config.js");
var utils = require("./utils.js");

exports = module.exports = {};

exports.twoLevel = function(object){
  var authors = [];
  var receivers = []
  var authorField = config.fieldNames.author;
  var receiverField = config.fieldNames.receiver;

  object = object.data;
  //console.log(object);

//build authors list
  for (var i = 0; i<object.length; i++) {
    var thisAuthor = object[i][authorField];
    if(authors.indexOf(thisAuthor) == -1){
        authors.push(thisAuthor);
    } else {
      continue;
    }
  }

// build receivers list
  for (var i = 0; i<object.length; i++) {
    var thisReceiver = object[i][receiverField];
    if(receivers.indexOf(thisReceiver) == -1){
        receivers.push(thisReceiver);
    } else {
      continue;
    }
  }

  var results = [];

  receivers.forEach(function(receiver, index){
    var block = {receiver: "", feedbacks: []};
    block.receiver = receiver;

    authors.forEach(function(author, i){
      block.feedbacks[i] = {author: "", questions: {}};
      block.feedbacks[i].author = author;

      object.forEach(function(row){
        if (row[receiverField] === receiver && row[authorField] === author) {
          Object.keys(row).forEach(function(key){
            if (key != authorField && key != receiverField){
              block.feedbacks[i].questions[key] = row[key];
            }
          })
        }
      })
    })

    results[index] = block;
    delete block;
  })
  //console.log(results);
  return results;
}
