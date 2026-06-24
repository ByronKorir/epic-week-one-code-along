console.log("===== FUNCTIONS ====")

// function functionName (parameters){
//     // write the code to execute
//     // return (optional)
// }
let a = 5
let b = 4

function add(a,b){
    let sum = a+b
    console.log(sum)
}

add(a,b)
// add(2,10, 10)

// // function for greatings
// function hello(name){
// console.log(`Hello ${name}  welcome to today's session.`) // string interpolation

// }
// hello()
// hello("Jane")

// let i = "Monday"

// let message1 = `Today is ${i}`  //string interpolation

// console.log(message1)

function multiply(c,d){
    let product = c * d
    
    return product // optional
}

const product = multiply(2,3) //6
console.log(product)

const product2 = multiply(3,3) //9
console.log(product2)


console.log("=== multiple parameters ===")
function createUser(firstName, lastName, age, email) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email,
        fullName: `${firstName} ${lastName}`
    };
}
 
const user = createUser("Byron", "Korir", 25 , "email@example.com")
console.log(user)

// Function expression
const multiply2 = function(a, b) {
    return a * b;
    // 
};

console.log(multiply2(4,5)) // 20

console.log("=== ARROW functions")
// function for greatings
// function hello(name){
// console.log(`Hello ${name}  welcome to today's session.`) // string interpolation

// }
//
// const helloArrow = (name) => {
//     let message = `Hello ${name}  welcome to today's session. From Arrow function`
//     return message 
// }
// console.log(helloArrow("David"))

// const helloArrow = (name) =>  `Hello ${name}  welcome to today's session. From Arrow function`

// console.log(helloArrow("David"))

console.log("===== ARROW FUNCTIONS WITH ARRAY METHODS =====")
let numbers = [1, 2, 3, 4, 5];

// Map - transform array
let doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Map - transform array
let squared = numbers.map(n => n ** 2);
console.log(squared); // [1, 4, 9, 16, 25 ]

// Filter - filter array
let evenNumbers = numbers.filter(n => n % 2 === 0); // divide by 2  // search feature
console.log(evenNumbers); // [2, 4]

// Reduce - accumulate values
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

let productAray = numbers.reduce((acc,curr) => acc * curr, 1)
console.log(productAray)

console.log("=== default parameters =====")
// function for greatings
function hello(name = "Guest"){
console.log(`Hello ${name},  welcome to today's session.`) // string interpolation

}
hello()
hello("Jane")

console.log('=== destructuring ===')
function displayUser({name,age,city,contact}) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}, Phone: ${contact.phone}`);
}

const user1 = { name: "Alice", age: 30, city: "New York",contact: {phone:"+254234567"} };
displayUser(user1);


console.log('=== scope ===')
let outsideVariable = 2;
function testScopeFunction(){
    let firstName = "Byron"
    console.log(firstName)
    console.log(outsideVariable)
    
}
let firstName = testScopeFunction()
console.log(firstName, "Outside the function")
testScopeFunction()

