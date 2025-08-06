// let name = "Suchet"
//
// function fun(){
//     console.log(name);
// }
// fun();
// console.log(name);
//


// var -> two scopes
// 1) global
// 2) functional scope

var name = "Suchet"; // global scope
console.log(name);

function fun(){
    console.log(age); // age accessible
    var age = 18; // functional scope / not accessible here
}
console.log(age);

