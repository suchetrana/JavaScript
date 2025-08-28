// function process(){
//     let i = 0;
//     function innerProcess(){
//         i += 1;
//         return i;
//     }
//     return innerProcess; // we are not calling fn, returning fn
// }
// let res = process();
// console.log(res);
// let obj = {func: res};
// console.log(obj);

//Closers: Function store's value;
//use closer: setTimeout fn

function process(){
    let i = 0;
    function innerProcess1(){
        i += 1;
        return i;
    }function innerProcess2(){
        i += 2;
        return i;
    }
    return {innerProcess1, innerProcess2};
}

let y = process();
console.log(y); 

