const number = parseInt(prompt("Enter Positive Integer: "))
if(number < 0){
    console.log(`Error!! You Entered ${number} Negative Value`)
}
else if(number == 0){
    console.log(`Error!! The Entered ${number} value is 1`)
}
else{
    let fact = 1;
    for(i=1; i<=number ; i++){
        fact *= i;
    }
    console.log(`The Factorial of Giver ${number} is ${fact}`)
}
