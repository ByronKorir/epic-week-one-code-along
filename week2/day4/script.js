// STUDENT REGISTRATION SYSTEM

// store student in an ARRAY
let students = [] // [{name:"david", email:"exampls@email.com"}]

// ELements
const form = document.getElementById('registrationForm')
const inputName = document.getElementById('studentName')
const inputEmail = document.getElementById('studentEmail')
const inputAge = document.getElementById('studentAge')
const inputCourse = document.getElementById('studentCourse')
const inputGrade = document.getElementById('studentGrade')
const messageDiv = document.getElementById('message')
const studentsList = document.getElementById('studentList')

//handle submit
form.addEventListener('submit', function(event){
    event.preventDefault() // prevents refreshing

    // name, email, age, course, grade
    const name = inputName.value.trim() 
    const email = inputEmail.value.trim() 
    const age = inputAge.value.trim() 
    const course = inputCourse.value.trim() 
    const grade = inputGrade.value.trim() 
    // console.log(name,email, age, course, grade)
    // validate name
    if(!validateName(name)){
        showMessage("Invalid name", "error")
    }
    //validate email 
     if(!validateEmail(email)){
        showMessage("Invalid email", "error")
    }
    //validate age
    if(!validateAge(age)){
        showMessage("Invalid Age", "error")
    }
    //store
    addStudent(name,email,age,course,grade)
    form.reset()

})


// helper function
function validateName(name){
let is_valid = name.length >=2 && name.length <= 30; //true or false
return is_valid //true or false
}

function validateAge(age){
    return !isNaN(age) && age >= 5 && age <= 90;
}

function validateEmail(email){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email) //true or false
}

function showMessage(message, type = "success"){
    messageDiv.innerHTML = `<div class="${type}"> ${message}</div>`
    setTimeout(() => {
        //code
        messageDiv.innerHTML = ``
    }, 5000 // 5 seconds

    )
    
}

function editStudent(id){
    //edit
    console.log(`Editing: ${id}`)
    const student = students.find(s => s.id === id); //
    
    if (!student) return; //terminate procaess

    const newName = prompt('Enter new name:', student.name);
    if (newName && validateName(newName)) {
        student.name = newName.trim();
    }

    const newEmail = prompt('Enter new email:', student.email);
    if (newEmail && validateEmail(newEmail)) {
        student.email = newEmail;
    }

    const newAge = prompt('Enter new age:', student.age);
    if (newAge && validateAge(parseInt(newAge))) {
        student.age = parseInt(newAge);
    }

    const newCourse = prompt('Enter new course:', student.course);
    if (newCourse) {
        student.course = newCourse.toLowerCase();
    }

    const newGrade = prompt('Enter new grade:', student.grade);
    if (newGrade) {
        student.grade = newGrade.toLowerCase();
    }

    dispalyStudents();
    showMessage('✏️ Student information updated!', "success");


}
function deleteStudent(id){
    //edit
    console.log(`Delete: ${id}`)
    const student = students.find(s => s.id === id)//
    if (!student) {
        showMessage("Student not found","error")
        return
    }
    if(confirm('Are you sure you want to delete this student?')){
   
    let filteredStudents = students.filter(s => s.id !== id) // everything without id
    students = filteredStudents;
    dispalyStudents()
    showMessage("Student deleted successfully")
    }


}

// add students
function addStudent(name, email, age, course, grade){
    const student = {
        name,email,age,course,grade,id : Date.now(), registeredAt : new Date().toLocaleDateString()
    }
    console.log(student)
    students.push(student)
    console.log(students)
    showMessage("Student registered successfully", "success")
    dispalyStudents()
}

// display students
function dispalyStudents(){
    console.log(students)
    // if we have students in the array
    if (students.length === 0){
        console.log("No students registered!")
        studentsList.innerHTML = '<h3>No students registered!</h3>'
        return  //do not proceed
    }
    // innerHTML
    let html = `
                    <h2> Registered Students </h2>
                 `
    
                // loop through the array and display all the students in html
    students.forEach((student) => {
// {
//     "name": "David",
//     "email": "software@epicacademy.ke",
//     "age": "23",
//     "course": "javascript",
//     "grade": "freshman",
//     "id": 1782405950841,
//     "registeredAt": "6/25/2026"
// }
        html += `  <div class="student-item">
        <h3>${student.name}</h3>
        <p>ID: ${student.id}</p>
        <p>Email: ${student.email}</p>
        <p>Age: ${student.age}</p>
        <p>Course: ${student.course}</p>
        <p>Grade: ${student.grade}</p>
        <div class="actions">
        <button onclick="editStudent(${student.id})"> Edit</button>
        <button onclick="deleteStudent(${student.id})"> Delete</button>

        </div>

                    </div>
                `
    })
studentsList.innerHTML = html

    
}
