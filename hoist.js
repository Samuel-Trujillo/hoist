console.log(hello);
var hello = 'world';

// var hello
//console.log(hello); // prints undefined
// hello = 'world';



var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// var needle;
// function test(){ var needle; var needle = 'magenet'; console.log(needle)}
// var needle = 'haystack';
// test() // logs 'magent'


var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan;
// function print(){ var brendan; brendan= 'only okay'; console.log(brendan);}
//brendan = 'super cool';
// console.log(brendan) // prints 'super cool';

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food;
// food = 'chicken';
//console.log(food)// prints 'chicken';
// function eat(){ var food; food = 'half chicken' console.log(food) // prints 'half chicken', food = 'gone'}

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//var mean;
//mean = function(){....} // undefined//
//mean(); // crash

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

// var genre;
// console.log(genre) // undefined
// function rewind(){ var genre; genre = "rock";  console.log(genre)//prints "rock"// genre = "r&b" console.log(genre) // prints "r&b"}
// genre = "disco";
//console.log(genre) // prints "disco"

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


// var dojo;
// dojo = "san jose";
//console.log(dojo) // prints san jose;
//function learn(){ var dojo; dojo = "seattle"; console.log(dojo) // prints "seattle",dojo = "burbank"; console.log(dojo)// prints burbank}
//console.log(dojo) // prints "san jose"






