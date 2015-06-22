process.env['NODE_ENV'] = 'test';
var expect = require("chai").expect;
var arrange = require("../lib/arrange.js");
var convert = require("../lib/convert.js");

describe("Arrange", function(){
  describe("#twoLevel", function(){
    it("should return Array", function(){
      var file = "test/feedbacks.csv";
      var object = convert.toObject(file, "feedbacks");
      var results = arrange.twoLevel(object);

      expect(results).to.be.an('array');
    });
    it("should have a levelOne and data field in each element of results", function(){
      var file = "test/feedbacks.csv";
      var object = convert.toObject(file, "feedbacks");
      var results = arrange.twoLevel(object);

      expect(results[0]).to.have.ownProperty("levelOne");
      expect(results[0]).to.have.ownProperty("data");
    })
    it("should have an object for each levelOne", function(){
      var file = "test/feedbacks.csv";
      var object = convert.toObject(file, "feedbacks");
      var results = arrange.twoLevel(object);

      var levelOnes = ["Jill", "Joe"];

      var resultLevelOnes = [results[0].levelOne, results[1].levelOne];

      expect(resultLevelOnes).to.have.members(levelOnes);
    })
    it("should return levelOne as string, data as Array", function(){
      var file = "test/feedbacks.csv";
      var object = convert.toObject(file, "feedbacks");
      var results = arrange.twoLevel(object);

      expect(typeof results[0].levelOne).to.eql("string");
      expect(results[0].data).to.be.an('array');
    })
    it("should have a key in data for all levelTwos", function(){
      var file = "test/feedbacks.csv";
      var object = convert.toObject(file, "feedbacks");
      var results = arrange.twoLevel(object);

      var levelTwos = ["Jack", "John"];
      console.log(results[0]);

      var resultLevelTwos = [results[0].data[0].levelTwo, results[0].data[1].levelTwo];

      expect(resultLevelTwos).to.have.members(levelTwos);
    })
    it("should have a key in data[levelTwo] for each question", function(){
      var file = "test/feedbacks.csv";
      var object = convert.toObject(file, "feedbacks");
      var results = arrange.twoLevel(object);
      var questions = ["q1", "q2", "q3"]

      expect(results[0].data[0].questions).to.have.all.keys(questions);
      expect(results[0].data[1].questions).to.to.have.all.keys(questions);
    })
  })
})
