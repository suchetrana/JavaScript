function fetchNextElement(array){
    let idex = 0;
    function next(){
        if(idex === array.length){
            return {value: undefined, done: true};
        }
        const nextElement = array[idex];
        idex++;
        return {value: nextElement, done: false};
    }
    return next();
}

let automaticFetch = fetchNextElement([1, 2, 3, 85, 99, 56,95]);
console.log(automaticFetch);
// console.log(automaticFetch.next());
// console.log(automaticFetch.next());
// console.log(automaticFetch.next());
// console.log(automaticFetch.next());
// console.log(automaticFetch.next());