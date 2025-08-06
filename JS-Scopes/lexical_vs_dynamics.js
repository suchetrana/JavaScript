// lexical ->  all variables scopes find in compilation eg: JS
// dynamic -> scopes resolution done at runtime  eg: bash

var teacher = "Sanket"

function ask(q){
    console.log(teacher, q);
}
function fun(){
    var teacher = "pulkit"
    ask("why?")
}
fun();

