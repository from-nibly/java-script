var injector = require('./injector.js');

var routes = injector.create('routes');
var app = injector.create('app');


routes(app);

app.listen(3000);
