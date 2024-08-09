/*
//getter and setter using in object literals 
let person={
    firstname:"vimal",
    lastname:"kumar",
    get fullname(){ 
        return this.firstname+ " " +this.lastname;
    },
    set fullname(name){
      const parts =name.split(" ");
      this.firstname=parts[0];
      this.lastname=parts[1];
    }
}

console.log(person)
console.log(person.firstname)
console.log(person.fullname)
person.fullname="vimal raj";
console.log(person.fullname)
*/

//getter and setter using in classes
/* 
class user{
constructor(firstname,lastname){
this.firstname=firstname;
this.lastname=lastname;
}
 
get fullname(){
    return this.firstname+" "+this.lastname;
}

set fullname(name){
    const parts=name.split(" ");
    this.firstname=parts[0];
    this.lastname=parts[1];
}

}

const u1=new user("vimal","kumar");
console.log(u1)
console.log(u1.fullname)
u1.fullname="vimal raj"
console.log(u1)
console.log(u1.fullname)
*/

class circle{
    constructor(radius){
        this.radius=radius;
    }
    get diameter(){
     return this.radius*2;
    }
    set diameter(diameter){
      this.radius=diameter/2;
    }
    get area(){
        return Math.PI * this.radius * this.radius;
    }
}

const mycircle=new circle(5);
console.log(mycircle.radius)
console.log(mycircle.diameter)
console.log(mycircle.area)
mycircle.diameter=12;
console.log(mycircle.radius)
console.log(mycircle.diameter)
console.log(mycircle.area)