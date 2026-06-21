// Immediately Invoked Function Expressions (IIFE)

// ()()

(function chai() {
    // Named iife
    console.log(`DB CONNECTED`);
})(); //semicolon is necessary

((name)=>{
    console.log(`DB CONNECTED TO ${name}`);
})("Chaitanya");



