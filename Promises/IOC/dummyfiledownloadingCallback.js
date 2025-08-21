function download(url, cb){
    console.log("Starting download from", url);
    let data = "JS Library";
    setTimeout(function exe(){
        console.log("download complete in 5s");
    }, 5000)
    cb(data);
}
download("suchet.com", function exe(data){
    console.log("downloaded data is: ", data);
})