var hydraExpress = require('hydra-express');
var hydra = hydraExpress.getHydra();
var config = require('./config.json');

function onRegisterRoutes() {
  var express = hydraExpress.getExpress();
  var api = express.Router();
  
  api.get('/', function(req, res) {
    res.send(`hello from ${hydra.getServiceName()} - ${hydra.getInstanceID()}`);
  });
  hydraExpress.registerRoutes({
    '': api
  });
}

hydraExpress.init(config, onRegisterRoutes);