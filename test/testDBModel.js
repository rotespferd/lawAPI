var should = require("should");
var DBModel = require("../src/model/DBModel");

describe("DBModel", function(){
  it("should be instance of DBModel",function(){
    var dbmodel = new DBModel("42a21d3");
    dbmodel.should.be.an.instanceof(DBModel);
  })

  describe("#get", function(){
    it("should throw an error", function(){
      var dbmodel = new DBModel("42a21d3");
      dbmodel.get.should.throw();
    })
  })

  describe("#save", function(){
    it("should throw an error", function(){
      var dbmodel = new DBModel("42a21d3");
      dbmodel.save.should.throw();
    })
  })

  describe("#id", function(){
    it("should have an id", function(){
      var dbmodel = new DBModel("42a21d3");
      should.exist(dbmodel.id);
    })
    it("should have the id set in constructor", function(){
      var id = "42a21d3";
      var dbmodel = new DBModel(id);
      dbmodel.id.should.eql(id);
    })
    it("should change the id", function(){
      var dbmodel = new DBModel("42a32d3");

      var newId = "newId42";
      dbmodel.id = newId;

      dbmodel.id.should.eql(newId);
    })
  })

  describe("#toJSON", function(){
    it("should return valid JSON", function(){
      var dbmodel = new DBModel("42a32d3");

      var dbModelJson = dbmodel.toJSON();
      dbModelJson = JSON.stringify(dbModelJson);

    })
    it("should return the right object", function(){
      var dbmodel = new DBModel("42a32d3");

      var dbModelJson = dbmodel.toJSON();
      var testJson = {id: "42a32d3"};

      dbModelJson.should.eql(testJson);
    })
  })
})
