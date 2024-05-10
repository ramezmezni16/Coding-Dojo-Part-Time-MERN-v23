// code : 1
console.log(hello);
var hello = 'world';
AFTER HOISTING BY THE INTERPRETER
// var hello;
// console.log(hello); // logs undefined
// hello = 'world';



//code : 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
AFTER HOISTING BY THE INTERPRETER
//var needle
//

