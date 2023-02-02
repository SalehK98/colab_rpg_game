// const { Monster } = require("./entities.js");

class Contract {
  constructor(monster) {
    this.monster = monster;
    this.name = monster.name;
    this.level = monster.level;
    this.gold = monster.level * 25;
    this.xp = monster.xp;
  }
}

const prefix = [`Angry`, `Lonely`, `Toxic`];
const suffix = [`Spider`, `Zombie`, `Witch`];

function getContracts(monsterNumber) {
  const contracts = [];
  for (let i = 0; i < monsterNumber; i++) {
    const random1 = Math.floor(Math.random() * 3);
    const random2 = Math.floor(Math.random() * 3);
    const name = `${prefix[random1]} ${suffix[random2]}`;
    const lvl = i + 1;
    const hp = lvl * 15 + 50;
    const str = 10 + lvl * 2;
    const dex = 7 + lvl * 2;
    const def = 10 * lvl;
    const xp = lvl * 50;
    const noob = new Monster(name, hp, str, dex, def, lvl, xp);
    const quest = new Contract(noob);
    contracts.push(quest);
  }
  return contracts;
}
// todo: if db.read.contracts then don't create new contracts, get from db
const contracts = getContracts(7);
// db.create('contracts', contracts)
console.log(contracts);
