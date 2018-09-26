var hydraExpress = require('hydra-express');
var hydra = hydraExpress.getHydra();
var config = require('./config.json');

config.hydra.serviceName = 'world';

hydraExpress.init(config, () => {})
  .then((serviceInfo) => {
    console.log('serviceInfo', serviceInfo);
    let message = hydra.createUMFMessage({
      to: 'hello:[get]/',
      from: 'world:/',
      body: {}
    });
    return hydra.makeAPIRequest(message)
      .then((response) => {
        console.log('response', response);
      });
  })
  .catch(err => console.log('err', err));