class ninja {
    constructor(name, health = 90, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
    }
    sayName() {
        console.log('ninja name is ${this.name}');
    }
    showStats() {
        console.log('name: ${this.name}');
        console.log('strength: ${this.strength}');
        console.log('speed: ${this.speed}'); 
        console.log('health ${this.health}');
    }
    drinkSake() {
        this.health += 10;
    }
}

//Example Outputs
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

class Sensei extends ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        this.wisdom = wisdom;
        super(name, health, speed, strength);
    }
    speakWisdom() {
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
    showStats() {
        super.showStats();
    }
}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();

