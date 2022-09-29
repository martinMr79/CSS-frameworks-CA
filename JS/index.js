const apiUrl = "https://nf-api.onrender.com/api/v1/books"

/**
 * API Call
 * @param {*} url Noroff api URL
 * @param {*} userData User Data
 */

async function getUserData(url, userData) {
    const response = await fetch(apiUrl);
    const getData = await response.json(); 
    console.log(getData); 
}

getUserData()

/*User data*/





/*
let emailArray=[]; 
let passwordArray=[]; 

function newUser(){
   
}
*/

