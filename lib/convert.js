var fs = require("fs");

exports = module.exports = {};

exports.toArray = function(filename){
 var contents;
 try {
   contents = fs.readFileSync(filename, {encoding: "utf8"});
 } catch (e) {
   return false;
 }
    var result = contents.trimRight().split('\n');

    for(var i = 0; i<result.length; i++) {
      result[i] = result[i].split(',');
      for(var j = 0; j<result[i].length; j++) {
        result[i][j] = result[i][j].replace(/(\\"\s)|"|(\\")|(\s")|("\s)/g, '');
        result[i][j] = isNaN(result[i][j]) ? result[i][j] : Number(result[i][j]);
      }
    }
    return result;
}
