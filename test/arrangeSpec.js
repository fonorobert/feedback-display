var expect = require("chai").expect;
var arrange = require("../lib/arrange.js");
var convert = require("../lib/convert.js");

describe("Arrange", function(){
  describe("#byAuthor", function(){
    it("should return Array", function(){
      var file = "test/feedbacks.csv";
      var object = convert.toObject(file, "feedbacks");
      var results = arrange.byAuthor(object);

      expect(results).to.be.an('array');
    });
    it("should have a receiver and feedbacks field in each element of results", function(){
      var file = "test/feedbacks.csv";
      var object = convert.toObject(file, "feedbacks");
      var results = arrange.byAuthor(object);

      expect(results[0]).to.have.ownProperty("receiver");
      expect(results[0]).to.have.ownProperty("feedbacks");
    })
    it("should have an object for each receiver", function(){
      var file = "test/feedbacks.csv";
      var object = convert.toObject(file, "feedbacks");
      var results = arrange.byAuthor(object);

      expect(results[0].receiver).to.eql("Jill");
      expect(results[1].receiver).to.eql("Joe");
    })
    it("should return receiver as string, feedbacks as Array", function(){
      var file = "test/feedbacks.csv";
      var object = convert.toObject(file, "feedbacks");
      var results = arrange.byAuthor(object);

      expect(typeof results[0].receiver).to.eql("string");
      expect(results[0].feedbacks).to.be.an('array');
    })
    it("should have a key in feedbacks for all authors", function(){
      var file = "test/feedbacks.csv";
      var object = convert.toObject(file, "feedbacks");
      var results = arrange.byAuthor(object);
      var options = {
        author: "author",
        receiver: "receiver"
      }
      var authors = ["Jack", "John"];
      console.log(results[0]);

      var resultAuthors = [results[0].feedbacks[0].author, results[0].feedbacks[1].author];

      expect(resultAuthors).to.have.members(authors);
    })
    it("should have a key feedbacks[author] for each question", function(){
      var file = "test/feedbacks.csv";
      var object = convert.toObject(file, "feedbacks");
      var results = arrange.byAuthor(object);
      var options = {
        author: "author",
        receiver: "receiver"
      }
      var authors = ["Jack", "John"];
      var questions = ["q1", "q2", "q3"]

      expect(results[0].feedbacks[0].questions).to.have.all.keys(questions);
      expect(results[0].feedbacks[1].questions).to.to.have.all.keys(questions);
    })
  })
})
