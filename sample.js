let user={
    name:"aish",
    age:23,
    role:"fullstack",
    about:function(){
        return `${this.name} is a ${this.role} developer`
    }
}

console.log(user.about())