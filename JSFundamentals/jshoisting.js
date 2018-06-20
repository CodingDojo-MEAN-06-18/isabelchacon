//GIVEN
// console.log(hello);                                   
// var hello = 'world';   

var hello;
//console.log(hello); //logs undefined
hello = 'world';

//GIVEN
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }

var needle;
function test(){
    var needle = 'magnet';
    //console.log(needle); //logs magnet
}
needle = 'haystack';
test();

//GIVEN
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

var brendan;
function print(){
    brendan = 'only okay';
    //console.log(brendan);
}
brendan = 'super cool';
//console.log(brendan);// Logs 'Super Cool', print() is never called

//GIVEN
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }

var food;
function eat(){
    var food;
    food = 'half-chicken';
    //console.log(food); //2. Logs 'half-chicken';
    food = 'gone';
}
food = 'chicken';
//console.log(food); //1. Logs 'chicken'
eat();

//GIVEN
// mean();
// console.log(food);
//     var mean = function() {
//         food = "chicken";
//         console.log(food);
//         var food = "fish";
//         console.log(food);
//     }
// console.log(food);

var mean;
//mean(); //throws error, mean is not a function, the rest is not run.
/*
console.log(food);
mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);*/

//GIVEN
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);

var genre;
function rewind(){
    genre = "rock";
	//console.log(genre); //2. Logs 'rock'
	var genre = "r&b";
	//console.log(genre); //3. Logs 'r&b'
}
//console.log(genre) // 1. Logs undefined
genre = "disco";
rewind();
//console.log(genre); //4. Logs 'disco'

//GIVEN
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);

var dojo;
function learn(){
	dojo = "seattle";
	//console.log(dojo); //2. Logs seattle
	var dojo = "burbank";
	//console.log(dojo); //3. Logs burbank
}
dojo = "san jose";
//console.log(dojo) //1. Logs san jose
learn();
//console.log(dojo) //4. Logs san jose

//GIVEN
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }

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
console.log(makeDojo("Chicago", 65)); //Logs { name: 'Chicago', students: 65, hiring: true }
console.log(makeDojo("Berkeley", 0)); //Throws error -> cannot reassign constant