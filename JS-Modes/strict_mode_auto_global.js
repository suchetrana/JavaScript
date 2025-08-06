
"use strict";  //creating strict
// main usage of strict -> identify and fix strict mode {restricted variant of JS}
// normal mode -> "Sloppy mode"

var teacher = "Sanket";
function  fun(){
    var teacher = "Pulkit";
    content = "JS"
    console.log(teacher);
}
function gun(){
    var student = "Suchet";
    console.log(student);
}
fun();
gun();
console.log(content);

console.log(teacher);