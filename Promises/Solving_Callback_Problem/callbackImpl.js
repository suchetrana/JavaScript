// Tasks
// 1. Write a fn to download data from a url

function downloader(url, cb) {
    console.log("Started download from: ", url);
    setTimeout(function execute() {
        console.log("Download completed!");
        let data = "JS is awesome!";
        cb(data);

    }, 3000);
}
// downloader("google.com", function cb(value) {
//     console.log("download completed: ", value);
// })

// 2. Write a fn to save that download data in a file and return the filename

function writeFile(data, cb){
    console.log("Starting content in file: ", data);
    setTimeout(function write(){
        console.log("complete writing data in file");
        const file = "file.txt"
        cb(file);
    }, 4000)
}
// writeFile("abc", function process(fileName){
//     console.log("Filename is: ", fileName);
// })

// 3. Uploading file

function upload(url, file, cb){
    console.log("Started uploading ", file, " on ", url); 
    setTimeout(function up(){
        console.log("upload complete");
        const response = "success";
        cb(response);
    }, 4000)
}

downloader("www.google.com", function down(content){
    console.log("We are now going process downloaded data");
    writeFile(content, function process(fileName){
        console.log("Now we writing file.", fileName);
        upload("google.com", content, function cb(response){
            console.log("Now uploading file.", response);
        })
    })
})