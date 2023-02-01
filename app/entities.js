// Monster and Player Entities

class Entity {
    constructor(name, health, strength, dexterity, defence, level, xp){
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.dexterity = dexterity;
        this.defence = defence;
        this.level = level;
        this.xp = xp;
    }
}

class Player extends Entity{
    constructor(name, health, strength, dexterity, defence, level, xp, potion){
        super(name, health, strength, dexterity, defence, level, xp);
        this.potion = potion;
    }
}

class Monster extends Entity{
    constructor(name, health, strength, dexterity, defence, level, xp){
        super(name, health, strength, dexterity, defence, level, xp);
    }
}
