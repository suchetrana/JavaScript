// console.log("Hello!!");

// Object create
// let rectangle = {
//     length: 1,
//     breadth: 4,
//
//     // fn in object is called method
//     draw: function (){
//         console.log("drawing rectangle");
//
//     }
// }

// Object Creation =>

// 1) Factory function

function createRectangle( l, b) {
    let rectangle;
    return rectangle = {
        length: l,
        breadth: b,

        // fn in object is called method
        draw: function () {
            console.log("drawing rectangle");

        }
    }
}

// let rectObj = createRectangle(2, 3);
// console.log(rectObj);


// 2) Constructor function

function Rectangle(l, b){
    this.length = l;
    this.breadth = b;
    this.draw = function (){
        console.log("Drawing");
        
    }
}
// Object creation

let recObj = new Rectangle(3, 5)

console.log(recObj.breadth);

recObj.color = "yellow";
console.log(recObj);

delete recObj.color;

console.log(recObj);

let rect = new Function('length', 'breath'
`
this.length = length;
this.breadth = breadth
`)






