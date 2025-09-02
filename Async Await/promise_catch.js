function download(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data from", url);
        setTimeout(function down() {
            console.log("Downloading completed");
            const content = "ABCDEF"; // assume dummy download content
            reject(content);
        }, 1000);
    });
}

function writeFile(data) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started writing a file with", data);
        setTimeout(function wrtie() {
            console.log("Completed writing the data in a file");
            const filename = "file.txt";
            reject(filename);
        }, 5000);
    })
}

function uploadData(file, url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started uploading", file, "on", url);
        setTimeout(function up() {
            const response = "SUCCESS";
            console.log("upload completed");
            reject(response);
        }, 2000);
    })
}

let p = download("www.apple.com");
p.then(
    function fulFill(value) {
        console.log("Downloaded data", value);
        return writeFile(value);
    }
)
.then(
    function fulFill(value) {
        console.log("Downloaded data", value);
        return uploadData(value, "www.google.com");
    }
)
.then(
    function fulFill(value) {
        console.log("Downloaded data", value);
    }
)
    .catch(function f(err){
        console.log("Error :", err);
    }) 
    .finally(function exe(){
        console.log("Closing all connections.");
    })
    
