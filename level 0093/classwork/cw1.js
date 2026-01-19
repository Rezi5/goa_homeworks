let nums6 = [1, 2, 3, 4];
let double = nums6.map(function(n) {
  return n * 2;
});
console.log(double);

let tasks = ["task1", "task2", "task3"];
let done = tasks.map(function(t) {
    return t + " done";
});
console.log(done);

let nums7 = [1, 2, 3, 4];
let strNums = nums7.map(function(n) {
    return n.toString();
});
console.log(strNums);

let nums8 = [3, 5, 7, 10, 22];
let add10 = nums8.map(function(n) {
    return n + 10;
});
console.log(add10);

let names2 = ["cat", "dog", "fish"];
let upper = names2.map(function(n) {
    return n.toUpperCase();
});
console.log(upper);

let users2 = [
    { name: "Nika", age: 17 },
    { name: "Lika", age: 19 }
];
let ages = users2.map(function(u) {
    return u.age;
});
console.log(ages);

let nums9 = [2, 4, 6];
let squares = nums9.map(function(n) {
  return n * n;
});
console.log(squares);

let letters = ["a", "b", "c"];
let hash = letters.map(function(l) {
    return "#" + l;
});
console.log(hash);

let bools = [true, false, true];
let yesNo = bools.map(function(b) {
    return b ? "yes" : "no";
});
console.log(yesNo);

let users3 = [
    { first: "Nika", last: "Dumbadze" },
    { first: "Lika", last: "Smith" }
];
let fullNames = users3.map(function(u) {
    return u.first + " " + u.last;
});
console.log(fullNames);