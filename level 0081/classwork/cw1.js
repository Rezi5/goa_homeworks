const nums = [2, 5, 8, 11];
let nums1 = nums.map(ss =>{
    return(ss * 2)
})
console.log(nums1)
const words = ["hello", "world", "js"];
let words1 = words.map(n =>{
    return (n.toUpperCase())
})
console.log(words1)
const numbers = [1, 3, 7, 12];
let nun = numbers.map(rr =>{
    return(rr + 10)
})
console.log(nun)
const fruits = ["mango", "apple", "banana"];
let fr = fruits.map(aa =>{
    return(aa[0])
})
console.log(fr)
const animals = ["dog", "elephant", "cat"];
let an = animals.map(op =>{
    return(op.length)
})
console.log(an)
const numms = [1, 4, 6, 9];
numms.forEach(nu =>{
    console.log(nu * 10)
})
const w = ["HELLO", "WORLD", "JAVASCRIPT"];
w.forEach(WW =>{
    console.log(WW.toLowerCase())
})
const n = [3, 6, 7, 10, 13];
n.forEach(N =>{
    if(N % 2 === 0){
        console.log(N)
    }
})
const colors = ["red", "green", "blue"];
colors.forEach((c,i) => {
    console.log(c,i)
})
const wr2 = ["apple", "banana", "cat"];
wr2.forEach(lol =>{
    let reversed = lol.split("").reverse().join("")
    console.log(reversed)
})
let s =["hi", "wow", "cool"];
let ss = s.map(ra =>{
    return ("!"+ra) 
})
console.log(ss)
let q = [10, 20, 30];
let qq = q.map(q =>{
    return(q.toString())
})
console.log(qq)
let i = ["a", "b", "c"];
let ii = i.map((io,is) =>{
    return(io + is)
})
console.log(ii)
let f = ["banana", "mango", "watermelon"];
let ff = f.map(fo =>{
    return (fo.slice(0,3))
})
console.log(ff)
let z = [10, 5, 2, 20];
z.forEach(zz =>{
    console.log(zz - 3)
})
let x = ["apple", "cat", "phone"];
x.forEach(xx =>{
    console.log(xx[xx.length - 1]);
})
let c = ["Ana", "David", "Luka", "Nino", "Giorgi"];
c.forEach(cc =>{
    if(cc.length >= 5){
        console.log(cc)
    }
})
const strings = ["hi", "dog"];
strings.forEach(v =>{
    console.log(v.split(""))
})
let lk = [3, 6, 9, 12]
let lk1 = lk.map(ss =>{
    return ss * 2
})
console.log(lk1)
let ussr = ["luka", "dato", "niko"]
let ussr1 = ussr.map(ik =>{
    return(ik.toUpperCase())
})
console.log(ussr1)
let ssda = [10, 20, 30, 40]
let ssda2 = ssda.map(a =>{
    return a + 5
})
console.log(ssda2)
let arts = ["cat", "dog", "fish"]
let arts2 = arts.map(m =>{
    return (m.length)
})
console.log(arts2)
let turn = [1, 2, 3, 4]
let turn2 = turn.map(tur =>{
    return("Number" + tur)
})
console.log(turn2)
let pri = ["apple", "banana", "pear"]
pri.forEach(z=>{
    console.log(z)
})
let numqs = [2, 4, 9, 11]
numqs.forEach(c =>{
    if(c % 2 === 0)
        console.log("even")
    else{
        console.log("odd")
    }
})
let learn = ["js", "html", "css"]
learn.forEach(lea =>{
    console.log("I learned" + " " + lea)
})
let sums = [5, 10, 15]
sums.forEach(sum =>{
    console.log(sum + 1)
})
let cars = ["BMW", "Audi", "Mercedes"]
cars.forEach(sos =>{
    console.log("Car is " + sos)
})