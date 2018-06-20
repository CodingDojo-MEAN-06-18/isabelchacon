function Ninja(name) {

    var speed = 3;
    var strength = 3;

    this.name = name;
    this.health = 100;

    this.showStats = function() {
        console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+speed+", Strength: "+strength);
        return this;    
    };

    this.getstrength = function(){
        return strength;
    }

}

Ninja.prototype.sayName = function() {
    console.log("My name is "+this.name);
    return this;
}

Ninja.prototype.drinkSake = function() {
    this.health += 10;
    return this;
}

Ninja.prototype.punch= function(ninja2) {
    if(!(this instanceof Ninja) || !(ninja2 instanceof Ninja)){
        console.log("Ninjas can only punch other ninjas.")
    }
    else{
        ninja2.health -= 5;
        console.log(ninja2.name+" was punched by "+this.name+" and lost 5 health");
    }
    return this;
}

Ninja.prototype.kick= function(ninja2) {
    if(!(this instanceof Ninja) || !(ninja2 instanceof Ninja)){
        console.log("Ninjas can only kick other ninjas.")
    }
    else{
        var health = this.getstrength() * 15
        ninja2.health -= health;
        console.log(ninja2.name+" was kicked by "+this.name+" and lost "+health+" health!");
    }
    return this;
}


var ana = new Ninja("Ana");
var isabel = new Ninja("Isabel");

var num = 5;

ana.kick(isabel);
isabel.showStats();