<<<<<<< HEAD
// OOP
=======
// OOP 1
>>>>>>> 9c540e0 (var calculation = purchase1.shoes * purchase1.stateTax;)
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log('Total price:', calculation);
    }
}
purchase1.totalPrice(); // 120