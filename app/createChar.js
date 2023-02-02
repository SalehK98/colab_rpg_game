import db from "./database.js";
// const { db } = require("./database.js")


const createChar = document.querySelector('#create-char form');

const playerName = document.querySelector('#player-name');
const strength = document.querySelector('#strength');
const defense = document.querySelector('#defense');
const dexterity = document.querySelector('#dexterity');

const player = {};

createChar.addEventListener('submit', function (event) {
    event.preventDefault();
    player.name = playerName.value;
    player.strength = Number(strength.value);
    player.defense = Number(defense.value);
    player.dexterity = Number(dexterity.value);
    db.create("player", player)
    console.log(player);
})

document.getElementById("submit-create").addEventListener("click", () => {
    document.location.href = './map.html'
})

