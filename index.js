// const myObj=
// {
//     name:"manu",
//     age:23,
//     cars:
//     {
//          car1:"ford",//nested object creation
//          car2:"BMW"
//     }
// }
// console.log(myObj.cars.car2);
// console.log(myObj.cars["car2"]);

// const person=
// {
//     fname:"manu",
//     lname:"ma",
//     fullname:function()  
//     {
//         return this.fname+"   "+this.lname; //object method
//     }
// };
// console.log(person.fullname());

// adding a method to an object

// const person=
// {
//     fname:"manu",
//     lname:"manohar"
// }
// person.name=function()
// {
//     return this.fname+ " "+ this.lname;
// }
// console.log("My name is " +person.name());

// object.defining property
// it is used to not changing property values

const person=
{
    fname:"manohar",
    lname:"Bondalapati",

}
Object.defineProperty(person,"fname",{writable:false});//if you have change value:"manu"
person.fname="manu";//it cannot be changed.
console.log(person);//for restric multiple use Object.defineProperties

// in class
 class persons
 {
    constructor(fname,lname,age)
    {
       
        this.lname=lname;
        this.age=age;
        Object.defineProperty(this,"fname",
        {
            value:fname,
            writable:false,
        });
       
    }

 }
 person1=new persons("manohar","manu",23);
 console.log(person1);
 person1.fname="ma";//it cannot be changed
 console.log(person1);

//  polymorphism in Javascript
// it is used one funtion or method can be called by no of times.
// these are  2 types 1.compiletime polymorphism(method overloading it cannot possible in javascript)
// example

class Bike
{
    speed()
    {
        console.log("the bike speed is 90km/h");
    }
    speed()
    {
        console.log("the bike speed is 100km/h");
    }
    speed1()
    {
        console.log("the bike speed is 120km/h");
    }
}

let bike1=new Bike()

bike1.speed("hello");
bike1.speed1();

// passing arguments
// function add(a,b)
// {
//     return a+b;
// }
// function add(a,b,c)
// {
//     return a+b+c;
// }
// console.log(add(2,6)); // it throws NaN as output
// console.log(add(2,2,9))

// but it can get write without method names 
//example
// function add(a,b)
// {
//     if(arguments.length ==2)
//     {
//         return a+b;
//     }
//     else if(arguments.length===3)
//     {
//         return a+b+arguments[2];
//     }
// }
// console.log(add(2,5));
// console.log(add(5,7,8));

// 2. Runtime polymorphism
// it method overriding 
//first we know the inheritance


// inheritance is defined one class aquires all the properties and behavioures of  another class

class Parent
{
    constructor()
    {
       
        console.log("parent constructor");

    }
    parentMethod()
    {
        console.log("parent method");
    }
    // hike()
    // {
    //     console.log("parent hike");
    // }
}
class Child extends Parent
{
    constructor()
    
    {
        super();//to get parent properties using super
        console.log("child constructor");// is called inheritance
      
        
    }
    childMethod()
    {
        
        console.log("child method");
        
       
    }
    // hike()
    // {
    //     super.hike();
    //     console.log("child hike");
    // }
}
const child=new Child();
child.parentMethod();
child.childMethod();
// child.hike();

// 2 example

class Car 
{
    constructor(cname)
    {
        this.cname=cname;
    }
    CarName()
    {
        return 'I have a '+this.cname + ' car';
    }
}
class Model extends Car
{
    constructor(cname,model)
    {   
        super(cname);// if u use parameter parameter name is required.
        this.model =model;
    }
    CarModel()
    {
       return this.CarName()+ ', it is a ' +this.model; 
    }
}
const myCar = new Model("Ford","2019 model");
console.log(myCar.CarModel());

// Runtime polymorphism 
// method overriding.

class Add1
{
    add(a,b)
    {
        return a+b;
        
    }

}
class Add2 extends Add1
{
    add(a,b,c)
    {
           return a+b+c
    }
}
let obj=new Add1();
let obj2=new Add2();
console.log(obj2.add(4,2,4));

// stactic method
// it is doesnot depend on object
//  it is call by the class name
// we can call method in another method 
 //but we cannot call static method in normal method

 class Employee
 {
    constructor(name)
    {
        this.name = name;
    }
    static Method()
    {
        return 'hello';
    }

 }
 const myob=new Employee ("Manohar");
 
 console.log(Employee.Method());
 console.log(myob.name);

//  calling one method in another method

class Methods
{
    constructor()
    {
        this.name="manohar";
       

    }
    methodOne()
    {
        console.log("method one");
        this.methodTwo();
    }
    methodTwo()
    {
        console.log("Method two");
    }
}

const myMethod= new Methods();
myMethod.methodOne();

// calling other method in static method

class Car1
{
    constructor(name)
    {
        this.name=name;
    }
    static hello(x)
    {
        return "hello" + x.name;
    }
}

const myCars = new Car1(  "ford");
console.log(Car1.hello(myCars));


// javascript date funtions these are predefined functions

const d= new Date("2000-02-1"); //date objects are static
console.log(d); //there are 9 ways create a new date object



const date=new Date();
console.log(date)//1 full date time
const str=new Date("February 1,2000 10:11:00");//give string also give only date
console.log(str);
const dm =new Date(2018,11,24,9,7,60);//year,month
console.log(dm);//jan =0,dec=11 6 values year,month,day,hour,minute,second
const pc= new Date(99,11,24);//9,11,24 gives 1909 year
console.log(pc)//it give 1999 as year
const ms = new Date(10000000);// year is 1970 jan 1
console.log(ms);

// using get and set methods 

const da = new Date();
let day = da.getDate();
console.log(day);//it return day on month
//getDay --return day of week
//getFullYear -- return the year
//getHours --return the hour 0-23
//getMilliseconds--returs milliseconds 0-999 like that 


//same as get set is used to set the data
const sd = new Date();
 let date1 =d.setDate(0);
 console.log(date1);



