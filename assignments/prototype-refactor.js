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
    constractor(carAtrributes){
        this.model= carAttributes.model;
        this.topspeed = carAttributes.topspeed;
        this.color = carAtrributes.color;
        this.capacity = carAtrributes.capacity;
        this.maker = carAttributes.maker;
    }

   model(){
        return `The ${this.model} with ${this.color}`;
    }

    drive(){
        return `With ${this.topspeed} as fast as ${this.maker}`;
    }

  
}

const cabrio = new VW ({
  maker: 'volkswagen',
  model: 'Beetle S',
  topspeed: '185',
  color: 'BlueBlack',
  capacity: 2
 
 
})
 console.log(cabrio);
 console.log(cabrio.name());
 


