function* fetchNextElement(){
    console.log("I am inside Generator function.");
    yield 1;
    yield 2;
    console.log("Somewhere middle.");
    yield 3;
    yield 4;
}

const iter = fetchNextElement();
iter.next();