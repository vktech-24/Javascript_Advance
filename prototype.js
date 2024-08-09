let arr=["vimal","kumar"];

let obj={
    Name:'vimal',
    age:20,
    city:'chennai',
    about:function(){
        return `${this.Name} from ${this.city}`;
    }
}

function vimal(){

};

let obj1={
    Name:'vimal',
    city:'madurai',
    about:function(){
        return `${this.Name} from ${this.city}`;
    }
}

//THIS IS MAIN METHOD 

const obj2=Object.create(obj1);
obj2.Name="kumar";


/*this is ONE OF method for share values between 2 objs
let obj2={
    Name:'vimal'
}

obj2.__proto__=obj1
*/


//defaul ta irukura functions kuda new function na add pannalam 

Array.prototype.Doublelength=function(){
    return this.length*2;
};

console.log(arr.Doublelength())

//also use in functions

Function.prototype.Mybind=function(){
    console.log("hi this is bind fucntion in js")
}
function fun(){

}
fun.Mybind()

//another example

function myname(name){
    this.name=name;
}

myname.prototype.Myreturn=function(name){
    console.log("My Name is : "+this.name)
}

const kamal=new myname("vimal")
const sathiya=new myname("sathiya")

kamal.Myreturn()
sathiya.Myreturn()