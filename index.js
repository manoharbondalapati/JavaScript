// task 1 //compare funtion numeric sort
console.log("largest,3rd lergest number in array");
let array=[5,9,46,89,2,1];
console.log(array.sort(function(a,b){ return b-a}));
let[n1,n2,n3,...rest]=array;
console.log("largest number in array:",n1);
console.log("3rd largest number in array:",n3);

// in simple
let arr=[1,8,5,7,69];
let sortedArray = [...arr].sort(function (a, b) { return b - a;});
console.log(sortedArray);
console.log("Largest Number: ", sortedArray[sortedArray.length-1]);
console.log("Third Largest Number: " , sortedArray[sortedArray.length-1]);

// another way sort method
let nums=["1,6,8,4,9,10"];
nums.sort();
console.log(nums);
let [nu1,nu2,nu3,nu4,nu5,nu6]=nums;
console.log("largest number in array:",nu6);
console.log("3rd largest number in array:",nu4);//boubt

// another way toSorted method
let nos=[54,58,5,2,4,1];
let sort=nos.toSorted();
console.log(sort);
let [no1,no2,no3,no4,no5,no6]=sort;
console.log("largest number in array:",no6);
console.log("3rd largest number in array:",no4);



// task 2
console.log("removing duplicates thigns and print array");
function isDuplicate(inputs)
{
    var newarr=[];
    for(i=0;i<inputs.length;i++)
    {
        var element =inputs[i];
        var duplicate = false;
    
    for(j=0;j<newarr.length;j++)
    {
       if(element ===newarr[j])
       {
        duplicate=true;
        break;
       } 
    }
    if(!duplicate)
    {
        newarr.push(element);
    }
}
return newarr;
}
let inputs=[1,4,5,6,1,4,6,7,9];
console.log("withduplicates",inputs);
let result=isDuplicate(inputs);
console.log("without duplicates",result);


// // using method
// let arrr=[1,4,5,6,1,4,6,7,9];
// function isDuplicates(arrr)
// {
//     let woduplicates=[];
//     for(i=0;i<arrr.length;i++)
//     {
//         if(woduplicates.indexOf(arrr[i])=== -1)
//         {
//             woduplicates.push(arrr[i]);
//         }
//     }
//     return woduplicates;
// }
// let output=isDuplicates(arrr);
// console.log("using indexOf method",output);

// // task 3
// console.log("2000-2040 leap years");
// let n=2040;
// for(i=2000;i<n;i++)
// {
//     if(i%4===0)
//     {
//         console.log(i,"this is leap year");
//     }
// }

// // using functions
// console.log("using functions")

// function isLeapYear()
// {   
//     let n=2040;
//     for(i=2000;i<n;i++)
//     {
//         if(i%4===0)
//         {
//             console.log(i,"Leap Year");
//         }
//     }
// }
// isLeapYear(i)

// doubt sec task
// function isDuplicate(arr)
// {
    
//     let arr1=[];
//     for(i=0;i<arr.length;i++)
//     {
//         for(j=i+1;j<arr.length;j++)
//         {
//             if(arr[i]==arr[j] && !arr1.includes(arr[i]))
//             {
//                 arr1.push(arr[i]);

//             }
//         }
//     }
//     return arr1;
// }
// let arr1=[2,5,6,8,9,1,9,5,6,9];
// console.log(isDuplicate(arr1));

function evenOdd(arr){
    let evenArr=[];
        let oddArr=[];
    for(let v1 of arr){
        if(v1%2==0){
           evenArr.push(v1);
        }
       else{
        oddArr.push(v1);
       }
    }
    return{even:evenArr,
        odd:oddArr
        
    };
}
let arr1=[1,2,3,4,5,6,7,8];
let res=evenOdd(arr1);
console.log("even numbers :"+res.even);
console.log("odd numbers :"+res.odd);
