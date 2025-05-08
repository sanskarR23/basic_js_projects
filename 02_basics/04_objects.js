// const tinderUser = new object() (singleton object)
const tinderUser = {} /* non singleton object */
tinderUser.id = "123abc"
tinderUser.name = "Sammy"

tinderUser.isLogged = false
// console.log(tinderUser)


const regularUser = {
  email: "some@gmaill.com",
  fullname: {
    userfullname: {
      firstname: "sanskar",
      lastname: "rathore"
    }
  }
}
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = { obj1,obj2}
// const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3)

console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
}

// course.price

const {price: rate} = course
console.log(rate)

