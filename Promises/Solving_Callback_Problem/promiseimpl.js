// Tasks: (only use promises)
// 1. Write a function to download data from a url
// 2. Write a function to save that downloaded data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a newurl
function download(url){
    return new Promise(function executor(resolve, reject){
        console.log("Downlaoding start from ", url); 
        setTimeout(function exe(){
            console.log("Downloading completed");
            const data = "Apple"
            resolve(data);
        }, 5000);
    })
}
function writeFile(data){
    return new Promise(function exe(resolve, reject){
        console.log("Saving in file ", data);
        setTimeout(function handel(){
            console.log("Saving completed");
            const file = "file.txt";
            resolve(file);
        }, 4000)
    })
}
function upload(url, file){
    return new Promise(function executor(resolve, reject){
        console.log("Uploading ", file, " on ", url);
        setTimeout(function handler(){
            console.log("Uploading complete ");
            const response = "success";
            resolve(response);
        }, 4000)
    })
}
let p = download("www.google.com");
// )
p.then(function processDownload(data){
    console.log("Downloaded data is: ", data);
    return writeFile(data);
})
.then(function processWrite(value){
    console.log("data is written ", value); 
    return upload("apple.com", value);
})
.then(function processUpload(value){
    console.log("Response is: ", value);
})
































// Promise callback hell

// p.then(
//     function fullFillment(data){
//
//         console.log("Data in the file", data);
//         let p2 = writeFile(data);
//         p2.then(
//             function fullFilled(content){
//             console.log("File name", content);
//
//             let p3 = upload("www.google.com", content);
//             p3.then(function fulFill(response){
//                 console.log("upload status: ", response);
//             })
//
//         })
//     }
