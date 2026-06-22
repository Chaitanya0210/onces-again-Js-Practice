const arr = [1,2,3,4,5]


const total = arr.reduce( (accumulator,currval)=>{
    return accumulator+currval
},0)

console.log(total);


// reduce is used to do operations on available array values , and return a reduced value

