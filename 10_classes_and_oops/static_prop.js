class User {
    constructor(username){
        this.username = username
    }


    logMe(){
        console.log(this.username);
    }

    static createId(){
        return '123'
    }
}

const chaitnaya = new User("Chaitanya")
console.log(chaitnaya.createId());