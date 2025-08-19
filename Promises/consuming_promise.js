function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function  createPromiseWithTimeout(){
    return new Promise(function executor(resolve, reject) {
        setTimeout(function execute(){
            let num = getRandomInt(5);
            if(num % 2 === 0){
                resolve(num);  // resolve(x, y, z) only give 'x'
            }
            else{
                reject(num);
            }
        }, 10000)
    })
}
console.log("Starting....");
let p= createPromiseWithTimeout()
console.log("we are waiting for the promise to complete.");

console.log("Currently my promise object is like ... ",p);
p.then(
    function fulfillHandler(value){ console.log("Inside fulfillHandler with value", value); },
    function rejectionHandler(value){ console.log("Inside rejectionHandler with value", value); }
)