// Monster and Player Entities

class Entity {
    constructor(name, health, strength, dexterity, defense, level){
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.dexterity = dexterity;
        this.defense = defense;
        this.level = level;
    }
}

class Player extends Entity{
    constructor(name, health, strength, dexterity, defense, level, xp, potion){
        super(name, health, strength, dexterity, defense, level);
        this.xp = xp
        this.potion = potion;
    }
}

class Monster extends Entity{
    constructor(name, health, strength, dexterity, defense, level, xpEarned, goldEarned){
        super(name, health, strength, dexterity, defense, level);
        this.xpEarned = xpEarned;
        this.goldEarned = goldEarned;
    }
}
