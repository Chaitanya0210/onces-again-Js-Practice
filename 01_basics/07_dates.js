let myDate = new Date()
console.log(myDate);   
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

let myCreatedDate = new Date(2026,6,6)
console.log(myCreatedDate.toLocaleString());


let myCreatedDate1 = new Date("06-21-2026")


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate1.getTime());