   const words = ["apple", "banana", "cat"];
function use(word){
    console.log(word.length)
}
words.forEach(use)

const nums = [3, 6, 9, 12];
let sum = 0
nums.forEach(function(num){
    sum += num
})
console.log(sum)

const users = [
  {name: "Nika", age: 17},
  {name: "Lika", age: 19}
];
users.forEach(function(N){
    console.log(N.name + N.age)
})

const letters = ["a", "b", "c"];
letters.forEach(function(usr){
    console.log("#" + usr)
})

const nums2 = [1, 2, 3, 4];
let usr1 = nums2.map(function(us){
    return us * 2
})
console.log(usr1)

const names = ["Ana", "Gio", "Nika"];
let usr2 = names.map(function(nam){
    return(nam.toUpperCase())
})
console.log(usr2)

const prices = [10, 20, 30];
let usr3 = prices.map(function(ss){
    return ss * 1.8
})
console.log(usr3)

const sentences = ["hi", "hello", "js"];
let usr4 = sentences.map(function(ss){
    return("!" + ss)
})
console.log(usr4)

const items = [
    {product: "milk", price: 3},
    {product: "bread", price: 2}
];

let usr5 = items.map(function(uss){
    return(uss.price)
})
console.log(usr5)

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(ex){
    console.log(ex)
})

let usr6 = ["John", "Anna", "Mike"]
usr6.forEach(function(usrr){
    console.log(usrr)
})

let numbers2 = [3, 5, 7, 10, 22];
numbers2.forEach(function(ex){
    console.log(ex + 5)
})

let fruit = ["apple", "banana", "kiwi"]
fruit.forEach(function(uss){
    console.log(uss.length)
})

const names2 = ["Ana", "Gio", "Nika"];
names2.forEach(function(usr){
    console.log("Hello", usr)
})

const nums3 = [1, 2, 3, 4];
let usr7 = nums3.map(function(Ss){
    return Ss * 2
})
console.log(usr7)

let usr8 = ["task1", "task2", "task3"]
let usr9 = usr8.map(function(s){
    return(s + "done")
})
console.log(usr9)

const nums4 = [1, 2, 3, 4];
let usr10 = nums4.map(function(s){
    return(s.toString())
})
console.log(usr10)

let numbers3 = [3, 5, 7, 10, 22];
let usr11 = numbers3.map(function(s){
    return( s + 10)
})
console.log(usr11)

let names3 = ["cat", "dog", "fish"]
let usr12 = names3.map(function(s){
    return(s.toUpperCase())
})
console.log(usr12)