exports = module.exports = function(strings) {
  return function(app) {
    app.get('/', function(req, res) {
      res.status(200).send(strings.helloWorld);
    });
  };
};

exports['@require'] = ['strings'];
exports['@singleton']= true;
