/*API Call*/

const apiUrl = "https://nf-api.onrender.com/api/v1/books"

/**
 * API Call
 * @param {*} url Noroff api URL
 * @param {*} userData
 * 
 * ```Use this function to get data from the API``` 
 * 
 */

async function getUserData(url, userData) {
    const response = await fetch(apiUrl);
    const getData = await response.json(); 
    console.log(getData); 
}

getUserData()

/*Post User data*/

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    "name": "my_username",                          // Required
    "email": "first.last@stud.noroff.no",           // Required
    "password": "UzI1NiIsInR5cCI",                  // Required
    "avatar": "https://img.service.com/avatar.jpg", // Optional
    "banner": "https://img.service.com/banner.jpg"  // Optional
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
// Logs:
// {
//   id: 101,
//   title: 'foo',
//   body: 'bar',
//   userId: 1
// }



/*
let emailArray=[]; 
let passwordArray=[]; 

function newUser(){
   
}
*/

