//primitve datatypess

// 7 types : string , number , boolean , null , undefined ,
//  symbol , BigInt

const score = 100
const scoreValue = 100.3
const isLogeedIn = false
const outsideTemp = null
let userEmail;
// const id = symbol('123')
// const anotherId = symbol("123")

// console.log(id===anotherId);

const bigNumber = 53781621956107682463879n

console.log(score)
console.log(scoreValue)
console.log(isLoggedIn)
console.log(outsideTemp)
console.log(userEmail)
// console.log(id)
// console.log(anotherId)

// Reference (Non Primitive)

// Array, Object, Functions

// Array
const heors = ["shaktiman","naagraj"," doga"]

// Object
let myObj = {
    name : "bhumika",
    age : 18
}

// Functions
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction)

// +++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) , Heap (Non-Primitive)

let myName = "bhumika"
let anotherName = myName 
console.log(anotherName)
anotherName = "raghav" 
console.log(myName)


//let userOne(stack) = (heap){
  //  email : "user@gmail.com",
  //  upi : "user@ybl" }

  let userOne = userTwo
  userTwo.email = "bhumika@gmail.com"

  console.log(userOne.email)
  console.log(userTwo.email)

  //dono m value bhumika wali hi aygi kyuki  value heap m store hui h Non-Primitive datatype 








