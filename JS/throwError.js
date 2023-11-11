// throw new Error();
// console.log("Hello"); // Nothing will print out

try{
    throw new Error();
    console.log("Hello");
} catch(err){
    console.log("Goodbye");
}