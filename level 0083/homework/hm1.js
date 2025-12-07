let arr = [5,6,7,8,9,10,20,30,40]
filtered = arr.filter(s => s%2=== 0 && s > 10 )
console.log(filtered)

let names = ["rezi","saba","sandro","nikolozi","lasha"]
let names1 = names.map((names3 =>{
    return (names3.length)
}))
console.log(names1)

let students = ['aleko','rezi','saba','ana']
students.forEach((students1) =>{
    if(students1[0] == "a"){
        console.log("hello" + " " + students1)
    }
})

let school = [
    { name: "Rezi", age: 17 },
    { name: "Saba", age: 18 },
    { name: "Lasha", age: 20 },
    { name: "Niko", age: 16 }
];

let filts = school.filter(filt => {
    if (filt.age >= 18) {
        console.log(filt.name)
        return true
    } else {
        return false
    }
});

let adultInfo = filts.map(filt => ({ name: filt.name, age: filt.age }))

console.log(adultInfo)


let discount = [100,200,300,400]
let dis = discount.map((dis1) =>{
    return (dis1 * 0.8)
})

let sum = dis.reduce((acc,dis1) => acc + dis1,0)
console.log(sum)

let numbers = [2, -3, 4, -1, 5];
let positiveProduct = numbers.reduce((acc, num) => {
    if (num > 0) {
        return acc * num;
    } else {
        return acc;
    }
}, 1);
console.log(positiveProduct);


let keep = [1, 2, 3, 4, 5, 6]
let keep1 = keep.filter((keep3) =>{
    if(keep3 % 2 === 0){
        return true
    }else{
        return false
    }
})
console.log(keep1)

let saxeli = ["Ana", "Rezi", "Alex", "Luka"]
let saxeli1 = saxeli.filter((saxeli3) =>{
    if(saxeli3[0] === "A"){
        return true
    }else{
        return(false)
    }
})
console.log(saxeli1)

let objj = [
    { name: "Rezi", age: 17 },
    { name: "Saba", age: 18 },
    { name: "Nika", age: 20 }
]
let objj1 = objj.filter((objj2) =>{
    if(objj2.age >= 18){
        return(true)
    }else{
        return(false)
    }
})
console.log(objj1)

let above = [10, 60, 30, 90, 100]
let above1 = above.filter((above2) =>{
    if(above2 > 50){
        return(true)
    }else{
        return(false)
    }
})
console.log(above1)

let words = ["hi", "hello", "cat", "wolf"]
let words1 = words.filter((words2) =>{
    if(words2.length > 3){
        return(true)
    }else{
        return(false)
    }
})
console.log(words1)

let shekribe = [1, 2, 3, 4]
let shekribe1 = shekribe.reduce((acc,el)=>acc + el, 0)
console.log(shekribe1)

let gamravleba =  [2, 3, 4]
let gamravleba1 = gamravleba.reduce((acc,ek)=> acc * ek,1)
console.log(gamravleba1 )

let asaki = [
    { name: "Rezi", age: 17 },
    { name: "Saba", age: 18 }
]
let asaki1 = asaki.reduce((acc,er) => acc + er.age,0)
console.log(asaki1)

let count = ["A", "B", "A", "C", "A"]
let count1 = count.reduce((acc,eq) =>{
    if(eq === "A"){
        acc++
    }return acc

},0)
console.log(count1)

let gadaakete = [1, 2, 3];

let gadaakete1 = gadaakete.reduce((acc, el) => {
    return `${acc}${el}`; 
}, ""); 

console.log(gadaakete1);
console.log(typeof gadaakete1);

let negative = [-5, 3, -1, 8, -9]
let negative1 = negative.filter((negative2) =>{
    if(negative2 < 0){
        return (true)
    }else{
        return(false)
    }
})
console.log(negative1)

let keepo = ["cat", "dog", "mouse", "car", "phone"]
let keepo1 = keepo.filter((keepo2)=>{
    for(let i = 0; i < keepo2.length; i++){
        if(keepo2[i] === "o"){
            return(true)
        }
        
    }
})
console.log(keepo1)


let ke = [20, 150, 90, 300, 75]
let ke1 = ke.filter((ke2)=>{
    if(ke2 < 100){
        return(true)
    }else{
        return(false)
    }
})
console.log(ke1)

obj4 = [
    { user: "Rezi", active: true },
    { user: "Nika", active: false },
    { user: "Ana", active: true }
]
let obj5 = obj4.filter((obj6)=>{
    if(obj6.active === true){
        return(true)
    }else{
        return(false)
    }
})
console.log(obj5)


let str = ["cars", "apple", "dogs", "banana"]
let str1 = str.filter((str3)=>{
    for(let i = 0; i < str3.length;i++){
        if(str3[str3.length -1] === "s"){
            return(true)
        }
    }
}) 
console.log(str1)

let small = [5, 2, 9, 1, 7]
let small1 = small.reduce((acc,el)=>{
    return Math.min(acc,el)
},)
console.log(small1)

let datvale = [1, 2, 3, 4, 5, 6]
let datvale1 = datvale.reduce((acc,el)=>{
    if(el % 2 === 0){
        acc = acc + 1
    }return(acc)
},0)
console.log(datvale1)


let combine = ["I", "love", "coding"]
let combine1 = combine.reduce((acc,el)=>{
    return(acc + el)
})
console.log(combine1)


let find = [
    { item: "apple", price: 2 },
    { item: "bread", price: 3 },
    { item: "milk", price: 4 }
]

let find1 = find.reduce((acc,el)=>{
    return(acc + el.price)
},0)
console.log(find1)

let longest = ["cat", "hello", "mountain", "sun"]
let longest1 = longest.reduce((acc,el)=>{
    if(el.length > acc.length){
        return el
    }return acc
})
console.log(longest1)

let divise = [2, 3, 6, 7, 9, 10];
let divise1 = divise.filter((divise2)=>{
    if(divise2 % 3 ===0 ){
        return(true)
    }else{
        return(false)
    }
})
console.log(divise1)

let addup = [2, 3, 6, 1, 7];
let addup1 = addup.reduce((acc,el)=>{
    if(el > 5){
        return acc * el
    }return acc
        
},1)
console.log(addup1)