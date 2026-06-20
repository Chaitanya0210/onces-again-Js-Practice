// primitive

// 7 types :  String, Number, Boolean , null , undefined , symbol  , BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);


// Reference (Non primmitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doha"];
let myObj ={
    name: "Chaitanya",
    age: 21
}

const myFunction  = function() {
    console.log("This is  my Function");
}

