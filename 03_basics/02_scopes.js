if(true){
    let a = 10
    const b = 20
    var c = 30 // this gets printed , as it does not follows scope boundaries
}

// console.log(a);
// console.log(b);
// console.log(c);

// IMP POINT => global scope in (NODE.JS) environment ans in (CONSOLE) of browser is different


function one(){
    const username = "Chaitanya"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two();
    
}

//  one()

if(true){
    const username =  "Chaitanya"
    if(username==="Chaitanya"){
        const website = " youtube"
        console.log(username +  website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++++ intresting +++++++++++++++++++++
console.log(addone(5));
function addone(num){ //  if function is declared in such methoed it can be accessed before hand also
    return ++num
}

// addtwo(5)  // this will through error

const addtwo = function(num){ // in this type  of function declaration we have to call afterwards only 
    return num+2
}

addtwo(5);