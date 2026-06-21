// const tinder = new Object()  // this is a singleton object

 const tinder =  {}  // this is not a singleton object

 tinder.id ="123abc"
 tinder.name = "sunny"
 tinder.isLoggedIn = false
console.log(tinder);

const regularUser = {
    email: "sum@gamil.com",
    fullName:{
        userfullName:{
            firstName: "Chaitnaya",
            lastName: "Rayewar"
        }
    }
}

console.log(regularUser.fullName.userfullName.firstName);

