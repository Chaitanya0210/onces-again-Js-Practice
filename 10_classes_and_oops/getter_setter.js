class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }


    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value.toUpperCase()
    }


    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const chaitanya = new User("rayewarchaitanya@gmail.com", "abc")
console.log(chaitanya.email);