// code 01:
console.log(hello);
var hello = 'world';

// code 01 after hoisting by the interprener:
var hello;
console.log(hello); // logs undefined
hello = 'world';






//code 02:
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// code 02 after hoisting by the interprener:
var needle;
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle);  
}
needle = 'haystack';
test(); // logs 'magnet'






//code 03:
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// code 03 after hoisting by the interprener:
var brendan;
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan); // logs 'super cool'







//code 04:
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// code 04 after hoisting by the interprener:
var food;
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
food ='chicken';
console.log(food); // logs 'chicken'
eat(); // logs 'half-chiken'








//code 05:
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);


//code 05 after hoisting by the interprener: 
var mean;
mean(); // logs error
console.log(food);
mean = function() {
    var food;
    food = "chicken";
    console.log(food); // logs "chicken"
    food = "fish";
    console.log(food); // logs "fish"
}
console.log(food);








//code 06:
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//code 06 after hoisting by the interprener:
var genre;
console.log(genre); // logs undefined
genre = "disco";
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre); // logs "rock"
    genre = "r&b";
    console.log(genre); // logs "r&b"
}
console.log(genre); // logs "disco" 
rewind();








// code 07:
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);


// code 07 after hoisting by the interprener:
dojo = "san jose";
console.log(dojo); //logs "san jose"
function learn() {
    var dojo;
    dojo = "seattle"; 
    console.log(dojo); // logs "seattle"
    dojo = "burbank";
    console.log(dojo); // logs "burbank"
}
console.log(dojo); // logs "san jose"
learn();








//code 08:
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}


//code 08 after hoisting by the interprener:
console.log(makeDojo("Chicago", 65)); // logs { name: 'Chicago', students: 65, hiring: true }
console.log(makeDojo("Berkeley", 0)); // logs { name: 'Berkeley', students: 0, status: 'closed for now' }
function makeDojo(name, students){
     const dojo = {};
     dojo.name = name;
     dojo.students = students;
     if(dojo.students > 50){
         dojo.hiring = true;
     }
     else if(dojo.students <= 0){
         dojo = "closed for now";
     }
     return dojo;
 }
