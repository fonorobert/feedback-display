var expect = require("chai").expect;
var utils = require("../lib/utils.js");

describe("Utils", function(){
  describe("#clone()", function(){
    it("should return an exact copy of original object", function(){
      var obj = {a: 13, b:19, c: {d: "abcd"}, d: []};

      var result = utils.clone(obj);

      expect(result).to.eql(obj);
    })
    it("should return object that is independent from original", function(){
      var obj = {a: 13, b:19, c: {d: "abcd"}, d: []};
      var result = utils.clone(obj);

      result.a = 20;

      expect(result).to.not.eql(obj);
    })
  })
})
