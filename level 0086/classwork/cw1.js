let list1 = [1, 2, 3, 4, 5];
list1.forEach(function(n) {
    console.log(n);
});

let list2 = [10, 20, 30, 40];
let list2Double = list2.map(function(n) {
  return n * 2;
});
console.log(list2Double);

let list3 = [1, 2, 3, 4, 5, 6];
let list3Even = list3.filter(function(n) {
    return n % 2 === 0;
});
console.log(list3Even);

let list4 = ["apple", "banana", "cat", "dog"];
let list4Upper = list4.map(function(w) {
    return w.toUpperCase();
});
console.log(list4Upper);

let list5 = [3, 5, 7, 10, 22];
let list5PlusFive = list5.map(function(n) {
    return n + 5;
});
console.log(list5PlusFive);