 // higher order fn -> there are functions which take another fn as arguments
 
 function f(x, fn){
  /*
  * x -> number
  * fn -> function
  */
     
     console.log(x);
     console.log(fn); 
     fn();
 }
 f(20, function run(){
     console.log("this function is input for hof function");
 })

 let arr = [1, 2, 3, 4, 5, 6, 10, 100, 200, 1000];

arr.sort()   // default implementation of  sort() fn in JS is  lexicographical order
console.log(arr);

 let b = [1, 2, 3, 4, 5, 6, 10, 100, 200, 1000];

b.sort(function comp(a, b){
    return a-b;
})
 // Sorting: Arranging elements in some order. -> all permutations part