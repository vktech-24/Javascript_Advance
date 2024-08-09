/*
//ES5
function person(name){
    this.name=name;
}

person.prototype.myname=function(){
   console.log("my name is "+ this.name);
};

var Person=new person("vimal");
console.log(Person)
Person.myname();

function student(name,age){
   person.call(this,name)
   this.age=age;
}

student.prototype=Object.create(person.prototype);
student.prototype.constructor=student;

let Student=new student("kamal",20)
console.log(Student)
Student.myname()
*/


//ES6
class person{
    constructor(name){
        this.name=name;
    }
    myname(){
        console.log("my name is " + this.name)
    }
}

var Person=new person("kumar");
console.log(Person)
Person.myname()

class student extends person{
    constructor(name,age){
        super(name);
        this.age=age;
    }
}

let Student=new student("sathya",20)
console.log(Student);
Student.myname()