//prints array values
let users=["vimal","kumar","jahir","sathiya"]
console.log(users)
users.forEach((user,index)=>{
    console.log(user,index)
})
//add elements
let num=[1,2,3,4,5]
let total=0
num.forEach(num=>{
 total+=num;
})
console.log(total)

//multiple with 2
num.forEach(num=>{
    console.log(num*2)
})

//max of the array
let max=0;
num.forEach(num=>{
  if(max<num){
    max=num
  }
})
console.log(max)

//to uppercase
let upper=[]
users.forEach((user,index)=>{
 
})