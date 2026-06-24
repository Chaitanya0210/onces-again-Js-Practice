class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(this.username);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email =  email
        this.password = password
    }

    addCourse(){
        console.log(this.username);
    }
}

const newuser = new Teacher("Chaitanya", "rayewarchaitanya@gmail.com", "123");

newuser.addCourse();