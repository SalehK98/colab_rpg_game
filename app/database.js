//crud
/**
 class Database with crud methods, gets objects and stores them
 * 
 */
class Database {
  /**
   *
   * @param {"monster"|"contracts"|"locations"} key
   * @param {any} instance
   */
  create(key, instance) {
    localStorage.setItem(key, JSON.stringify(instance));
  }
  fetch(key) {
    const stored = localStorage.getItem(key);
    if (stored) {
      return JSON.parse(stored);
    }
  }
  get read() {
    return {
      monster: this.fetch("monster"),
      contracts: this.fetch("contracts"),
      locations: this.fetch("locations"),
    };
  }
  /**
   *
   * @param {"monster"|"contracts"|"locations"} key
   * @param {any} instance
   */
  update(key, instance) {
    this.create(key, instance);
  }
  /**
   *
   * @param {"monster"|"contracts"|"locations"} key
   */
  delete(key, instance) {
    localStorage.removeItem(key); //fix
  }
}

/*testing monsters in local storage */
let db = new Database();
const testMonster = contracts[0].monster;
console.log(testMonster);
db.create("monster", testMonster);

db.read.monster;
console.assert(db.read.monster.name == testMonster.name, "failed read");

testMonster.health = 42;
db.update("monster", testMonster);
console.assert(db.read.monster.health == 42, "failed update");

db.delete("monster", testMonster);
console.assert(db.read.monster == undefined, "failed delete");

/*testing contracts in local storage */
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
