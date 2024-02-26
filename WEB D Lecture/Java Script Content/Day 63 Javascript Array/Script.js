// Array are variable which can hold more than values 
Array1=[1,2,3,4,5,6,7,"HELLO",true,false]
console.log(Array1)

// Acessing Value using Index value 

index0 = Array1 [0]
index1 = Array1 [1]
index2 = Array1 [2]
index3 = Array1 [3]
index4 = Array1 [4]
index5 = Array1 [5]
index6 = Array1 [6]
index7 = Array1 [7]
index8 = Array1 [8]
console.log(index0)
console.log(index1)
console.log(index2)
console.log(index3)
console.log(index4)
console.log(index5)
console.log(index6)
console.log(index7)
console.log(index8)

// Finding The Length of Array 
num = Array1.length
console.log(num)

// Changing The Value Of Given Arrays
Array1[5]= "This Array Element Is Changed"
console.log(Array1)

Array1[8]=544
console.log(Array1)


// Data Type of Array
Type = typeof Array1;
console.log(Type)

// Note:- It Return Object 

// Array Methods 

// To String (Convert Array To Strings )
Array2=[1,3,4,4,6,7,34,634]
// Convert = Array2.toString()
// console.log(Convert,"Now Array2 Become'String'")

// Join() (Join All The Array1 using Element using Seperate  ).
Seperated = Array2.join(" And ")
console.log(Seperated,"Now Array2 Become'Seperated'")

// POP() (Remove last element from the Array )
POP = Array2.pop()
console.log(POP,"Now Array2 Last element will be popped out")

// .
// . 
// .
// .
// . 
// .
// .
// . 
// .

// Sort (Used to sort an Array Alphabetically )
Array3=[5,65,1,54,65,89,10,11]
S = Array3.sort()
console.log(S)

// Splice (Used to Add A new iteam in Array )
Array3.splice(0,2 ,55,66)
console.log(Array3)

