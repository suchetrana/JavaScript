function download(url, cb){
    console.log("Starting download from", url);
    let data = "JS Library";
    setTimeout(function exe(){
        console.log("download complete in 5s");
    }, 5000)
    cb(data);
    cb(data);  // IOC condition you want cb() only for 1 time
                // download fn have not control on this fn
}
download("suchet.com", function exe(data){
    console.log("downloaded data is: ", data);
})