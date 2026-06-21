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


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = Object.assign(obj1,obj2)
const obj3 ={...obj1,...obj2}
console.log(obj3); 

const course ={
    courseName: "Js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor} = course

console.log(courseInstructor);



