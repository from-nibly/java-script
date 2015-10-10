exports = module.exports = injector = require('electrolyte');

injector.loader(injector.node_modules());
injector.loader(injector.node('./lib'));
