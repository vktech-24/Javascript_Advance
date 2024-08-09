async function welcome(){
     return "hello world"
}

console.log(welcome());

//----------------------

welcome().then((msg)=>{
    console.log(msg)
}).catch((error)=>{
    console.error(error)
})



async function getData(){
    let blogPost=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Blog Post")
        },2000)
    });

    let blogComment=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Comments For The Blog")
        },5000)
    });

    console.log("Fetching Post.....")
    let post=await blogPost;
    console.log("Post :",post);
    console.log("Fetching Comment....")
    let comment=await blogComment;
    console.log("Comment :",comment)
    return[post,comment]
}

console.log("Welcome To Blog Post");
let data=getData();
//console.log(data)
data.then((value)=>{
    console.log(value)
})


//-----------------------------------------------------------------

/* let result=function(marks){
    return new Promise(function(resolve,reject){
        console.log("Calculation Result.....");
        setTimeout(()=>{
            let total=0;
            let result="Pass";
            marks.forEach(marks => {
                total += marks;
                if(marks<35){
                 result="Fail"
                }
            });
            resolve({ total: total, result: result});
        },2000);
    });
}; */

/* let grade=function(response){
    return new Promise(function(resolve,reject){
        if(response.result=="Pass"){
            let avg=  response.total/3;
            let gradeText="Grade D";
            if(avg >= 90 && avg <= 100){
                gradeText="Grade A"
            }else if(avg >= 80 && avg <= 89){
                gradeText="Grade B"
            }else if(avg >= 70 && avg <= 79){
                gradeText="Grade C"
            }
            resolve(gradeText)
        }else{
            reject("No Grade")
        }
    })
} */

/*
result([98,97,25]).then((value)=>{
    console.log("Total :",value.total);
    console.log("Result :",value.result);
    return grade(value);
}).then((value)=>{
    console.log(value)
}).catch((err)=>{
    console.error(err)
})
*/

/* async function getResults(){
    try{
        const value= await result([98,97,90]);
        console.log("Total :",value.total);
        console.log("Result :",value.result);

        const gradeText=await grade(value);
        console.log(gradeText)
    }catch(err){
        console.error(err)
    }
}

getResults() */