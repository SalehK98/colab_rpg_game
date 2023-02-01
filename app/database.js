//crud
/**
 class Database with crud methods, gets objects and stores them
 * 
 */
class Database {
  /**
   *
   * @param {"monster"|"contracts"} key
   * @param {any} instance
   */
  create(key, instance) {
    localStorage.setItem(key, JSON.stringify(instance));
  }
  fetch(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  get read() {
    return {
      monster: this.fetch("monster"),
      contracts: this.fetch("contracts"),
    };
  }
  /**
   *
   * @param {"monster"|"contracts"} key
   * @param {any} instance
   */
  update(key, instance) {
    this.create(key, instance);
  }
  /**
   *
   * @param {"monster"|"contracts"} key
   */
  delete(key, instance) {
    localStorage.removeItem(key); //fix
  }
}

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
