if(true){
    let a = 10
    const b = 20
    var c = 30 // this gets printed , as it does not follows scope boundaries
}

console.log(a);
console.log(b);
console.log(c);

// IMP POINT => global scope in (NODE.JS) environment ans in (CONSOLE) of browser is different
