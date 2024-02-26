let rand = Math.random()
let First, Second, Third;

// #lets Create A First Adjective Word
if (rand<0.33){
    First="Crazy"
}
if (rand<0.66 && rand>=0.33){
    First="Amazing"
}
if (rand<0.33){
    First="Fire"
}
// #lets Create A Second Shop_Word 
Math.random()
if (rand<0.33){
    Second="Engine"
}
if (rand<0.66 && rand>=0.33){
    Second="Garment"
}
if (rand<0.33){
    Second="hub"
}
// #lets Create A Third Another Word
Math.random()
if (rand<0.33){
    Third="Bros"
}
if (rand<0.66 && rand>=0.33){
    Third="Limited"
}
if (rand<0.33){
    Third="Hub"
}
console.log(`${First} ${Second} ${Third}`)