function download(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data from", url);
        setTimeout(function down() {
            console.log("Downloading completed");
            const content = "ABCDEF"; // assume dummy download content
            resolve(content);
        }, 1000);
    });
}
let p1 = download("www.suchet.com");
let p2 = download("www.suchet.com");
let p3 = download("www.suchet.com");

Promise.all([p1, p2, p3])
.then(function fulfillhandler(values){
    console.log(values);
})