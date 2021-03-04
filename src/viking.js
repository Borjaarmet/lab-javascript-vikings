// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength, ) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            return (this.name + " has died in act of combat");
        } else {
            return (this.name + " has received " + damage + " points of damage");
        }
    }
    battleCry() {
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            return ("A Saxon has died in combat");
        } else {
            return ("A Saxon has received " + damage + " points of damage");
        }
    }
}

// War

class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }




    addViking(vickings) {
        this.vikingArmy.push(vickings);

    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {


        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        let result = randomSaxon.receiveDamage(randomViking.strength);

        if (randomSaxon.health <= 0) {
            this.saxonArmy.pop()
        }
        return result;

    }



    saxonAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        let result = randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <= 0) {
            this.vikingArmy.pop()
        }
        return result
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }

    }
}


console.log(' Vikings ');
const viking1 = new Viking("name1", 100, 99);
const viking3 = new Viking("name2", 100, 53);
const viking2 = new Viking("name3", 100, 80);

console.log(' Saxons ');
const saxon1 = new Saxon(100, 44);
const saxon2 = new Saxon(100, 45);
const saxon3 = new Saxon(100, 67);