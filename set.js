const user=['vimal','sathiya','vimal','selva']
console.log(user)


const uniqueusers=new Set(user);
console.log(uniqueusers)

const uniquearray=[...uniqueusers];
//const uniquearray=[...new Set(user)];
console.log(uniquearray)

const myset=new Set([1,2,3]);

console.log(myset)
myset.add(4).add(5).add(5);
console.log(myset)
myset.delete(5);
console.log(myset)
console.log(myset.has(5))
console.log(myset.has(4))
myset.forEach(value=>console.log(value))

//entries

const set=new Set(["vimal","surya","sathiya"])
console.log(set)

const literals=set.entries();

console.log(literals.next().value);
console.log(literals.next().value);
console.log(literals.next().value);

//if  you want only the key value

const literalkey=set.keys();

console.log(literalkey.next().value);
console.log(literalkey.next().value);
console.log(literalkey.next().value);

//user defined funcion

Set.prototype.subset=function(otherset){
if(this.size>otherset.size){
    return false;
}else{
    for(var element of this){
        if(!otherset.has(element)) 
        return false;
    }
    return true;
}
}

const setA=new Set([1,2,3])
const setB=new Set([5,6,1,2,3,4])
const setC=new Set([1,3,4,5])

console.log(setA.subset(setB))
console.log(setB.subset(setC))
console.log(setC.subset(setB))
console.log(setA.subset(setC))

Set.prototype.union=function(otherset){
    const unionset=new Set();
    for(let element of this){
        unionset.add(element);
    }
    for(let element of otherset){
        unionset.add(element);
    }return unionset;
};

console.log(setA.union(setB));
console.log(setA.union(setC));
console.log(setC.union(setB));

//intersection

Set.prototype.intersection=function(otherset){
    const intersectionSet=new Set();
    for(let element of otherset){
        if(this.has(element)){
            intersectionSet.add(element)
        }
    }
    return intersectionSet;
}

console.log(setA.intersection(setB));

Set.prototype.diffrence=function(otherset){
    const diffrenceSet=new Set();
    for(let element of otherset){
        if(!this.has(element)){
            diffrenceSet.add(element)
        }
    }
    return diffrenceSet;
};


console.log(setA.diffrence(setB));


//tag widget

class tagsinput{
    constructor(){
        this.tags=new Set();
    }
    addtag(newtag){
        this.tags.add(newtag);
        console.log(this.tags);
    }
}

const input=new tagsinput();
input.addtag('ram');
input.addtag('vimal');
input.addtag('kumar');
input.addtag('vimal')
input.addtag('kumar')