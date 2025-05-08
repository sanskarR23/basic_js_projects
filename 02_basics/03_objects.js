// ------------------------ singleton ------------------------------//

   /* objest literals */

const mySym = Symbol("key1")
const JsUser = {
  name: "Sanskar",
  "full name": "Sanskar Rathore",
  age: 20,
  [mySym]: "mykey1",
  location: "Indore",
  email: "12234@gmail.com",
  isLoggedIn: false,
  LastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

JsUser.email = "5433@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "598765@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
  console.log(" Hello JS User");
}
JsUser.greetingTwo = function(){
  console.log('Hello JS User,${this.name}');
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())






