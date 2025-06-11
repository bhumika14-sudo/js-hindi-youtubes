// singleton
//Object.create //this is the constructor metthod in which singleton formed 

//object literals
// in object we defined keys and values both

const mySym = Symbol("key1")


const JsUser = {
    "name" : "bhumika",
    "full name" : "bhumika goyal",   //chsnce hi nhii h isko dot se access kr paye
    "age" : 18,
    "mySym" : "myKey1", //isko hm direct nhi kr skte h //when we refer is as symbol do key = [mySym] like this 
    "location" : "delhi",
    "email": "bhumika@gamail.com",
    "isLoggedIn" : false,
    "lastLoginDays" : ["Monday","Saturday"]
}    

    // access object
    console.log(JsUser.email)
    console.log(JsUser["email"])  // shi tarika nhi h 
    //console.log(JsUser.full name) //error and double qoutes m likh nhi skte 
    console.log(JsUser["full name"])
    console.log(JsUser.mySym)  //ye symbol ki trh use nhi hota h ise 
    console.log(typeof JsUser.mySym) //op=string, exp op=symbol
    //solution is 
    console.log(JsUser["mySym"])

    //change the values
    JsUser.email = "bhumika1402@gmail.com"
    // Object.freeze(JsUser)
    JsUser.email = "bhumika@gogle.com"
    console.log(JsUser)

    JsUser.greeting = function(){
        console.log("Hello Js user")
    }
    console.log(JsUser.greeting) //op= undefined or function
    console.log(JsUser.greeting()) //Hello Js user

    //refrence to same object 

    JsUser.greetingtwo = function(){
        console.log(`Hello Js user , ${this.name}`)
    }
    console.log(JsUser.greetingtwo())


















 
