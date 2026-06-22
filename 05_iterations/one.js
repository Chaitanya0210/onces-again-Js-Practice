//  for loop

for(let i=1;i<=10;i++){
    console.log(i);
}

// keywords

// break and continue

// for(let i = 1; i<=20; i++) {
//     if(i == 5){
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${i}`);
// }
for(let i = 1; i<=20; i++) {
    if(i == 5){
        continue
    }
    console.log(`Value of i is ${i}`);
}
