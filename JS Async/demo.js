function timeConsumingByLoop() {          // native code of JS
    console.log("Loop start");                  // Synchronous part
    for (let i=0; i<10000000000 ; i++){
    //     some task
    }
    console.log("loop end");
}

function timeConsumingByRuntimeFeature() {  // not native feature
    console.log("Starting timer");                // given by runtime
    setTimeout(function exce() {
        console.log("Complete timer0");
    },5000)
    console.log("Ending timer");
}
function timeConsumingByRuntimeFeature1() {  // not native feature
    console.log("Starting timer");                // given by runtime
    setTimeout(function exce(){
        console.log("Complete timer1");
    }, 0)
    console.log("Ending timer");
}
function timeConsumingByRuntimeFeature2() {  // not native feature
    console.log("Starting timer");                // given by runtime
    setTimeout(function exce(){
        console.log("Complete timer2");
    }, 200)
    console.log("Ending timer");
}
console.log("hi"); 

timeConsumingByLoop()
timeConsumingByRuntimeFeature();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop()
console.log("Bye"); 