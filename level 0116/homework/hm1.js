// hm1
async function PostTitle(){
    try{
    let res = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await res.json()
    data.slice(0,5).forEach(Post => {
        console.log(Post.title)
    });

    }
    catch(error){
        console.log('ERROR',error)
    }
}
PostTitle()


// hm2
async function Author(){
    try{
        let res1 = await fetch(" https://jsonplaceholder.typicode.com/comments")
        let data1 = await res1.json()
        data1.slice(0,10).forEach((Author1)=>{
            console.log(Author1.email)
        })
    }
    catch(error){
        console.log("ERRROR1",error)
    }
}
Author()

// hm3
async function Album(){
    try{
        let res2 = await fetch("https://jsonplaceholder.typicode.com/albums")
        let data2 = await res2.json()
        data2.forEach((Album1)=>{
            console.log(Album1.title)
        })
    }
    catch(error){
        console.log("ERROR2",error)
    }
}
Album()

// hm4
async function Todos(){
    try{
    let res3 = await fetch("https://jsonplaceholder.typicode.com/todos")
    let data3 = await res3.json()
    data3.slice(0,10).forEach((Todos1)=>{
        console.log(Todos1)
    })
    }
    catch(error){
        console.log("ERROR3",error)
    }
}
Todos()


// hm5
async function UsersNames(){
    try{
        let res4 =  await fetch(" https://jsonplaceholder.typicode.com/users/1")
        let data4 = await res4.json()
            console.log(data4.name)
            console.log(data4.username)
            console.log(data4.email)
    }
    catch(error){
        console.log("ERROR4",error)
    }
}
UsersNames()

// hm6
async function TitleBody(){
    try{
        let res5 = await fetch(" https://jsonplaceholder.typicode.com/posts/1")
        let data5 = await res5.json()
        console.log(data5.title)
        console.log(data5.body)
    }
    catch(error){
        console.log("ERROR5",error)
    }
}
TitleBody()

// hm7
async function Photos(){
    try{
        let res6 = await fetch(" https://jsonplaceholder.typicode.com/photos")
        let data6 = await res6.json()
        data6.slice(0,5).forEach((Photos1)=>{
            console.log(Photos1.title)
        })
    }
    catch(error){
        console.log("ERROR6", error)
    }
}
Photos()

// hm8
async function CIty(){
    try{
        let res7 = await fetch("https://jsonplaceholder.typicode.com/users")
        let data7 = await res7.json()
        data7.forEach((City)=>{
            console.log(City.name)
            console.log(City.city)
        })
    }
    catch(error){
        console.log("ERROR7",error)
    }
}
CIty()