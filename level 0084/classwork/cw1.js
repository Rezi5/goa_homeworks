let nums1 = [1, 2, 3, 4, 5];
for (let i = 0; i < nums1.length; i++) {
    console.log(nums1[i]);
}

let nums2 = [2, 4, 6, 8, 10];
for (let i = 0; i < nums2.length; i++) {
  console.log(nums2[i] * 2);
}

let words = ["apple", "banana", "cat"];
for (let i = 0; i < words.length; i++) {
    console.log(words[i].length);
}

let nums3 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < nums3.length; i++) {
    sum += nums3[i];
}
console.log(sum);

let users = [
    { name: "Nika", age: 17 },
    { name: "Lika", age: 19 },
    { name: "Gio", age: 21 }
];
for (let i = 0; i < users.length; i++) {
    console.log(users[i].name);
}