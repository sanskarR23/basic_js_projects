// function mulTwoNumbers(num1 ,num2){
//   console.log(num1 * num2)
// }
function mulTwoNumbers(num1 ,num2){

  // let result= num1*num2;
 // return result;

return num1*num2
}

const result = mulTwoNumbers(3,4)
// console.log("Result: ",result)




function loginUserMessage(username = "sam"){
  if(!username){
    console.log("Please enter a username")
    return
  }
  return '${username} just logged in'
}
// console.log(loginnUserMessage('sanskar'))
// console.log(loginUserMessage())


function calculateCartPrice(val1,val2,...num1){
  return num1
}
// console.log(calculateCartPrice(2,3,4.1))

const user = {
  username: "sanskar",
  price: 199
}
function handleObject(anyobject){
  console.log('Username is ${anyobject.username} and price is ${anyobject.price}');
}
// handleObject(user)
handleObject({
  username: "sam",
  price: 399
})


const myNewArray = [200,4000,100,600]
function returnSecondValue(getarray){
  return getarray[1]
}
console.log(returnSecondValue(myNewArray))