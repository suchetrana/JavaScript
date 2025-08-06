// Math module in JS

// console.log(Math.random());
//
// console.log(Math.round(3.4))


//String

let primitiveString = "Hello ";

let objectString = new String("Suchet");

// Date in JS

let date = new Date();

let date1 = new Date('April 27 2005 01:42')
// console.log(date);
// console.log(date1);

// Arrays in JS

// creation
let arr = [1, 3, 4, 5]

// Insertion 3 ways
// 1) from ending

arr.push(9);

//  2) from starting

arr.unshift(1);

//  3) middle

arr.splice(2, 0, 'a', 'b');

// let fruits = ['apple', 'date', 'elderberry'];
//
// // Start at index 1, remove 0 elements, and add 'banana' and 'cherry'
// const removedItems = fruits.splice(1, 0, 'banana', 'cherry');
//
// console.log(fruits);       // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']
// console.log(removedItems); // Output: [] (since nothing was removed)

// console.log(arr);

// Searching

// console.log(arr.indexOf(4));

// check number exist is an array
// valid only for: primitives
// fn's : indexOf() and includes()

let check = arr.includes(5);

// console.log(check);

// Array of Objects

let courses = [
    {
        no: 1,
        name: "Rahul"
    },
    {
        no: 2,
        name : "Sanket"
    }
]

// Searching in Objects/References Array we need to use callback functions

// let course = courses.find(function (course){
//     return course.name === "Sanket";
// })


// making more readable and shorter using arrow fn.

let course1 =
    courses.find(course => course.name === 'Sanket')

// console.log(course1);

// Removing elements in Array

// 1) ending -> pop()

arr.pop();

// 2) starting -> shift()

arr.shift();

// 3) middle -> splice()

let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Start at index 2 ('cherry') and remove 2 elements
const removedItems = fruits.splice(2, 2);

// console.log(fruits);       // Output: ['apple', 'banana', 'elderberry']
// console.log(removedItems); // Output: ['cherry', 'date']

// Removing element in array

// Emptying array:

// 1) num.length = 0;
let num1 = [1, 2, 3, 4];
num2 = num1;
// num1 = [];  not deleted because of reference type

num1.length = 0; // uses

// console.log(num1);

// 2) num.splice(0, num.length);

// 3) Using loop


// Combining & Slicing Arrays -> Primitives
let first = [1, 2, 3, 4];
let second = [5, 6, 7, 8];
let combined = first.concat(second);

// console.log(combined);

const sliced = combined.slice(2, 4);

// console.log(sliced);

// Combining & Slicing Arrays -> Objects

// Spread Operator

const employees = [
    { id: 101, name: 'Alice', department: 'HR' },
    { id: 102, name: 'Bob', department: 'Engineering' }
];

const newHires = [
    { id: 103, name: 'Charlie', department: 'Engineering' }
];

// Combine the two arrays into a new one
const allEmployees = [...employees,'x', 'y', ...newHires];

// console.log(allEmployees);


// for-of loop

let nums = [1, 2, 3, 4];

for (let num of nums){
    // console.log(num);
}

// for-each loop

nums.forEach(function (num) {
    // console.log(num);
});

nums.forEach((num) => console.log(num))

// Joining Array





