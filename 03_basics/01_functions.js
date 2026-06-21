function speakName(){
    console.log("Chaitanya");
}

speakName() 

function sum(num1,num2){
    console.log(num1+num2);
}

sum(3,4)


function returnSum(num1,num2){
    return (num1+num2)
}

const result = returnSum(4,5)

console.log(result);

function loginUserMessage(username="sam"){  // here sam is the default value to the parameter  , used when no arguement is passed
    return (`${username} just logged in`)
}

console.log(loginUserMessage("Chaitanya"));


function calculatePrice(...num){
    return num
}

console.log(calculatePrice(200,300,400));

const user = {
    username: "Chaitanya",
    price: 999,
}

function handelObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handelObject(user)

const arr = [1,2,3,4,5]

function name(arr){
    return arr[1]
}

console.log(name(arr));