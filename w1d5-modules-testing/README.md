# Node Modules

- when you build larger programs it is useful to split up your code in several files
- we use the node module system to load code from a separate file (module.exports and require)
- minecraft example: minecraft world, steve, etc.
-- 
- note: when a module B requires another module A and changes module A's data, the change is visible in all modules that require module A. i.e. requiring a module does not copy the data. it just provides a pointer to it. 
Code: 

# NPM Modules

One of the most powerful things in software engineering is the ability to use open source code in your project with minimal effort.

Node has a large collection of open source software you can use. http://npmjs.com

When you use another module you need a package.json file to list npm packages that your program depends on.

https://docs.npmjs.com/files/package.json

Commands:

- npm init: generate a package.json file in your project.
- npm install --save some-package-name: downloads the package in the node_modules folder and adds the package as a dependency in your package.json file
- npm install --save-dev some-package-name: same as --save but it adds the package to the devDependencies list
- npm install: useful when you clone someone else's project and need to get going. Installs all packages listed in package.json to the node_modules folder.

Remember to add your node_modules folder to .gitignore to prevent it from being uploaded to git. The folder tends to be quite large and it will slow things down for other people trying to work with your code.


# Unit Testing: Mocha & Chai

Unit testing is writing code whose only objective is to test that our code does what was expected.  It would typically be written to simulate various scenarios / conditions expected to
be found during the execution of your code to make sure it 
is handle correctly.

We used two npm packages to do this: mocha (test engine) and chai (better assertion library).   You can also read about Node's own assertions

https://mochajs.org/
http://chaijs.com/
https://nodejs.org/api/assert.html

