const user = {
    username: "Chaitanya",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

function User(username, loginCount, isLoggeddIN){
    this.username = username
    this.loginCount = loginCount
    this.isLoggeddIN = isLoggeddIN 
}

const userone = new User("Chaitanya", 12 , true)

const usertwo = new User("Rayewar", 12, false)

console.log(userone);
console.log(usertwo);

