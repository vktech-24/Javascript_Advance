//Call Method

//var user_name ="vimal";

var student={user_name:"vimal kumar"}

function welcome(user_name){
    console.log("Welcome : "+ this.user_name);
}
welcome.call(student);

//2
function total(eng,tam){
console.log(this.user_name+" Got "+(eng+tam)+" Marks ")
}

total.call(student, 50,90);

//Apply Method
var marks = [70,80]
function exam(eng,tam){
    console.log(this.user_name+" Got "+(eng+tam)+" Marks ")
}
exam.apply(student,marks);

//Bind Method
var fun=total.bind(student,90,80);
fun();

//You can borrow the method in one object to another object using call and apply
const person={
    firstname:"vimal",
    secondname:"kumar",
    fullname:function(){
        return this.firstname+" "+this.secondname;
    }
}

console.log("FullName Of the Person :",person.fullname());

const AnotherPerson={
    firstname:"sathiya",
    secondname:"moorthy"
}

console.log("FullName Of The Person:",person.fullname.apply(AnotherPerson))