let nums1 = [1, 2, 3, 4, 5, 6];
let even = nums1.filter(function(n) {
    return n % 2 === 0;
});
console.log(even);

let nums2 = [5, 12, 8, 20, 3];
let greaterThan10 = nums2.filter(function(n) {
    return n > 10;
});
console.log(greaterThan10);

let words = ["apple", "cat", "banana", "dog", "kiwi"];
let longWords = words.filter(function(w) {
    return w.length > 4;
});
console.log(longWords);

let users = [
    { name: "Nika", age: 17 },
    { name: "Lika", age: 19 },
    { name: "Gio", age: 21 }
];
let adults = users.filter(function(u) {
    return u.age >= 18;
});
console.log(adults);

let words2 = ["apple", "banana", "avocado", "cat", "angel"];
let startWithA = words2.filter(function(w) {
    return w[0] === "a";
});
console.log(startWithA);