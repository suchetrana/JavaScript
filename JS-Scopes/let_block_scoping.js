var teacher = "Sanket"; //global
function fun(){   // global
    console.log(teacher);  // no error will be given
    console.log(content); // error throws  temporal dead zone
    var teacher = "Pulkit"; // scope of fun
    let content ="JS";  // content will be access only post declaration

    if(content === "JS"){
        let h = "128+"
        console.log(h);
    }
    console.log(teacher, content);
}

fun();
console.log(teacher);
// console.log(content);