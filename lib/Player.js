//imports the Potion() constructor from the ../lip/Potion.js file.
const Potion = require("../lib/Potion");

// name = "" sets the name to an empty string if no name is provided.
function Player(name = "") {
  this.name = name;

  this.health = Math.floor(Math.random() * 10 + 95);
  this.strength = Math.floor(Math.random() * 5 + 7);
  this.agility = Math.floor(Math.random() * 5 + 7);
  this.inventory = [new Potion("health"), new Potion()];
}

module.exports = Player;
