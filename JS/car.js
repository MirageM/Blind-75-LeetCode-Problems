//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "blue";
console.log(car);
car.turnTheKey = function(){
    console.log("The engine is running");
}
car.lightsOn = function(){
    console.log("The lights are on.");
}
console.log(car);
car.turnTheKey();
car.lightsOn();