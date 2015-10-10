exports = module.exports = function(express, morgan) {
  var app = express();
  app.use(morgan());
  return app;
};

exports['@require'] = ['express', 'morgan'];
exports['@singleton'] = true;
