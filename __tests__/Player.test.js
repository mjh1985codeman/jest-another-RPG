//imports the Potion() constructor intot he test, establishing
//Potion as a usable variable (otherwise new Potion() would thrown an error).
const Potion = require("../lib/Potion");
//mocks/replaces the constructor's implementation with our faked data.
jest.mock("../lib/Potion");

console.log(new Potion());

const Player = require("../lib/Player.js");
//Testing to make sure the players have a name and three number properties:
//health, strength and agility.
test("creates a player object", () => {
  const player = new Player("Dave");

  expect(player.name).toBe("Dave");
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
  expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});

test("gets player's stats as an object", () => {
  const player = new Player("Dave");

  expect(player.getStats()).toHaveProperty("potions");
  expect(player.getStats()).toHaveProperty("health");
  expect(player.getStats()).toHaveProperty("strength");
  expect(player.getStats()).toHaveProperty("agility");
});

test("gets inventory from player or returns false", () => {
  const player = new Player("Dave");

  expect(player.getInventory()).toEqual(expect.any(Array));

  player.inventory = [];

  expect(player.getInventory()).toEqual(false);
});
