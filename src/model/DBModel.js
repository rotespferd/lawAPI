function DBModel(id) {
  this.id = id;

  this.save = function() {
     throw new Error("The method 'save' is not implemented in " + this.constructor.name);
  }

  this.get = function() {
    throw new Error("The method 'get' is not implemented in " + this.constructor.name);
  }
}

module.exports = DBModel;