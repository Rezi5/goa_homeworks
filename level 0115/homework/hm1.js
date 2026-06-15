async function GetTitle(){
    let T1 =  await fetch("https://fakestoreapi.com/products")
    let T2 =  await T1.json()
    
    T2.forEach(T3 => {
        console.log(T3.title)
    });
}
GetTitle()

function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(25)
        },2000)
    })
}
async function Square(){
    let NUM =  await getNum()
    console.log(NUM * NUM)
}
Square()

let getusers = () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((responce)=> responce.json())
    .then((data)=>{
        data.forEach((FindC)=>{
            if(FindC.username[0] === 'c'){
                console.log(FindC)
            }else{
                console.log("NO user starts with C")
            }
        })
    })
}
getusers()

let getarray = () =>{
    return new Promise((resolve,reject)=>{
        resolve([1,2,3,4,5])
    })
}

async function SumNums(){
    let NewArr =  await getarray()
    let sum = 0
    NewArr.forEach((Sumnum)=>{
        sum += Sumnum
    })
    console.log(sum)
}
SumNums()


let Todos = () =>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((RESPONCE)=> RESPONCE.json())
    .then((DATA)=>{
        DATA.slice(0,11).forEach((SEE)=>{
            if(SEE.completed === true){
                console.log(SEE)
            }
        })
    })
}
Todos()

let JavaScriptText = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Javascript")
        },1000)
    })
}

async function JaVaScriptLEngth(){
    let LEn = await JavaScriptText()
    console.log(LEn.length)
}
JaVaScriptLEngth()

let getPosts = () =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((Post) => Post.json())
    .then((AfterPost)=>{
        AfterPost.forEach((AfPost)=>{
            if(AfPost.id % 2 === 0){
                console.log(AfPost)
            }
        })
    })
}
getPosts()

let Check = () =>{
    return new Promise((resolve,reject)=>{
        resolve(80)
    })
}

async function CheckCheck(){
    let CheckCheckCheck = await Check()
    if(CheckCheckCheck >50){
        console.log("Passed")
    }else{
        console.log("Failed")
    }
}
CheckCheck()

let getComs = () =>{
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((Coms) => Coms.json())
    .then((CO)=>{
        CO.slice(0,15).forEach((COO)=>{
            console.log(COO.name)
        })
    })
}
getComs()

let TwoNums = () =>{
    return new Promise((resolve,reject)=>{
        resolve(20)
    })
}
let TwoNums1 = () =>{
    return new Promise((resolve,reject)=>{
        resolve(10)
    })
}

async function TwoNumsSums(){
    let ThreeNum = await TwoNums()
    let FourNum = await TwoNums1()
    console.log(ThreeNum + FourNum)
}

TwoNumsSums()