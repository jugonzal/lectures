## Continuous Integration

My very first question today was about _estimation_. As it is often the case, we _think_ we are good at estimating, but soon realize how poorly we do it.  In the spawn of a few minutes, we went from thinking "4 lines of code" was a good estimate for pretty much any problem to realizing perhaps we need 200 lines to implement a simple set of CRUD functions for a mongo database...  and still we forgot to consider all the integration and deployment effort.

I mentioned [The Mythical Man-Month](https://en.wikipedia.org/wiki/The_Mythical_Man-Month) as reference for the discussion. While the book was written for a very different software culture to the one we have nowadays, many of its points are still relevant today.

From there we started to explore all the things that contribute to miss our estimations, including:

- Consider the effort to write good positive/negative tests
- Consider configuration code
- Consider merges and other code management tasks
- Consider integration workflows
- Consider orchestration of servers needed for testing/integration/running

Looking at some of the core tenets of DevOps / CI we used the following flow to think about the development process:

### Dependencies -> Code + Config

Every time you add a new external dependency you must consider what configuration is required for others in your team to be able to use that same thing.  The best example is a database.  You can't just simply connect to a new database unless you consider how others in your team will be able to connect to it.

### Code/Config + Version -> Builds 

Each time your code or configuration changes, you should create a new version, always moving forward. These versions are going to allow you to Build.  You should run your full validation/testing framework against each build.

### Build + ENV -> Release

A given build should be able to run across multiple environments by simply applying the correct configuration for that environment.  That means that when creating a new build you should consider not only the configuration required for your local environment but for all environments possible.

### Release + Process -> Deploy (stateless)

Once a release is available you should be able to mount that release onto any given process/box in order to get a deployment.  At this stage the objective is to have stateless deployments that can be created and shutdown very quickly. It should be very trivial to simply create a new deployment by simply allocating the proper resource and applying a Release to it.

## npm workflow

We looked at the poor's man version of a workflow orchestrated just with `npm`, which looks like this:

```json
"scripts": {
    "lint": "./node_modules/.bin/eslint src",
    "fix": "./node_modules/.bin/eslint src --fix",
    "test": "mocha",
    "babel": "./node_modules/.bin/babel src -d dist",
    "build": "./node_modules/.bin/babel src -d dist --minified",
    "pretest": "npm run fix",
    "prebuild": "npm test",
    "postbuild": "npm version patch && git status ."
  }
```

We did talk about the [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript) which will give you a solid place to start with your linting.

