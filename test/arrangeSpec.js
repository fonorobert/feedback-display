var expect = require("chai").expect;
var arrange = require("../lib/arrange.js");
var convert = require("../lib/convert.js");

describe("Arrange", function(){
  describe("#byAuthor", function(){
    it("should group fields based on author", function(){
      var file = "test/feedbacks.csv";
      var object = convert.toObject(file, "feedback");
      var results = arrange.byAuthor(object);
      var options = {
        author: "author",
        receiver: "receiver"
      }
      var authors = ["Jack", "John"];
      var questions = ["q1", "q2", "q3"]

      expect(results.data[0].attributes).to.have.ownProperty(authors[0]);
      expect(results.data[0].attributes.authors[0]).to.have.ownProperty(questions[0]).have.ownProperty(questions[1]);
    })
  })
})
