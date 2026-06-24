const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chaitanya = {
    name: 'Ginger Tea',
    price: 250,
    isAvailable:  true
}

console.log(Object.getOwnPropertyDescriptor(chaitanya, "name"));

// Object.defineProperty(chaitanya,'name',{
//     writable: false,
//     enumerable: false
// })

for (let [key, value] of Object.entries(chaitanya)) {
        console.log(key, value);
}