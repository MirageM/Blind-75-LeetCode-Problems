// Object methods
var car = {};

car.color = "red";

// add a method to the car object so that it can be called as car.turnkey()
car.turnKey = function(){
    console.log('engine running');
}

car.turnKey(); // should log 'engine running'