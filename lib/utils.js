exports = module.exports = {}

exports.clone = function(obj){
  function Clone(){}
  Clone.prototype=obj;
  return new Clone();
};
