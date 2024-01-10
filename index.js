//class 1
class Employee
{
    constructor(id,name,department,salary,exp)
    {
        this.id=id;
        this.name=name;
        this.department=department;
        this.salary=salary;
        this.exp=exp;
    }
    salaryHike()
    {
        if(this.exp>1)
        {
            this.salary = this.salary + 0.1 * this.salary ;
        }
        else
        {
            this.salary = this.salary;
        }
    }
}

let Employee1=new Employee(1212, "Manu","Development",40000,1);
let Employee2=new Employee(1213,"Manohar","production",140000,2);
let Employee3=new Employee(1214, "Jessy","Development",40000,1);
Employee1.salaryHike();
console.log(Employee1);
Employee2.salaryHike();
console.log(Employee2);
Employee3.salaryHike();
console.log(Employee3);

// class 2

class Person
{
    constructor(name,gender,color,age,address)
    {
        this.name=name;
        this.gender=gender;
        this.color=color;
        this.age=age;
        this.address=address;
    }
    isAge()
    {
        if(this.age>18)
        {
            this.age= this.age+ " is Eligible for vote";
        }
        else
        {
           this.age= this.age+ " is not Eligible for vote";
        }
        
    }
}
let person1= new Person("Manohar","Male","Fair",23,"Tadepalli-Guntur");
let person2= new Person("Jessy","Female","Fair",17,"Tadepalli-vijayawada");
person1.isAge();
console.log(person1);
person2.isAge();
console.log(person2);

// class 3

class Cars
{
    constructor(cno,cname,color,speed,model)
    {    
        this.cno=cno;
        this.cname=cname;
        this.color=color;
        this.speed=speed;
        this.model=model;
    }
    isSpeed()
    {
        if(this.speed>180)
        {
            this.speed=  "the car is superfast car" + this.speed;
        }
        else
        {
           this.speed=  "the car is slow car" + this.speed;
        }
        
    }
}
let car1= new Cars( "AP4389"
    ,"Hundai","blue",230,"2018model");
let car2= new Cars("TS2H8989","Kia","gary",170,"2023model");
car1.isSpeed()
console.log(car1);
car2.isSpeed()
console.log(car2);

// class 4

class Remote
{
    constructor(RId,Rname,size,model)
    {    
        this.RId=RId;
        this.Rname=Rname;
        this.size=size;
        this.model=model;
    }
    isSize()
    {
        if(this.size>100)
        {
            this.size=  "this is TV Remote" + this.size;
        }
        else
        {
           this.size=  "this is  AC Remote" + this.size;
        }
        
    }
}
let Remote1= new Remote( "PH4389","LG",230,"2018model");
let Remote2= new Remote("TH8989","Hair",90,"2023model");
Remote1.isSize()
console.log(Remote1);
Remote2.isSize()
console.log(Remote2);

// class 5
class Laptops
{
    constructor(Id,name,color,RAM,gen)
    {    
        this.Id=Id;
        this.name=name;
        this.color=color;
        this.RAM=RAM;
        this.gen=gen;
    }
    isModel()
    {
        if(this.gen>"i3")
        {
            this.gen=  "the is new model Laptop" + this.gen;
        }
        else
        {
           this.gen=  "the is old model Laptop" + this.gen;
        }
        
    }
}
let Laptop1= new Laptops( "AP4389111"
    ,"APPle","Silver","8GBRAM","i5");
let Laptop2= new Laptops("TS2H8989ER","HP","gary","White","i3");
Laptop1.isModel()
console.log(Laptop1);
Laptop2.isModel()
console.log(Laptop2);

