let user={
    name:"vimal",
    /* address:{
    city:"arni"
    } */
}

//this new feature intruduced in 2020 called Optional Chaining
console.log(user)
/* console.log(user.address.city) */


//old method for handling this problem
//option 1
console.log(user.address?user.address.city:undefined)
//option 2
console.log(user.address && user.address.city)



//option 3 new optional chaining
console.log(user.address?.city)

//option 4 optional chaining
let key="city";
console.log(user.address?.[key]);

const nestedData = {
    "user": {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "profile": {
            "age": 30,
            "gender": "male",
            "address": {
                "street": {
                    "first":"john street",
                    "second":"vimal Street",
                    "third":"jahir street"
                },
                "city": "Anytown",
                "state": "CA",
                "postalCode": "12345"
            },
        },
    }
};

console.log(nestedData);

/* console.log(nestedData.user.profile.age)
console.log(nestedData.user.profile.address.street) */

//old method
console.log(nestedData.user.profile && nestedData.user.profile.age)
console.log(nestedData.user.profile?nestedData.user.profile.gender:undefined)

console.log(nestedData.user.profile?.gender)
console.log(nestedData.user.profile?.address.city)
console.log(nestedData.user.profile?.address.street?.first)

