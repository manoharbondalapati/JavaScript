// A JavaScript Set is a collection of unique variable.
// Each value can oly occur once in a Set.

// methods
//1.new Set() creates a new Set
//2.add() Adds a new element to Set
//3. delete () Removes an element from a set
//4.has () Returns true if a value exists in the Set
//5.forEach() Invokes a callback for each element in the Set
//6.Values() returns an iterator with all the values in a Set

//property
//size it return the number of elements in Set

// to create Set in three ways
//1.passing array to new Set()
//2.create a new Set and use add() to add values
//3.create a new Set and use add() to add variables

const characters = new Set(["a", "b", "c"]);
console.log(characters);

const numbers = new Set([1, 2, 4, 5, 5, 5]);
console.log(numbers);

//create set and add values
const words = new Set();
words.add("Banana");
words.add("Apple"); //using methods
words.add("Carrot");
console.log(words);
console.log(words.size); //gives length of set

//create set and add vaules using variables
const letters = new Set();
const a = "Banana";
const b = "Apple"; // using variables
const c = "Carrot";

letters.add(a);
letters.add(b);
letters.add(c);

console.log(letters);

//forEach method it gives in original array not new
const fruits = ["Banana", "Apple", "Carrot"];
//in this we call a function
fruits.forEach(function (array) {
  console.log(array);
});
//in abpove 1 parameter gives values
// 2 gives indexs
//3 gives array like []

//if I use new object like

const veg = new Set(["Bringal,Tamato,Marchi"]);

veg.forEach(function (array) {
  console.log(array);
}); // it gives like new array
let vegs = "";
veg.forEach(function (value) {
  vegs += value;
}); // it takes like new array if i use new instance
console.log(vegs);

//values method

console.log(veg.values()); //gives set iterator and give all values
//so we use for of concept
let vegss = "";
for (const x of veg.values()) {
  vegss += x;
}
console.log(vegss); // it give values

// delete method
letters.delete("Banana");
console.log(letters);

// has() method
let hascheck = letters.has("Carrot");
console.log(hascheck);

//remove duplicates in array using spread operator and get ouput in array using set
let array = [1, 3, 2, 5, 5, 5, 8, 7, 7, 7];
let result = [...new Set(array)];
console.log(result); //in normal way using map ,reduce,filter methods

//MAP
//Map  holds key-value pairs where the keys can be any datatype.
// a Map remember the original insertion odrer of keys.

//methods -- new Map(), set(),get(),delete(),has(),forEach(),entries(),
//property -- size

//create map using passig an array to map, using map.set()

//create a Map by passing array to new Map

const curry = new Map([
  ["Chicken", 200],
  ["Mutton", 800],
  ["Dhal", 10],
]);
console.log(curry); //got output like in object{chicken=> 200 ....}

//using set() method
const curries = new Map();
//set Map values
curries.set("chicken", 200);
curries.set("Mutton", 800);
curries.set("Dhal", 10);
console.log(curries);
//set method also used set a new values
curries.set("chicken", 150);
console.log(curries);
// get() method used to get value of key in a map

let check = curries.get("chicken");
console.log(check);

//delete() method
curries.delete("chicken");
console.log(curries);

//has () method
//true if value in map or give false

let check11 = curries.has("chicken");
console.log(check11);

// forEach() method
const Tvs = new Map([
  ["LG", 100000],
  ["Samsung", 90000],
  ["Philips", 87000],
]);
Tvs.forEach(function (key,value) {
  console.log(key);
});
// const TVS ={
//              lG:"10000",
//              Philips: "20000",
//              hai:"20000",
            
// }

// let  keys = Object.values (TVS).map(key=>key);
// console.log(keys);// get only keys

//entries () method
for (const x of Tvs.entries()) {
 
}
console.log(Tvs);

// filter() method 
//return an array of values 
const ages=[12,45,44, 44,21,49];
const res= ages.filter((value)=>value>25);
console.log(res);


let res1 = ages.filter((value)=>value>=18);//it creates new array
//it does not execute the function for empty elements
//doesnot change the original array
console.log(res1);

//reduce method()
//it return only single cummilated value
const number=[175,49,44];
let re= number.reduce((values,value)=>values+value); //sum of array
console.log(re);// it is used in operation like in single arrays

//(values)=>math.max(values) maximum values
//concat ther multiple arrays in single array like

const arrays =[[1,2,4],[5,6,8,9],[3,5,7]];
let combined= arrays.reduce((values,value)=>values.concat(value));
console.log(combined);

// also find the occurence in a array

const wordss =["apple","banana","apple","orange","banana"];
const count =wordss.reduce((words,counts)=>{words[counts]=(words[counts]||0)+1; return words;},{});
console.log(count);
