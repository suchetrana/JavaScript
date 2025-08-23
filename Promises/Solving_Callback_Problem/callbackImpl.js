// Tasks
// 1. Write a fn to download data from a url

// function downloader(url, cb) {
//     console.log("Started download from: ", url);
//     setTimeout(function execute() {
//         console.log("Download completed!");
//         let data = "JS is awesome!";
//         cb(data);
//
//     }, 3000);
// }
// downloader("google.com", function cb(value) {
//     console.log("download completed: ", value);
// })

// 2. Write a fn to save that download data in a file and return the filename

function saveFile(fileName, cb){
    console.log("Saving File: ", fileName);
    setTimeout(function execute(){
        console.log("File saved successfully."); 
        cb(fileName);
    }, 4000)
}
saveFile("main.txt", function process(file){
    console.log("Filename is: ", file); 
})