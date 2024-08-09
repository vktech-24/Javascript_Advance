/* const promise=new Promise((resolve,reject)=>{
    sum=1+1;
if(sum==2){
    resolve("Success")
}else{
    reject("Error")
}
});

promise.then((msg=>{
    console.log(msg)
})).catch((error)=>{
    console.error(error)
}) */



/* setTimeout(()=>{
    console.log("hi")
},950)

function setTimeoutPromise(duration){
return new Promise((resolve,reject)=>{
    setTimeout(resolve,duration);
})
}

setTimeoutPromise(250).then(()=>{
    console.log("promise : 1")
}) */




/* setTimeout(()=>{
    console.log("number - 1")
    
setTimeout(()=>{
    console.log("number - 2")
    
setTimeout(()=>{
    console.log("number - 3")
},950)
},950)
},950)


function setTimeoutPromise(duration){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,duration);
    })
    }

setTimeoutPromise(950).then(()=>{
console.log("promise : 1")
setTimeoutPromise(950).then(()=>{
    console.log("promise : 2")
    setTimeoutPromise(950).then(()=>{
        console.log("promise : 3")
        })
    })
})


setTimeoutPromise(950).then(()=>{
    console.log("promise : 1");
    return setTimeoutPromise(950);
}).then(()=>{
    console.log("promise : 2");
    return setTimeoutPromise(950);
}).then(()=>{
    console.log("promise : 3");
}) */



/* const button=document.querySelector("button");

function addEventPromise(element,method){
 return new Promise((resolve,reject)=>{
    element.addEventListener(method,resolve);
 })
}

addEventPromise(button,"click").then(()=>{
console.log("Button Clicked")
}) */

/*
console.log(Promise.resolve("good"))

Promise.all([Promise.resolve("Good"),Promise.resolve("Very Good"),Promise.resolve("Nice")])
.then((msg)=>{
    console.log(msg)
})

Promise.all([Promise.reject("Good"),Promise.resolve("Very Good"),Promise.resolve("Nice")])
.then((msg)=>{
    console.log(msg)
})

Promise.any([Promise.reject("Good"),Promise.reject("Very Good"),Promise.resolve("Nice")])
.then((msg)=>{
    console.log(msg)
})
*/

/*
Promise.race([Promise.resolve("Good"),Promise.resolve("Very Good"),Promise.resolve("Nice")])
.then((msg)=>{
    console.log(msg)
})

Promise.allSettled([Promise.reject("Good"),Promise.resolve("Very Good"),Promise.resolve("Nice")])
.then((msg)=>{
    console.log(msg)
})
*/

//java la try,catch,death mariye js la 
//promise la then,catch,and finally ne irukku
/*
const promise=Promise.resolve("Done");

promise
.then((msg)=>{
    console.log(msg)
}).catch((error)=>{
    console.log(error)
}).finally((msg)=>{
    console.log("All Completed...")
})
*/
/*
const getPost=()=>{
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            const posts=['Post-1','Post-2','Post-3','Post-4'];
            resolve(posts);
         },1000)
    })
}

const getComments=()=>{
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            const comment=['Comment-1','Comment-2','Comment-3','Comment-4'];
            resolve(comment);
         },1000)
    })
}

Promise.all([getPost(),getComments()]).then((result)=>{
    const [posts,comment]=result;
    console.log(`Posts : ${posts}`);
    console.log(`comment : ${comment}`);
})

fetch('https://jsonplaceholder.typicode.com/users').then((responce)=>{
    responce.json().then((data)=>{
        console.log(data)
    })
})

*/
