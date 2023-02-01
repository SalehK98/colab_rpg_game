//crud
//class Database with crud methods, gets objects and stores them
class Database {
  constructor() {}
  create(key, instance) {
    localStorage.setItem(key, JSON.stringify(instance));
  }
  get read() {
    return { monster: JSON.parse(localStorage.getItem("monster")) };
  }
  update() {}
  delete() {}
}

let db = new Database();
const testMonster = contracts[0].monster;
console.log(testMonster);
db.create("monster", testMonster);
console.assert(db.read.monster.name == testMonster.name, "failed create");
db.read.monster;
console.assert(db.read.monster.name == testMonster.name, "failed read");

testMonster.life = 42;
db.update("monster", testMonster);
console.assert(db.read.monster.life == 42, "failed update");

db.delete("monster", testMonster);
console.assert(db.read.monster == undefined, "failed delete");
