import db from "./database.js";
import { Monster } from "./entities.js";

const firstName = [`Angry`, `Lonely`, `Toxic`];
const secondName = [`Spider`, `Zombie`, `Witch`];

class Contract {
  constructor(monster) {
    this.monster = monster;
    this.name = monster.name;
    this.level = monster.level;
    this.gold = monster.level * 25;
    this.xp = monster.xp;
  }
}

function getContracts(monsterNumber) {
  const contracts = [];
  for (let i = 0; i < monsterNumber; i++) {
    const random1 = Math.floor(Math.random() * 3);
    const random2 = Math.floor(Math.random() * 3);
    const name = `${firstName[random1]} ${secondName[random2]}`;
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

const contractDiv = document.querySelector(`.contract-page`);

function drawContracts(con) {
  con.forEach((c) => {
    const contractElement = document.createElement(`div`);
    contractElement.classList.add(`contract`);
    const monsterImg = document.createElement(`img`);
    monsterImg.src = `../assets/monster.jpg`;
    const name = c.name;
    const lvl = c.level;
    const gold = c.gold;
    const xp = c.xp;
    const contractName = document.createElement(`p`);
    const contractLevel = document.createElement(`p`);
    const contractGold = document.createElement(`p`);
    const contractXp = document.createElement(`p`);
    contractName.textContent = `${name}`;
    contractLevel.textContent = `Level: ${lvl}`;
    contractGold.textContent = `Gold: ${gold}`;
    contractXp.textContent = `Experience: ${xp}`;
    contractElement.appendChild(monsterImg);
    contractElement.appendChild(contractName);
    contractElement.appendChild(contractLevel);
    contractElement.appendChild(contractGold);
    contractElement.appendChild(contractXp);
    contractDiv.appendChild(contractElement);
  });
}

console.log(typeof db.read.current);

let contracts = getContracts(db.read.current)

drawContracts(contracts)


let myContracts = document.getElementsByClassName("contract")

myContracts.forEach(el => {
  el.addEventListener("click", console.log("clicked"))
})
export { getContracts };
