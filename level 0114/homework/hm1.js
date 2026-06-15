fetch("https://jsonplaceholder.typicode.com/users/1")
.then(responce => {
    console.log("Statuscode", responce.status);
    return responce.json()
})
.then((data)=>{
    console.log(data)
    console.log(data.name)
    console.log(data.username)
    console.log(data.email)
})

fetch("https://jsonplaceholder.typicode.com/comments")
.then((res)=>res.json())
.then((dat)=>{
    dat.slice(0,5).forEach(element => {
        console.log(element.name)
        console.log(element.email)      
    });
})

fetch("https://jsonplaceholder.typicode.com/albums")
.then((tit)=>tit.json())
.then((tot)=>{
    tot.forEach((Alb)=>{
        console.log(Alb.title)
    })
})

fetch("https://jsonplaceholder.typicode.com/users",{
    method:"POST",
    body: JSON.stringify({
        name:"REzi",
        email:"sadad.gmailcom"
    }),
    headers:{
        "Content-type":"Application/json"
    }
})

.then((ST) => ST.json())
.then((STT)=>{
    console.log(STT)
})

fetch("https://jsonplaceholder.typicode.com/albums",{
    method:"POST",
    body:JSON.stringify({
        title:"IDK",
        userID: 10
    }),
    headers:{
        "Content-type":"Application/json"
    }
})

.then((TT)=>TT.json())
.then((DD)=>{
    console.log(DD)
})

fetch("https://jsonplaceholder.typicode.com/users/1",{
    method:"PUT",
    body:JSON.stringify({
        name:"Saba",
        email:"SABBBA@GMail"
    }),
    headers:{
        "Content-type":"Application/json"
    }
})
.then((SWAp)=>{
    if(SWAp.status == 200){
        console.log("GOod",SWAp.status)
    }
    else if(SWAp.status > 200 && SWAp.status <300){
        console.log("ANother Good",SWAp.status)
    }
    else if(SWAp.status > 400 && SWAp.status < 500){
        console.log("USerERor",SWAp.status)
    }
    else if(SWAp.status > 500){
        console.log("Server error",SWAp.status)

    }
    else{
        console.log(SWAp.status)
    }
    return SWAp.json()
})
.then((SWAP)=>{
    console.log(SWAP)
})

fetch("https://jsonplaceholder.typicode.com/albums/1",{
    method:"PUT",
    body:JSON.stringify({
        title:"RAVITO"
    }),
    headers:{
        "Content-type":"Application/json"
    }
})
.then((TITLE)=>TITLE.json())
.then((TUTLE)=>{
    console.log(TUTLE)
})

fetch("https://jsonplaceholder.typicode.com/users/1",{
    method:"DELETE"
})
.then((Deleted)=>{
    console.log(Deleted.status)
})
