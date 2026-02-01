let users1 = [
    { name: "Nika", age: 17 },
    { name: "Lika", age: 19 },
    { name: "Gio", age: 21 }
];
users1.forEach(function(u) {
    console.log(u.name);
});

let users2 = [
    { name: "Nika", age: 17 },
    { name: "Lika", age: 19 },
    { name: "Gio", age: 21 }
];
let ages = users2.map(function(u) {
    return u.age;
});
console.log(ages);

let users3 = [
    { name: "Nika", age: 17 },
    { name: "Lika", age: 19 },
    { name: "Gio", age: 21 }
];
let adults = users3.filter(function(u) {
    return u.age >= 18;
});
console.log(adults);

let products = [
    { product: "milk", price: 3 },
    { product: "bread", price: 2 },
    { product: "eggs", price: 5 }
];
let prices = products.map(function(p) {
    return p.price;
});
console.log(prices);

let products2 = [
    { product: "milk", price: 3 },
    { product: "bread", price: 2 },
    { product: "eggs", price: 5 }
];
let expensive = products2.filter(function(p) {
    return p.price > 3;
});
console.log(expensive);