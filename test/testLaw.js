var should = require("should");
var Law = require("../src/model/Law");

describe("Law", function(){
  describe("#get", function(){
    it("should throw an error", function(){
      var testLaw = new Law("42a21d3");
      testLaw.get.should.not.throw();
    })
  })

  describe("#save", function(){
    it("should throw an error", function(){
      var testLaw = new Law("42a21d3");
      testLaw.save.should.not.throw();
    })
  })

  describe("#id", function(){
    it("should have an id", function(){
      var testLaw = new Law("42a21d3");
      should.exist(testLaw.id);
    })
    it("should have the id set in constructor", function(){
      var id = "42a21d3";
      var testLaw = new Law(id);
      testLaw.id.should.eql(id);
    })
    it("should change the id", function(){
      var testLaw = new Law("42a32d3");

      var newId = "newId42";
      testLaw.id = newId;

      testLaw.id.should.eql(newId);
    })
  })
})
