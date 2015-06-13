var expect = require("chai").expect;
var convert = require("../lib/convert.js");
var fs = require("fs");

describe("Converter", function(){
  describe("#toArrayt()", function(){
    it("should return false if file is nonexistent", function(){
      var nonex = "test/nonexistent.csv";

      expect(convert.toArray(nonex)).to.equal(false);
    });
    it("shouldn't return false if file exists", function(){
      var ex = "test/test.csv";

      expect(convert.toArray(ex)).to.not.equal(false);
    })
    it("should return object", function(){
      var ex ="test/test.csv";

      expect(typeof convert.toArray(ex)).to.not.eql("string");
    })
    it("should return a two-dimensional array if csv has multiple rows", function(){
      var file = "test/test.csv";
      var result = convert.toArray(file);

      expect(result.length).to.eql(3);
      expect(result[0].length).to.eql(2);
    })
    it("should convert numbers to Number if possible", function(){
      var file = "test/test.csv";
      var result = convert.toArray(file);
      expect(result).to.eql([["abcd", "efgh"], [1223, 14314], ["pejfpfij", "wenfpi wfpjpw wpjwf"]]);
    })
  })
})
