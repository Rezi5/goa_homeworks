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