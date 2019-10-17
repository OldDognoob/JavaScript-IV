/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

function Car(model, milesPerGallon) {
   this.model = model;
   this.milesPerGallon = milesPerGallon;
   this.odometer = 0;
   this.tank = 0;
};

Car.prototype.fill = function (gallons) {
  return this.tank += gallons;
};

Car.prototype.drive = function(distance){
  if(howfarIcanDrive > distance){
    this.tank -=gallons
    this.odometer += distance
  }else{
    this.odometer += howfarIcanDrive
  } this.tank = 0
   return 'I ran out of fuel ${howfarIcanDrive}'miles;

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/   class Car {
    constractor(model, milesPerGallon, topspeed){
        this.model= model;
        this.milesPerGallon = milesPerGallon;
        this.topspeed = 195;
        this.odometer = 0;
        this.tank = 0;
    }

    name(){
        return `The ${this.model} with ${this.tank}`;
    }

    drive(){
        return `With ${this.tank} as fast as ${this.topspeed}`;
    }

  const cabrio = new VW ({
        maker: 'volkswagen',
        model: 'Beetle S',
        topspeed: '185',
        color: 'BlueBlack',
        capacity: 5,
        year: 2018
    })
}
 console.log(cabrio);
 console.log(cabrio.name());
 


