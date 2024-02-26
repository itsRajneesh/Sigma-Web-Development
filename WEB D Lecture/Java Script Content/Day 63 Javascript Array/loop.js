// For Loop Array :- Call a Function once for each array Element
// Array1 = [1,2,3,4,5,6]

// for (let index = 0; index < Array.length; index++) {
//     const element = Array[index];
//     console.log(Array)
// }

// For-Each-Loop
// Array1.forEach((index,value,Array1) => {
//     console.log(index,value,Array1)
// });

// For in Loop 
// let Array2={
//     Student1Marks: 100,
//     Student2Marks: 98,
//     Student3Marks: 90,
//     Student4Marks: 65
// }
// for (const key in Array2) {
//     if (Object.hasOwnProperty.call(Array2, key)) {
//         const element = Array2[key];
//         console.log(key,":", element)
//     }
// }

// For of loop
Array3=[1,5,4,6,1,8]
for (const iterator of Array3) {
    console.log(iterator)
}
