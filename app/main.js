player = {
    Strength: 5,
    Dex: 2,
    Defense: 3,
    Level: 2,
    Life: 60,
    isPlayer: true
}

monster = {
    Strength: 4,
    Dex: 4,
    Defense: 2,
    Level: 1,
    Life: 60,
    isMonster: true
}



function starter() {
    const playerRoll = Math.floor(Math.random() * 20) + 1
    const MonsterRoll = Math.floor(Math.random() * 20) + 1
    const playerScore = player.Dex + playerRoll
    const monsterScore = monster.Dex + MonsterRoll
    return playerScore > monsterScore ? player : monster
}

function attack() {
    const starts = starter()
    const attackRoll = Math.floor(Math.random() * 20) + 1
    if (starts === player) {
        const attackScore = (player.Strength + attackRoll) * player.Level
        const attackDamage = attackScore - player.Defense
        console.log(attackDamage);
        monster.Life -= attackDamage
    }
    else {
        const attackScore = (monster.Strength + attackRoll) * monster.Level
        const attackDamage = attackScore - monster.Defense
        console.log(attackDamage);
        player.Life -= attackDamage
    }
}

attack()
console.log(monster, player);