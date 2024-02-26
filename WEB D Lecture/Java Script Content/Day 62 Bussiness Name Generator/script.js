/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

let Adjectives = {
    1:"Crazy",
    2: "Amazing",
    3:"Fire "
}

let Shop_Name = {
    1:"Engine",
    2:"Foods",
    3:"Garments"
}
let AnotherName = {
    1:"Bros",
    2:"Limited",
    3:"Hub"
}

let a = Math.ceil(Math.random())
let b = Math.ceil(Math.random())
let c = Math.ceil(Math.random())

console.log(`${Adjectives[a]} ${Shop_Name[b]} ${AnotherName[c]}`)