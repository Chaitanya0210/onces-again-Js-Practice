const promise1 = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promise1.then(function(){
    console.log('Promise Consumed')
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "rayewarchaitanya@gmail.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
})

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
    let error = true
    if(!error){
        resolve({username: "chaitanya", password: "123"})
    }
    else{
        reject('ERROR: something went wrong')
    }
    },2000)
})

promise4.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})


const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript" ,password: "123"})
        }
        else{
            reject('ERROR: Js went wrong')
        }
    },1000)
})

async function consumePromise5(){
    try{
        const response = await promise5
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromise5()


async function getApi(){
    try{
    const response = await fetch ('https://jsonplaceholder.typicode.com/users')

    const data = await response.json()
    console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

getApi()