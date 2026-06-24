function mulltiplyBy5(num){
    return num*5
}

mulltiplyBy5.power = 2

console.log(mulltiplyBy5(5));
console.log(mulltiplyBy5.power);
console.log(mulltiplyBy5.prototype); 

function createUser(username, score){
    this.username = username
    this.score = score
}


createUser.prototype.increment = function(){
    this.score++  
}

createUser.prototype.printMe = function(){
    console.log(this.score);
}

const chai =new createUser("chai",25)
const  tea =new createUser("Tea",250)

chai.printMe()