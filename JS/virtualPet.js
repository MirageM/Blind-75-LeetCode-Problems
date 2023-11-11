var virtualPet = {
    sleepy: true,
    nap: function(){
        this.sleepy = false;
    }
}
// object literals || dot notation
console.log(virtualPet.sleepy);
virtualPet.nap();
console.log(virtualPet.sleepy);