
let nums1 = [1, 2, 3, 4, 5];
nums1.forEach(function(n) {
    console.log(n);
});

let nums2 = [1, 2, 3, 4, 5];
nums2.forEach(function(n) {
    console.log(n + 10);
});

let words = ["apple", "banana", "cat"];
words.forEach(function(w) {
    console.log(w.length);
});

let names1 = ["Nika", "Lika", "Gio"];
names1.forEach(function(n) {
    console.log("Hello " + n);
});

let nums3 = [3, 6, 9, 12];
let sum = 0;
nums3.forEach(function(n) {
    sum += n;
});
console.log(sum);