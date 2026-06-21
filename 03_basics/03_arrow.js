const user = {
    username: "Chaitanya",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}

console.log(user.welcomeMessage());

console.log(this);

// in console of browser(this) refers to the window , as there the current context is window

// function chai(){
//     console.log(this);
// }

// chai()


const chai = ()=>{
    let username="Chaitanya"
    console.log(this);
}

chai()


const addtwo = (num1,num2) => (num1+num2)


console.log(addtwo(3,5));

const objectreturn = () =>({ussername: "Chaitnaya"})

