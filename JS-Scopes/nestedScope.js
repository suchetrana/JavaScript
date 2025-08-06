function fun(){  //fun -> global scope
    var x = 10;  // x -> fun scope
    function gun(){  //gun -> fun scope
        var y = 20;  // y-> gun scope
        console.log(x);   // goes one level up check exists
        console.log(y);
    }
    gun();
    console.log(x);
    // console.log(y);  // error
}

fun()


//  website : https://mazurov.github.io/eslevels-demo/

// console.log -> runtime feature.