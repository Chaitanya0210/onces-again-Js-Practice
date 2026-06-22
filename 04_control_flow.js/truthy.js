const userEmail = "rayewarchaitnaya@gmai.com"

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined , NaN

// truthy values
//  "0" , 'false', " " , [] , {} , function(){}

// NUllish coalescing Operator (??): null undefined

let val1;
val1 = null ?? 10

console.log(val1);


// Ternaiary operator

// condition  ? true : flase

const iceTeaPrice = 100

iceTeaPrice <=80 ? console.log("Less than equal to 80") : console.log("greater than 80")