## microservices

We started the lecture by realizing how prevalent _encapsulation_ has been as a force to organize systems. The same motivations we have for using classes in object oriented systems can be found in the design of more complex distributed systems where behaviour of a subsystem is encapsulated behind a given service.  This is all about taming complexity.

We then looked at a very simple snippet of code to figure out how to create a _better_ service:

```javascript
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('listening on port 3000!')
})
```

We used it to inquire about the potential weaknesses of such a services running in the wild and came up with a few scenarios that we should plan for if we want our service to be more robust. We talked about the following scenarios:

- if we add a `/status` route we could use it to find out if the service is up and running as it should
- if such a route exists for all my services, we could create a dashboard to visualize which subsystems are up and running and which ones are having problems
- knowing which subsystems are down may help us plan proper degradation of services without falling into a chaotic pattern.
- However, I don't want to write this *infrastructure* code for all my services.

### hydra 

We looked at [hydra](https://www.npmjs.com/package/hydra) as a basic library that provides many of the expected features expected from microservices.

The [`hello.js`](https://github.com/jugonzal/lhl-lectures/tree/master/w8-microservices/hello.js) services shows a simple endpoint that has been wrapped by Hydra.  

Note that Hydra requires [redis](https://redis.io/) to run.

Also, Hydra provides a command-line interface for managing your services:

```
sudo npm install -g hydra-cli 
hydra-cli config
  redisUrl: 127.0.0.1
  redisPort: 6379
  redisDb: 15
```

With just a little bit of code we get a few advantages:

- discovery: `hydra-cli services`
- health:  `hydra-cli health hello`
- balancing: `hydra-cli nodes`
- routing: `hydra-cli rest hello:[get]/`

Look at [`world.js`](https://github.com/jugonzal/lhl-lectures/tree/master/w8-microservices/world.js) for an example of how one service can consume another one without "hard-wiring" the connection to it.

Lastly, we did a quick overview of the [12-factor app and how it applies to microservices](https://www.nginx.com/blog/microservices-reference-architecture-nginx-twelve-factor-app/). 
