var fs = require("fs");
var CSV = require('csv-string');

exports = module.exports = {};

exports.toArray = function(filename){
 var contents;
 try {
   contents = fs.readFileSync(filename, {encoding: "utf8"});
 } catch (e) {
   return false;
 }
    var result = CSV.parse(contents);

    for(var i = 0; i<result.length; i++) {
      for(var j = 0; j<result[i].length; j++) {
        result[i][j] = isNaN(result[i][j]) ? result[i][j] : Number(result[i][j]);
      }
    }
    return result;
}

exports.toObject = function(filename, type){

  type = type || "row";

  var array = exports.toArray(filename);
  var header = array[0];
  array.splice(0, 1);

  var result = {"data": []};
  for (var i = 0; i<array.length; i++) {
    result.data[i] = {"id": String(i), "type": String(type), "attributes": {}};
    for (var j = 0; j<array[i].length; j++) {
      result.data[i]["attributes"][header[j]] = array[i][j];
    }
  }
  return result;
}
