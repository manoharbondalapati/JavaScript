//named exports
import {name,age} from "./index.js";
let result= "name is " +name+  " , age is " +age;
console.log(result);
import {add} from "./index.js";
console.log(add(9,8));


//defualt
// const message=()=>
// {
//     const name ="jessie";
//     const age=24;
//     return name +'  is '+ age +' years old';
// };
// export default message ;

// const message ={"hello,world!":"string"};
// export default message;

// const value1 = 10;
// const value2 = 20;

// export default { value1, value2 };
