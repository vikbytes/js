var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  var name = firstAndLast.split(' ');

  this.getFullName = function() {
    return name[0] + " " + name[1];
  };
  this.getFirstName = function() {
    return name[0];
  };
  this.getLastName = function() {
    return name[1];
  };

  this.setFullName = function(arg) {
    let argument = arg.split(' ');
    name[0] = argument[0];
    name[1] = argument[1];
  };

  this.setFirstName = function(arg) {
   name[0] = arg;    
  };

  this.setLastName = function(arg) {
    name[1] = arg;
  };

  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
console.log(bob.getFirstName());
console.log(Object.keys(bob).length);
console.log(bob.getFullName());