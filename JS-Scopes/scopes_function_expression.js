// const f = function fun(){
//     console.log("How much fun");
// }
// f();

// fun();  // error

//name function expression

function fun(fn){
    console.log("Welcome");
    fn();
}

fun(function askingAboutFun(){
    console.log("Wow so much fun");
    console.trace();
})

// named function usage -> recursion, debugging make easier
