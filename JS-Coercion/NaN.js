console.log(Number("123"));
console.log(Number("abcd"));
console.log(Number("0xb"));

let x = NaN;

console.log(x == NaN);

console.log(isNaN(x));

// how toc check value is NaN

console.log(isNaN("suchet"));//isNaN() converts incoming input to number.

console.log(Number.isNaN("suchet")); // recommended

// create own Number.isNaN()

if(typeof x == 'number' && x != x){
    console.log(true);
    
}

if( x !== x){
    console.log(true);
    
}