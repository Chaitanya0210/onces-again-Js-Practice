// let myName = "Chaitanya   "

// console.log(myName.truelength);



let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(this.spiderman);
    }
}

Object.prototype.chaitanya = function(){
    console.log("chaitanya is present in all objects");
}

Array.prototype.heychaitanya = function(){
    console.log("chaitanya says hello");
}

heroPower.chaitanya()

myHeros.chaitanya()

myHeros.heychaitanya()

// heroPower.heychaitanya()

// inheritance

const Usser = {
    username: "chaitanya"
}

const Teacher ={
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = Usser

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUserName = "chaitanya   "

String.prototype.truelength = function(){
    return this.trim().length
}

const len = anotherUserName.truelength()
console.log(len);

console.log('Rayewar'.truelength());