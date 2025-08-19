let count = 0;
let y = setInterval(function exce(){
    count++;
    console.log(count);
    if(count > 2){
        clearInterval(y)
    }
}, 2000)
console.log(typeof y);
// WebSite : jsv9000.app
