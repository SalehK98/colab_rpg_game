//crud
//class Database with crud methods, gets objects and stores them
class Database {
  constructor() {}
  create() {}
  read() {}
  update() {}
  delete() {}
}

let db = new Database();
const testMonster = contracts[0].monster;
console.log(testMonster);
db.create(Monster);
console.assert(db.kaflef == blajelfaj);
db.read(Monster);
console.assert(db.kaflef == blajelfaj);

db.update(Monster);
console.assert(db.kaflef == blajelfaj);

db.delete(Monster);
console.assert(db.kaflef == blajelfaj);
