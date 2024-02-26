let Random = Math.random()
let First,Second,Third;


if(Random<0.33){
    First="Crazy"
}
else if (Random<0.66 && Random<=0.33){
    First="Amazing"
}
else{
    First="Fire"
}

Random=Math.random()
if(Random<0.33){
    Second="Crazy"
}
else if (Random<0.66 && Random>=0.33){

    Second="Amazing"
}
else{
    Second="Fire"
}

Random=Math.random()
if(Random<0.33){
    Third="Crazy"
}
else if (Random<0.66 && Random<=0.33){
    Third="Amazing"
}
else{   
    Third="Fire"
}

console.log(`${First} ${Second} ${Third}`)