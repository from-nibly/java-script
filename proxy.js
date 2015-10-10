var handler = {
  get : function(target, name) {
    return target[name] || target.foo[name];
  }
}

var obj = {
  bar : function() { console.log('bar') },
  foo : {
    bang : function() { console.log('bang') }
  }
}

var test = new Proxy(obj, handler);


test.bar();
test.bang();
