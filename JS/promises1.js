let p = new Promises((resolve, reject) => {
  a = 1 + 2;
  if (a == 3) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log("This is in the then " + message);
}).catch((message) => {
  console.log("This is in the catch " + message);
});
