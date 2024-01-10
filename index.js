// add new element into in array 
// method name is push
console.log(`push() mehtod is used to add new items "to end of an array,"`);
  let fruits=["Banana","Orange","Apple"];
console.log(fruits);
console.log("After added new element");
fruits.push("Kiwi");
console.log(fruits);
// remove element at the end 
// method name is pop
console.log(`pop() mehtod is used to remove  items "to end of an array,"`);
let fruits1=["Banana","Orange","Apple","Kiwi"];
console.log(fruits1);
console.log("After remove new element");
fruits1.pop("Kiwi");
console.log(fruits1);
// if add items at start or remove at start  using
// shift and unshift methods.
 console.log(`using unshift() method adding new element at begining of array`);
 let veg=["bringal","Tamato","Drumstick"];
 console.log(veg)
 veg.unshift("Carrot");
 console.log(veg);
 console.log("remove items at begining of array");
 veg.shift();
 console.log(veg);
//  copyWithin() method
console.log("The copyWithin() methodis used to overrites or copy element from one position to paste at another position in an array");
let num=[1,2,4,5,7,9,99];
// console.log(num);
num.copyWithin(5,4);
console.log(num);//doubt
// concat to arrays
// using normal way
console.log("normal way");
let arr2=[[1,2],[9,7],[8,0]];
let  result=[];
for(let i=0;i<arr2.length;i++)
{
    for(j=0;j<arr2[i].length;j++)
    {
   result.push(arr2[i][j]);
}
}
console.log(result);
console.log("using predifend method flat");
let arr=[[1,2],[9,7],[8,0]];
let flat=arr.flat();
console.log(flat);
// array.splice method
console.log("slpice() method is adds or removes arrayemlements ");
let fru=["Banana","Apple","KiWi","mango"];
console.log(fru);
fru.splice(2,1,"Ban","App");// adding at 2 position and delete one element after 2 position
console.log(fru);
fru.splice(2,2);
console.log(fru);
// indexOf()
console.log("it is used to sear a element present in array or not");
let index=[1,25,6,7,9];
let indexof= index.indexOf(7);//give position 
 console.log(indexof);

// var,let,const
console.log(`"var" is can be re intialize and used in block scope`);
console.log(`"let" cannot be re declare and re assign and used in block scope` );
console.log(`it cannot change it can be fixed and we cannot use in loops`);

// arrow function
console.log("it is simple way to uesd same as funtion within one or 2 line of code and for multiple statment we use return statments ");
let add = ()=>console.log("hi i am Manohar");
add();
let add1=(n1,n2)=>(n1+n2);
console.log(add1(2,3));
// for mutliple statements return keyword is used
let add2=(n1,n2)=>{
    if(n1>n2)
    {
        return n1;
    }
    else{
        return n2;
    }
};
console.log(add2(2,8));

// task 2 using of in properties
console.log("for in and for of print even and odd numbers")
let evenarr=[1,5,6,8,9,8];
let even=[];
for(let evens of evenarr)//if give in indexs
{
    if(evens %2===0)
    {
        even.push(evens);//or even.push("even") and else even.push("odds")
    }
}
console.log(even);

let oddarr=[1,5,6,8,9,8];
let odd=[];
for(let odds of oddarr)//if give in  indexs
{
    if(odds %2 != 0)
    {
        odd.push(odds);
    }
}
console.log(odd);


// another type using of 
var array=[1,5,6,8,9,8];

for(let values of array)//if give in indexs
{
    if(values %2===0)
    
       console.log(values +" even")
    
    else
    
        console.log(values +" odd")
    
}

//  using for in
var array=[1,5,6,8,9,8];

for(let i in array)//if give in indexs
{
    if(array[i] %2===0)
    
       console.log(array[i] +" even")//for in  used for properties of an object.
    
    else
    
        console.log(array[i] +" odd")
    
}

   

