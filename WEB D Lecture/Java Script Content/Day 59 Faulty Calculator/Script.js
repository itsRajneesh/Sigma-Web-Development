// + ---> -
// * ---> +
// - ---> /
// / ---> **
let a = Number(prompt("Enter your First Number Here: "))
let b = Number(prompt("Enter your Second Number Here: "))
let Operation = Number(prompt("Choose Whatever Operation you want to perform: "))
let random=Math.random()

let Additon = a+b;
let Subtraction = a-b;
let Multiplication = a*b;
let Divison = a/b;
let Exponent = a**b;

if (random > 0.1){
    console.log("The Addition of ",a,"And ",b,"is : ",Additon)
    console.log("The Subtraction of ",a,"And ",b,"is : ",Subtraction)
    console.log("The Multiplication of ",a,"And ",b,"is : ",Multiplication)
    console.log("The Division of ",a,"And ",b,"is : ",Divison)
    console.log("Here We Are Using The Concept of Regular Calculator")
}
else{
    console.log("The Addition of ",a,"And ",b,"is : ",Subtraction)
    console.log("The Subtraction of ",a,"And ",b,"is : ",Divison)
    console.log("The Multiplication of ",a,"And ",b,"is : ",Additon)
    console.log("The Division of ",a,"And ",b,"is : ",Exponent)
    console.log("Here We Are Using The Concept of Faulty Calculator")
}
