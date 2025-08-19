console.log("hello world!");

setTimeout(function exce(){
    console.log("Timer Done");
    setTimeout(function pass(){
        console.log("Timer2 done");
    }, 10);
}, 0)

for (let i=0; i<1000000000; i++){
    // some task
}
console.log("End");