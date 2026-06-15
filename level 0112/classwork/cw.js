// I) სინქრონულია
// თუ ასინქრონული?
console.log("Hello"); 
console.log("World");
// Sinqronulia

// 2
console.log("Start");
setTimeout(() => {
console.log("Timeout");
}, 1000);
console.log("End");
// Asinqronuli

// 3
function sayHi() {
console.log("Hi");
}
sayHi();
console.log("Bye");
// Sinqronuli

// 4
console.log("A");
console.log("B");
function greet() {
    console.log("Hello");
}
greet();
console.log("C");
// Sinqronuli

// 5
for(let i = 0; i < 3; i++) {
console.log(i);
}
// Sinqronuli

// 6
console.log("A");
setTimeout(() => {
console.log("B");
}, 0);
console.log("C");
// Asinqronuli

// 7
function greet() {
    console.log("Hello");
}

console.log("A");
console.log("B");
greet();
console.log("C");
// sinqronuli

//8
// alert("Hello");
// console.log("Done");
// Sinqronuli

// 9
console.log("1");
Promise.resolve().then(() => {
console.log("2");
});
console.log("3");
// asinqronuli

// 10
const nums = [1, 2, 3];
nums.forEach(num => {
console.log(num);
});
// sinqronuli


// II 1
console.log("Hello"); 
console.log("World");

// II 2
console.log("Start")
setTimeout(()=>{
    "Done"
},2000);
console.log("End")

// II 3
for(i = 1; i < 4; i++){
    console.log(i)
}

// II 4
console.log("Loading")
setTimeout(()=>{
    console.log("DAta recived")
},2000)

// II 5
console.log("A")
setTimeout(()=>{
    console.log("B")
},2000)
console.log("C")