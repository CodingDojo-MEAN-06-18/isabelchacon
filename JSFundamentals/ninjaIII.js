class Ninja {
    constructor(name) {
        this.name = name;
        this.strength = 3;
        this.speed = 3;
        this.health = 100;
    }

    sayName() {
        console.log("My name is "+this.name);
        return this;
    }

    drinkSake(){
        this.health += 10;
        return this;
    }

    showStats(){
        console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+this.speed+", Strength: "+this.strength);
        return this; 
    }

} 

class Sensei extends Ninja{
    constructor (name){
        super(name);
        this.health  = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("This is a very wise message");
        return this;
    }

    showStats(){
        console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+this.speed+", Strength: "+this.strength+" Wisdom: "+this.wisdom);
        return this; 
    }
}

var ana = new Ninja("Ana");
ana.sayName();
ana.showStats();
ana.drinkSake();
ana.showStats();

var isabel = new Sensei("Isabel");
isabel.speakWisdom();
isabel.showStats();