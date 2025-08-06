let x = -0;

// checking number is negativeZero
console.log(x === 0);
console.log(Object.is(x, -0)); //true
console.log(Object.is((x, 0)));   //false

console.log(Math.sign(-3));
console.log(Math.sign(2));

console.log(Math.sign(-0));
console.log(Math.sign(0));


// Can we write a custom fn that cab give us sign of a number properly

