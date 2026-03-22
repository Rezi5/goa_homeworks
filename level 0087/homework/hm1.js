// Spread gvadzlevs sashualebas magalitad ori list tu gvaq gavaertianod

// Homework2
let user = {
    name: "Giga",
    age: 17
};
let usr3 = {role:"admin",status:"Active",...user};
console.log(usr3);

// Homework3
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 20, c: 3 };
let obj3 = {...obj1,...obj2};
console.log(obj3);

// homework4
let  product = {
    title: "Laptop",
    price: 1500,
    inStock: true
};
let product1 = {...product,price:1200,inStock:"false"}
console.log(product1)

// homework5
let profile = {
    username: "kocho",
    followers: 120,
    verified: false
};
let copy = {...profile,followers:500}
console.log(copy)