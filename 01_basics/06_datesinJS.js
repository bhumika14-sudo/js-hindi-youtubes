let myDate = new Date()
console.log(myDate)
console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023,0,23,5,3)
let myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Date.now()) //in miliseconds
console.log(Date.now()/1000) //in seconds
console.log(Math.floor(Date.now()/1000)) // compare small values

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

`${newDate.getDay()} and the time`

newDate.toLocaleString('Default',{
       weekday:"long"
})














