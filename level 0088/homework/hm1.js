let items = [
    { product: "milk", price: 3 },
    { product: "bread", price: 2 }
];
items.forEach(function(item) {
    console.log(item.price);
});

let nums4 = [2, 4, 6];
nums4.forEach(function(n) {
  console.log(n * n);
});

let nums5 = [1, 2, 3, 4, 5, 6];
nums5.forEach(function(n) {
    if (n % 2 === 0) {
    console.log(n);
    }
});

let str = "hello";
str.split("").forEach(function(ch) {
    console.log(ch);
});
