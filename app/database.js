//crud
//class Database with crud methods, gets objects and stores them
class Database {
  constructor() {}
  create() {}
  get read() {}
  update() {}
  delete() {}
}

let db = new Database();
const testMonster = contracts[0].monster;
console.log(testMonster);
db.create(testMonster);
console.assert(db.kaflef == blajelfaj);
db.read.monsters;
console.assert(db.kaflef == blajelfaj);

db.update(testMonster);
console.assert(db.kaflef == blajelfaj);

db.delete(testMonster);
console.assert(db.kaflef == blajelfaj);
