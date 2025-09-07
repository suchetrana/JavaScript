/*
Tasks: (only use promises)

1. Write a function fetchPhoto(url)
   - Takes a photo URL
   - After 3 seconds, resolve with "raw photo"

2. Write a function applyFilter(photo)
   - Takes the "raw photo"
   - After 2 seconds, resolve with "filtered photo"

3. Write a function savePhoto(photo)
   - Takes the "filtered photo"
   - After 2 seconds, resolve with "photo.jpg"

4. Write a function sharePhoto(fileName)
   - Takes "photo.jpg"
   - After 1 second, resolve with "Shared successfully!"


Your Task:

- Implement these four functions with Promises.
- Use .then() chaining (flat chain, no nesting) to:
   1. Fetch the photo from "instagram.com/photo/123".
   2. Apply the filter.
   3. Save the photo.
   4. Share it.
- Print logs for each step.

*/


function fetchPhoto(url){
    return new Promise(function executor(resolve, reject){
        console.log("Taking Photo form:", url);
        setTimeout(function handler(){
            console.log("taking photo is complete");
            const data = "raw photo"
            resolve(data)
        }, 3000);
    })
}

function applyFilter(data){
    return new Promise(function executor(resolve, reject){
        console.log("Input: ", data);
        setTimeout(function handler(){
            console.log("filtration of photo is complete");
            const filterPhoto = "filter photo"
            resolve(filterPhoto)
        }, 4000);
    })
}

function savePhoto(photo){
    return new Promise(function executor(resolve, reject){
        console.log("Saving Photo started: ", photo);
        setTimeout(function handler(){
            console.log("Photo is saved successfully");
            const savedPhoto = "photo.jpeg"
            resolve(savedPhoto)
        }, 5000);
    })
}

function sharedPhoto(pic){
    return new Promise(function executor(resolve, reject){
        console.log("Sharing Photo: ", pic);
        setTimeout(function handler(){
            console.log("Sharing photo is complete");
            const sharedPic = "shared photo"
            resolve(sharedPic)
        }, 3000);
    })
}

let p = fetchPhoto("google/photos.com");
p.then(function fulFilled(data){
    console.log("Clicking pic complete. ", data); 
    return applyFilter(data);
})
.then(function fulFilled(photo){
    console.log("Filter applied successfully"); 
    return savePhoto(photo);
})
.then(function fulFilled(pic){
    console.log("Photo saved successfully"); 
    return sharedPhoto(pic);
})
.then(function fulFilled(sharedPic){
    console.log("Pic shared successfully."); 
})
.catch(function(err){
        console.error("Error occurred:", err);
});
