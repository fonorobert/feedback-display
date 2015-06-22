var config = require("./config.js");
var utils = require("./utils.js");

exports = module.exports = {};

exports.twoLevel = function(object){
  var levelTwoList = [];
  var levelOneList = []
  var levelTwoField = config.fieldNames.levelTwo;
  var levelOneField = config.fieldNames.levelOne;

  object = object.data;
  //console.log(object);

//build list of levelTwo elements
  for (var i = 0; i<object.length; i++) {
    var thisLevelTwo = object[i][levelTwoField];
    if(levelTwoList.indexOf(thisLevelTwo) == -1){
        levelTwoList.push(thisLevelTwo);
    } else {
      continue;
    }
  }

// build list of levelOne elements
  for (var i = 0; i<object.length; i++) {
    var thisLevelOne = object[i][levelOneField];
    if(levelOneList.indexOf(thisLevelOne) == -1){
        levelOneList.push(thisLevelOne);
    } else {
      continue;
    }
  }

  var results = [];

  levelOneList.forEach(function(levelOne, index){
    var block = {levelOne: "", data: []};
    block.levelOne = levelOne;

    levelTwoList.forEach(function(levelTwo, i){
      block.data[i] = {levelTwo: "", questions: {}};
      block.data[i].levelTwo = levelTwo;

      object.forEach(function(row){
        if (row[levelOneField] === levelOne && row[levelTwoField] === levelTwo) {
          Object.keys(row).forEach(function(key){
            if (key != levelTwoField && key != levelOneField){
              block.data[i].questions[key] = row[key];
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
