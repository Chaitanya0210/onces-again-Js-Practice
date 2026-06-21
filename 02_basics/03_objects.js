// singeleton
//object.create 

// object literals

const  mySym = Symbol("mykey1")

const jsUser = {
    name: "Chaitanya",
    "fullName": "Chaitanya Rayewar",
    [mySym]: "key1",
    age: 21,
    email: "rayewarchaitanya@gamil.com",
    location: "Nanded",
    isLoggedIn:  false,
    lastLoginDays: ["Monday", "saturday"],
    greeting3: function(){
        console.log("Hello sir!!");
    }
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["fullName"]);
console.log(jsUser[mySym]);

jsUser.email = "chaitanya@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "india@gamil.com"
console.log(jsUser);


jsUser.greeting = function(){
    console.log("Ram Ram");
}

console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(this.name);
}

console.log(jsUser.greeting2());

console.log(jsUser.greeting3());