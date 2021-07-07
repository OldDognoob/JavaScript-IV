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

*/ 
     class Car {
    constractor(Atrributes){
        this.model= Attributes.model;
        this.topspeed = Attributes.topspeed;
        this.color = Atrributes.color;
        this.capacity = Atrributes.capacity;
        this.maker = Attributes.maker;
    }

   model(){
        return `The ${this.model} with ${this.color}`;
    }

    drive(){
        return `With ${this.topspeed} as fast as ${this.maker}`;
    }

  
}
 const coupe = new s6 ({
   name:'VW6',
   type: 'coupe',
   size: 3,
   topspeed: 250,
   maker: 'VW'
 })

 console.log(coupe.model);
 console.log(coupe.topspeed());

 
 

 


