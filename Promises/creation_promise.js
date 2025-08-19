function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

// console.log(getRandomInt(5));

// Promise in Synchronous
// function  createPromiseWithLoop(){
//         return new Promise(function excutor(resolve, reject) {
//         for (let i = 0; i < 10000000000; i++) {
//         //     some task
//         }
//         let num = getRandomInt(10);
//          if(num % 2 == 0){
//              resolve(num);  // resolve(x, y, z) only give 'x'
//          }
//          else{
//              reject(num);
//          }
//
//     })
// }
// let y = createPromiseWithLoop();
// console.log(y);

function  createPromiseWithTimeout(){
    return new Promise(function executor(resolve, reject) {
       setTimeout(function excute(){
           let num = getRandomInt(5);
           if(num % 2 == 0){
               console.log("Resolving"); 
               resolve(num, 10, 20);  // resolve(x, y, z) only give 'x'
               console.log("Resolve done"); 
           }
           else{
               console.log("Rejecting"); 
               reject(num);
               console.log("Rejecting done");
           }
       }, 10000)
    })
}
let z= createPromiseWithTimeout()
console.log(z); 
