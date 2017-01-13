var minecraftWorld = require('./minecraft-world.js');

var wood = 0;

wood += minecraftWorld.chopWood();

console.log("Steve now has "+wood+" blocks of wood");