// Print reverse of array  number
console.log("task3");
var rearr=[1,5,8,9];
console.log(rearr);
 var revers=[];
 for( i=rearr.length-1;i>=0;i--)
 {
    revers.push(rearr[i]);
 }
 console.log(revers);
//  predefined
 console.log("using predefined method");
//  var  rearr=[1,5,8,9];
//  rearr.reverse();
//  console.log(rearr);
console.log(rearr.reverse());

// strings
var rearr=["abc" ,"ghr","jgij","iop"];
console.log(rearr);
//  var revers=[];
 for( i=rearr.length-1;i>=0;i--)
 {
    // revers.push(rearr[i]);
    console.log(rearr[i]);
 }
//  console.log(revers);

// using predefined
console.log("using predefined ");
console.log(rearr.reverse());





// //  task 4\
console.log("task4")
console.log("asending and decending order of numbers");
var numarr=[1,5,7,9,4,9];
console.log(numarr);

for(i=0;i<numarr.length;i++)
{
    for(j=0;j<numarr.length;j++)
    {
        if(numarr[j]>numarr[j+1])
        {
            var swap =numarr[j];
            numarr[j]=numarr[j+1];
            numarr[j+1]=swap;
        }
       
    }

}
console.log("Asending order:",numarr);

for(i=0;i<numarr.length;i++)
{
    for(j=0;j<numarr.length;j++)
    {
        if(numarr[j]<numarr[j+1])
        {
            var swap =numarr[j];
            numarr[j]=numarr[j+1];
            numarr[j+1]=swap;
        }
       
    }

}
console.log("descending order:",numarr);

// task 5
console.log("palindrome")
function isPalindrome(str)

{
   let rev ="";
   for(i=str.length-1;i>=0;i--)
   {
    rev+=str[i];
   }
   if(rev==str)
   {
    console.log("is palindrome",str);
   }
   else
   {
    console.log("is not palindrome",str)
   }
}
isPalindrome("amma");

// // using arrays

var arra =[1,2,5,7,8];
function palinarr(arra1)
{
    for(i=0;i<arra1.length/2;i++)
    {
        if(arra1[i]!==arra1[arra1.length-1-i])
        {
            return 
            {
                Notpalindrome:false,arra1
            }
        }
    }
    return 
    {
        palndrome:true,arra1
    }
}
console.log(palinarr(arra));

// predefined

var arrt=[1,4,6,7,6,4,1];
function pla(arr)
{
    var slice=arrt.slice().reverse();
    return JSON.stringify(arrt)===JSON.stringify(slice)
}
console.log(pla(arrt));



var arr1 =[1,2,5,7,8];
function palinarr(arr)
{
    for(i=0;i<arr.length/2;i++)
    {
        if(arr[i]!==arr[arr.length-1-i])
        {
            return 
            {
                Notpalindrome:false,arr
            }
        }
    }
    return 
    {palndrome:true,arr}
}
console.log(palinarr(arr1));


// console.log("sort an array without predefined");
// function sortArr(array1){
//     for(let i=0;i<array1.length;i++){
        
//         for(let j=0;j<array1.length;j++){
//             if(array1[j]>array1[j+1]){
//                 let temp=array1[j];
//                 array1[j]=array1[j+1];
//                 array1[j+1]=temp;

//         }
//         }
//     }
//     return array1;
// }
// const ar=["banana","Orange","Apple","grapes"];
// let call=sortArr(ar);
// console.log(call);

// console.log("sort an array with predefined");
// function sortArr1(array1){
//     array1.sort();
//     return array1;
// }
// const ar1=[3,1,7,0,4];
// let call1=sortArr1(ar1);
// console.log(call1);


// const arr=["banana","Orange","Apple","grapes"];
// arr.sort(function(a,b){
//     if(a<b) return -1;
//     if(a>b) return 1;
//     return 0;
// });
// console.log(arr);

// let arr12=["appless","banana","fhjg"];
// console.log(arr12.sort());
// arr12.sort(function(a,b){
//     return a-b;//for descending b-a
// });
// console.log(arr12);

