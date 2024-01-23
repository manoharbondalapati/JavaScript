//call stcak synchronous sequence
console.log("first");
console.log("second");
console.log("third");

function abc()
{
    cde();
    console.log("abc");
    function cde()
    {
        console.log("cde");
    }
}
abc();// so we use asynchrous call stack using settimeout and wait 


//call stack asynchronous 
//settimeout
const mytimeout =setTimeout(myGreeting,5000);
function myGreeting()
{
    console.log("Happy Bithday!!");

}

setTimeout(function(){myFunc("param1","param2")},5000);
function myFunc(p1,p2)
{
    console.log("parameters="+p1+","+p2);
}

//anonymous function
setTimeout(function(){mygreetinh("Happy Birthday!!")},4000);
function  mygreetinh(str)
{
    console.log(str);
}
 
//arrow function
setTimeout(()=>{console.log("1Happy Birthday!!")},2000);


//settimeinterval
// const element=setInterval(mygreeting,1000);
// function mygreeting()
// {
//     console.log( "Happy Birthday!!");
// }

// setInterval(mytimer,1000);
// function mytimer()
// {
   
//     const date =new Date();
//     console.log(date);
// }

//arrow function
//setInterval(()=>{console.log("Hello!!")},2000);


//callback function examples
function myDisplayer(some) {
    console.log(some);
  }
  
  function myCalculator(num1, num2, my) {
    let sum = num1 + num2;
    my(sum);
  }
  
  myCalculator(5, 5, myDisplayer);

function fetchData(callback) {
   // Simulating an asynchronous operation (e.g., fetching data from a server)
   setTimeout(function() {
       const data = "Some fetched data";
       callback(data); // Execute the callback function with the fetched data
    }, 1000); // Simulating a delay of 1 second
}

function processData(data) {
   console.log("Processing data:", data);
}

//Using the fetchData function with a callback
fetchData(processData);


//promise Object
//a promise containes both the producing code and calls to the consuming code

let promises =new Promise(function(resolve,reject)
{
    let i=10;
    if(i==10)
    {
        resolve("good");
    }
    else
    {
        reject("bad");
    }
   
});
promises
// .then((msg)=>console.log(msg))
// .catch((error)=>console.log(error));



function myDisplayer(some) {
   console.log(some);
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // The producing code (this may take some time)
  
    if (x == 10) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
