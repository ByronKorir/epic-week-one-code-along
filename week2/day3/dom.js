
// DOMContentLoaded - DOM ready, before images
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM ready!");




console.log("====== GET ELEMENT BY ID =====")

const header = document.getElementById("second")
console.log(header.textContent)

console.log("====== GET ELEMENT BY Class =====")
let paragraph = document.getElementsByClassName("p1")
console.log(paragraph[0].textContent) //[]


console.log("====== GET ELEMENT BY TagName =====")
let paragraphByTag = document.getElementsByTagName("p")// h1,h2, div, footer, header, main,section
console.log(paragraphByTag[0].textContent) //3


console.log("====== GET ELEMENT BY querySelector =====")
let heading1 = document.querySelector("#second")
console.log(heading1.textContent)

let paragraphs = document.querySelector(".p1") // returns the first
console.log(paragraphs)

let button = document.querySelector("button") // using tag
console.log(button)


let cardTitle = document.querySelector(".card .title");
console.log(cardTitle)
let navLink = document.querySelector("div a");
console.log(navLink.textContent)


console.log("====== UPDATE ELEMENTS =====")

let heading3 = document.querySelector("#heading")
heading3.textContent = "NEW HEADING"
console.log(heading1.textContent)


let heading4 = document.querySelector("#second")
heading4.innerHTML = "<p>This is a new dynamic paragraph! </p>"
console.log(heading1.textContent)


console.log("====== ADD CONTENT ELEMENTS =====")
let newDiv = document.createElement("div")
let newTitle = document.createElement("h3")

// content 
newTitle.textContent = "New card added"

//classname
newDiv.className = "card-container"
newTitle.classList.add("card","card-title")

// id 
newDiv.id = "newDiv"

// apply/ apend
document.body.appendChild(newDiv)
newDiv.appendChild(newTitle)

});