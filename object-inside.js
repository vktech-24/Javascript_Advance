//1
const object={
    name:"vimal kumar",
    age:21,
   /*  method(){
        console.log("testing one")
    }
    method:()=>{
        console.log("testing two")
    } */
    method:function(){
        let user={
            name:"vimal",
            age:20,
            city:"arni"
        }
        return user
    }
}
console.log(object.name);
console.log(object.age);
console.log(object.method().city)

//2 this and arrow function

console.log(this)

var age=25;
function info(){
    console.log(this.age)
    console.log(this)
}

info()

const user={
    age:45,
    fun:info,
    nested:{
        age:15,
        fun:info
    }
}

user.fun()
user.nested.fun()


/* ---------------------------------------     */

var student={
    age:35,
    fun1:function(){
        console.log("fun 1 : ",this.age)
        console.log("fun 1 : ",this)
        function fun2(){
         console.log("fun 2 : ",this.age)
         console.log("fun 2 : ",this)
        }
        fun2();
        const fun3=()=>{
            console.log("fun 3 : ",this.age)
            console.log("fun 3 : ",this)
        }
        fun3()
    }
}

student.fun1();