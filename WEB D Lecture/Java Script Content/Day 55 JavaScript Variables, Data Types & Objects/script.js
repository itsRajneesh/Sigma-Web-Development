console.log("Welcome to Day 55 of Sigma Web Development Course")
console.log("Welcome to Day 55 of Sigma Web Development Course Day 55")

// Use let intsted of var because var is global level language
var ab =  5;
// var b = 10;
// console.log(a+b)

let a =  5;
let b = 10;
let c =  "Raj"
let d = undefined
let e = true
let f = null
console.log(a+b)
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f)

// Example of Block Scope Level Variable (let)

{
    let a = 54;
    console.log(a)
    console.log(b)
}
console.log(ab)

let o = {
    "Name":"Rajneesh",
    "Student ID":"0221CS141",
    "College Name":"NIET"
}
console.log(o)
o.Branch = "Compter Science"
console.log(o)