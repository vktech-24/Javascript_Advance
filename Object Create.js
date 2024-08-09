
const person={
    name:"vimal",
    age:"20",
    city:"salam",
    address:"arni road",
    about: function (){
        return `${this.name} is from ${this.address}`;
    },
    eligible:function(){
        return this.age>=18;
    }

};

console.log(person);
console.log(person.about());
console.log(person.eligible());

const addstudents={
    about:function(){
        return `${this.name} is from ${this.city}`
    },
    eligible:function(){
        return this.age>=18;
    }
}

function student(name,father,age,city,email){
const user={};
user.name=name;
user.father=father;
user.age=age;
user.city=city;
user.email=email;
user.about=addstudents.about;
user.eligible=addstudents.eligible;
console.log(user.about())
return
}


console.log(student("vimal","sathiya",20,"arni","nsv1gmail.com"));
console.log(student("kumar","priya",30,"chennai","nsv2gmail.com"))

const obj1={
    key1:"value 1",
    key2:"vlaue 2"
}
console.log(obj1);

const obj2=Object.create(obj1);
obj2.key3="value 3"

console.log(obj2)
console.log(obj2.key1)
