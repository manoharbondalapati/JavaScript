// JSON Fake API server

fetch("https://jsonplaceholder.typicode.com/todos")
.then((response)=>response.json())//convert into JSON 
.then((data)=>console.log(data));//get the data


//using old method
// let oldmethod= new XMLHttpRequest();
// oldmethod.open("GET","https://jsonplaceholder.typicode.com/todos");
// oldmethod.send();
// oldmethod.onload=function()
// {
//     if(oldmethod.status !=200)
//     {
//         console.log("Error");
//     }
//     else
//     {
//         console.log(oldmethod.response);
//     }
// };