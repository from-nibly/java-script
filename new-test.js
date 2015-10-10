function foo() {
  this.bar = function() {
    console.log('bar');
  }

  var rtn = {};
  rtn.bar = function() {
    console.log('bang');
  }
  return rtn;
}

var f = new foo();
var b = foo();


f.bar();
b.bar();
