let p = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a == 3) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log("This is the message in the then " + message);
}).catch((message) => {
  console.log("This is the message in the catch " + message);
});
