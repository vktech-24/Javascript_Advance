//1
let numbers=[1,2,3,4,5,6,7,8,9,10];
let oddnumbers=numbers.filter(number=>number%2===0);
console.log(oddnumbers);
//2
let items=[
  {name:'lemon',catogary:'fruit'},
  {name:'tomato',catogary:'vegetable'},
  {name:'apple',catogary:'fruit'}
];
let whichcatagory=items.filter(item=>item.catogary==='fruit');
console.log(whichcatagory);
//3
let animals=['lion','tiger','ant','cat','wolf'];
let withfourcharactors=animals.filter(animal=>animal.length===4);
console.log(withfourcharactors);
//4
let employees=[
      {name:'vimal',age:36},
      {name:'sathiya',age:35},
      {name:'jahir',age:25}
];
let elderemployees=employees.filter(employee=>employee.age>=30);
console.log(elderemployees);
//5
let tyres=[
      {name:'MRF',amount:54500},
      {name:'CEAT',amount:39000},
      {name:'JK',amount:45000},
      {name:'TVS',amount:40000},
];

let cheaptyres=tyres.filter(tyre=>tyre.amount<45000)
console.log(cheaptyres);
//6
let students=[
      {name:'vimalkumar',age:20,voter:'have'},
      {name:'rathimeena',age:16,voter:'not have'},
      {name:'gokul',age:17,voter:'not have'},
      {name:'vignesh',age:21,voter:'have'},
      {name:'ajith',age:23,voter:'have'},
]

let eligibleforvote=students.filter(student=>student.age>=18 || student.voter==='have');
console.log(eligibleforvote);