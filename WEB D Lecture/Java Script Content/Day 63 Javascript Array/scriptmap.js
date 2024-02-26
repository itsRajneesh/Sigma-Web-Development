Array5=[65,2,5,654,6851]
// let newArray = []
// for (let index = 0; index < Array5.length; index++) {
//     const element = Array5[index];
//     newArray.push(element**2)
// }
// console.log(Array5,newArray)

let newArr = Array5.map((e, index, array)=>{
    return e**2
})
console.log(newArr)

const greaterthenSeven = (e)=>{
    if(e>7){
        return true
    }
    return false;
}
console.log(Array5.filter(greaterthenSeven))

// Reduce Array 
Array6=[45,5,10,20,20]
const red = (a,b)=>{
    return a+b
}
console.log(Array6.reduce(red))