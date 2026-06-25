    // GET REQUEST 

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json(); // object  JSON.parse
//     })
//     .then(data => {
//         console.log('Users:', data);
//         data.forEach(user => {
//             console.log(`${user.name} - ${user.email}`);
//         });
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });

// POST/PUT/PATCH
const newUser = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890'
}; //object

fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser) // converts object to jsonstring
})
.then(response => response.json()) 
.then(data => {
    console.log('Created user:', data); //
})
.catch(error => {
    console.error('Error creating user:', error);
});


//DELETE
fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser) // converts object to jsonstring
})
.then(response => response.json()) 
.then(data => {
    console.log('Created user:', data); //
})
.catch(error => {
    console.error('Error creating user:', error);
});
