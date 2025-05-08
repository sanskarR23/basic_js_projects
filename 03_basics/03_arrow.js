const user ={
  username: "sanskar",
  price: 999,

  welcomeMessage: function(){
    console.log(`${this.username}, welcome to the website`);
    console.log(this);
  }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai (){
//   let username = "sanskar"
//   console.log(this.username);
// }
// chai()


const chai = () =>{

  let username = "sanskar"
  console.log(this);
}
// chai ()


                                                       /* GENERAL CODE */

// const addTwo = (num1,num2) => {
//   return (num1 + num2)
// }
// console.log(addTwo(3,4)) 

                                                      /* IMPLISITE CODE */

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

//[NOTE:- bina {} ke general code hum ese hi likh skhte h .]

const addTwo = (num1, num2) => ({username: "sanskar"})  

// [NOTE :- agr obj h to {} se hi hoga nh to nh hoga]


console.log(addTwo(3,3))                                                      