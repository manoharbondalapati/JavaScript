// try
// {
//     addlert("welcome guest");
// }
// catch(err)
// {
//     console.log(err.message);
// }

// try
// {
//     let i=10;
//     gjdgjljglj;
//     console.log(i);
// }
// catch
// {
//     console.log("heyyyy");
// }
  

// try
// {  

//     let x="h";

//    if(x.trim == "") throw "empty";
//    if(isNaN(x)) throw  new RangeError("not a number");
//    x=Number(x);
//    if(x<5) throw "too low";
//    if(x>10) throw "too high";
// }
// catch(error)
// {
//     console.log(error);
//     console.log(error.message);
//     console.log(error.name);
//     console.log(error.stack);
// }
// finally
// {
//     console.log("input is ok");
// }


//modules 
//1.Named Exports 2.Default Exports
 export const name ="blessy";
 export const age=23;
 //or
//  const name ="blessy";
//  const age =23;
//  export{name,age};
//named export

export function add(a,b)
{
    return a+b;
}




//2.defulat

// import message from "./file.js";
// console.log(message());

// import message  from "./file.js";
// console.log(message);//defult

// import  mydefault from "./file.js";
// console.log(mydefault);



