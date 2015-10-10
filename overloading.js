'use strict';
function Foo() {
  this.overload = function(host, port) {
    let regex = /http:\/\/([\.\w]*):([\d]*)/;
    if(!port) {
      port = regex.exec(host)[2];
      host = regex.exec(host)[1];
    }
    console.log('host', host, 'port', port);
  }
}

let foo = new Foo();

foo.overload('localhost', 3000);
foo.overload('http://localhost:3000');
