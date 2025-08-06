let obj = {

    // Overriding toString() and valueOf()
    toString(){
    //     by default give [object, object] -> typeof this is string
        return "98";
    },
    valueOf(){
    // by default, it returns same object -> typeof valueOf is objected

    }
};

let o = {x: 10};

// console.log(typeof o.toString());  // String
// console.log(typeof o.valueOf());   // Object



let ob = {};
// console.log(10 - obj);

let ob1 = {x:1, y:2};
console.log(2- ob1);

let ob2 = {x:8, valueOf(){return "98"}};
console.log(10- ob2);


let ob3 = {};

console.log(ob3);

console.log(10 + ob3); // -> 10 + "[object][object]"
console.log("10" + ob3);

console.log(10 - ob3);
console.log("10" - ob3);


