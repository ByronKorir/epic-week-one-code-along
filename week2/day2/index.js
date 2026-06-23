
// if statement 
let age =28
if (age < 18){
    // console.log("You are an adult")
}

// if-else statement 
if (age < 18){
    // console.log("You are an adult")
} else {
    // console.log("Still child")    
}

// nested if 
let hasLicense = false
if (age >= 18){
    if(hasLicense){
        console.log("you may drive")
    } else{
        console.log("You need a license to drive")
    }

} else {
    console.log("Too young to drive")    
}

// else - if statement 
console.log("============ ELSE IF STATEMENT =================")
let marks = 44
let grade;
console.log(grade)
if (marks >= 80){
    grade = "A"
} else if(marks >= 70){
grade = "B"
}else if(marks >= 50){
grade = "PASS"
}else {
grade = "FAIL"
}

console.log(marks, grade)

// switch
console.log("============ switch STATEMENT =================")

switch (marks){
    case 80:
        // code should execute
        grade = "A"
        break;
    case 50:
        // execute
        grade = "PASS"
        break;
    default:
        // last resort
        "FAIL"
}


console.log(marks, grade)

console.log("============ Ternary Operator(else-if statement shortcut) =================")
let isLoggedIn = true
isLoggedIn ? console.log("You are logged in") : console.log("You are not logged in")

marks = -99
// nested
marks >= 80 ? console.log("A") : marks >= 50 ? console.log("PASS") : marks < 0 ? console.log("Invalid") : console.log("fail")

if (marks >= 80){
    console.log("A")
}else if(marks >= 50 ){
    console.log("PASS")
} else if (marks < 0){
    console.log("Invalid")
} else {
    console.log("FAIL")
}

// LOOPS 
console.log("===== LOOPS =====")
// for 
// for (initialization; condition; increment/decrease){
//     // code to repeat
// }
// count from 10 to 0 
// for (let i = 10; i > 0; i -= 1){
//     console.log(i)
// }
// Sum of numbers
let sum = 0;
for (let i = 1; i <= 100; i += 2 ) {
    sum += i;
}
console.log(`Sum of 1 to 100 is: ${sum}`);

//  While Loop
console.log("====  While Loop ====")

// while (condition) {
//     // code to repeat
// }
// count from 1 to 10 
let count = 1
while (count <=10) {

    // console.log(count)
    count +=1
    // console.log(count)
}


console.log("====  do-While Loop ====")
let j = 1 
do {
    console.log(j)
    j+=1
} while(j <= 10)


// looping through arrays 
console.log("====  looping through arrays  ====")
const colors = ["Red", "Green", "Blue", "Yellow"] //200

const numbers = []

// console.log(numbers.length)
for (let [index,color] of colors.entries()){
    // console.log(index,color)
}
// console.log(colors[0])
// console.log("the last item",colors[colors.length - 1])
// at() method

// console.log(colors.at(-1))

for (let color of colors){
    console.log(color)
}
console.log("=== forEach method ====")
colors.forEach(function(color,index){
    console.log(color)
})
// let doubled;
// for (let i = 0 ; i < numbers.length; i+=1){
//     doubled = numbers[i] * 2
//     console.log(doubled)
// }

console.log("=== adding items to and array ===")
let names = ["john","jane"]
console.log(names)
names.push("David") // to the end
console.log(names, "added 'David' to the End")

names.unshift("Byron") // to the beginning

console.log(names, "Added 'Byron' To the beginning")


console.log("=== removing items to and array ===")
// from the end
names.pop()
console.log(names, "removed  'David' from the end")
// from the beginning
names.shift() // to the beginning
console.log(names, "removed  'Byron' from beggining")


console.log("From any possition .splice()")
let items = ["A", "B", "C", "D"];

// Remove elements
// items.splice(1, 2); // Remove 2 elements starting at index 1
// console.log(items); // ["A", "D"]

// Insert elements
// items.splice(2, 0, "X", "Y"); // Insert at index 1
// console.log(items); // [ 'A', 'B', 'X', 'Y', 'C', 'D' ]

// Replace elements
items.splice(2, 1, "Z"); // Replace 1 element at index 2
console.log(items); // ["A", "X", "Z", "D"]


console.log("=== finding elements ===")
const fruits = ["orange", "mango", "tomato", "avocado","apple"] // +200
console.log(fruits.indexOf("tomato")) //2
 console.log("filtering")
const apple = fruits.filter(fruit => fruit === "avocado")
console.log(apple)