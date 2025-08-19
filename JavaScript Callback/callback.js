/*
* fun -> HOF ? -> it takes fn (which is a function) as argument
*
* x -> number
* fn -> function()
*/

function fun(x, fn){    // fun -> HOF: fn that takes input as fn
    for (let i = 0; i < 5; i++) {
        console.log(x + " "+ i);
    }
    fn();
}

fun("Suchet", function callBack(){  // callback -> fn pass as argument in another fn.
    console.log("This is callback fn!!");
});


//  Disadvantage of callback->
// 1) Readability
// 2) Callback Hell -> pyramid
// 3) Inversion of control -> soln promise

function doTask(fn, x){
    fn(x*x);
    fn(x*x);
}

doTask(function exe(num){
    // due to callback, I am passing control of how exec should be called to doTask
    // this is inversion of control
    console.log("Woah number is: ", num);
}, 9)

