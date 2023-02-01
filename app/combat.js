
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
        const monsterRoll = rollD20();
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

    runCombat() {
        while (this.player.health > 0 && this.monster.health > 0) {
            console.log("player health", this.player.health)
            console.log("monster health", this.monster.health)

            if (this.starter.health < 20) {
                console.log("Do you want to use a potion? (y/n)");
                const usePotion = prompt();
                if (usePotion === "y") {
                    this.usePotion();
                }
                console.log(`You attack the monster for ${this.attack(this.player, this.monster)} damage.`);
            } else {
                console.log(`The monster attacks you for ${this.attack(this.monster, this.player)} damage.`);
            }
        }
        console.log("combat ends - player health: ", this.player.health)
        console.log("combat ends - monster health", this.monster.health)

    }
}


new Combat(player, monster).runCombat()