const marvel_heros  = ["thor" , "Ironman" , "spiderman"]
const dc_heros = ["superman", "flash",  "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const alll = marvel_heros.concat(dc_heros)
console.log(alll);

// spread operator
const allheros = [...marvel_heros, ...dc_heros]
console.log(allheros);

const another = [1,2,3,[4,5,6],7,[8,9,[10,11]]]

const real_another_array = another.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Chaitanya"));
console.log(Array.from("Chaitanya"));
console.log(Array.from({name: "chaitanya"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));