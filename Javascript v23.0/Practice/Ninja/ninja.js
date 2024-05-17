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
