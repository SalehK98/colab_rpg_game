
const player = {
    strength: 5,
    dexterity: 2,
    defense: 3,
    level: 2,
    health: 60,
    potionAmount: 2
}

const monster = {
    strength: 4,
    dexterity: 4,
    defense: 2,
    level: 1,
    health: 60
}

class Combat {
    constructor(player, monster) {
        this.player = player;
        this.monster = monster;
    }

    determineStarter() {
        const playerRoll = this.rollD20();
        const monsterRoll = this.rollD20();
        const playerScore = playerRoll + this.player.dexterity;
        const monsterScore = monsterRoll + this.monster.dexterity;

        return playerScore > monsterScore ? this.player : this.monster;
    }


    attack(attacker, defender) {
        const attackRoll = this.rollD20() + attacker.strength;
        const damage = (attackRoll * attacker.level) - defender.defense;

        if (damage > 0) {
            defender.health -= damage;
            return damage;
        } else {
            return 0;
        }
    }

    usePotion() {
        if (this.player.potionAmount > 0) {
            this.player.health += 20;
            this.player.potionAmount -= 1;
        } else {
            console.log("You don't have any more potions to use!");
        }
    }

    rollD20() {
        return Math.floor(Math.random() * 20) + 1;
    }

    play() {
        let starter = this.determineStarter();
        console.log("STARTER IDENTITY:", starter)

        while (this.player.health > 0 && this.monster.health > 0) {
            console.log("START ATTACK player health:", this.player.health)
            console.log("START ATTACK:", this.monster.health)
            const damage = this.attack(starter, starter === this.player ? this.monster : this.player);
            if (starter === this.player) {
                this.monster.health -= damage;
                console.log("PLAYER MAKES DAMAGE OF:", this.player.health)
            } else {
                this.player.health;
                console.log("MONSTER MAKES DAMAGE OF:", this.player.health)
            }
            starter = starter === this.player ? this.monster : this.player;
        }
        console.log("AFTER COMBAT player health:", this.player.health)
        console.log("AFTER COMBAT monster health:", this.monster.health)
        return this.player > 0 ? this.player : this.monster;
    }

}


new Combat(player, monster).play()