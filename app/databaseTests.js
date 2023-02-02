/*testing monsters in local storage */

const testMonster = contracts[0].monster;
console.log(testMonster);
db.create("monster", testMonster);

db.read.monster;
console.assert(db.read.monster.name == testMonster.name, "failed read");

testMonster.health = 42;
db.update("monster", testMonster);
console.assert(db.read.monster.health == 42, "failed update");

// db.delete("monster", testMonster);
console.assert(db.read.monster == undefined, "failed delete");

/*testing contracts in local storage - will only work for a whole array of contracts, not one at a time */
db.create("contracts", contracts);
db.read.contracts;
console.assert(
  JSON.stringify(db.read.contracts) == JSON.stringify(contracts),
  "failed read"
); //stringify for comparison
db.update("contracts", contracts);
console.assert(
  JSON.stringify(db.read.contracts) == JSON.stringify(contracts),
  "failed update"
);
db.delete("contracts", contracts);
console.assert(db.read.contracts == undefined, "failed delete");

/*testing locations in local storage TODO: create locations class in other js file */
const locations = [
  "the dark Valo",
  "the scary Farkwad",
  "the wild Bolgo",
  "the amazing Shandir",
];
db.create("locations", locations);
db.read.locations;
console.assert(
  JSON.stringify(db.read.locations) == JSON.stringify(locations),
  "failed read"
); //stringify for comparison
db.update("locations", locations);
console.assert(
  JSON.stringify(db.read.locations) == JSON.stringify(locations),
  "failed update"
);
db.delete("locations", locations);
console.assert(db.read.locations == undefined, "failed delete");
