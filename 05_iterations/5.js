// const lang=['js','cpp','py','html','css']

// lang.forEach( function(key){
//     console.log(key);
// } )


// lang.forEach((key)=>{
//     console.log(key);
// } )


// lang.forEach((key,index,arr)=>{
//     console.log(key,index,arr);
// } )

const lang=[
    {
        languageName:"javascript",
        languageFileName:'js'
    },
    {
        languageName:"java",
        languageFileName:'java'
    },
    {
        languageName:"python",
        languageFileName:'py'
    },
]

lang.forEach((item)=>{
    console.log(item.languageFileName);
})