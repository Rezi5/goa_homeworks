// cw1
fetch( "https://jsonplaceholder.typicode.com/users")
.then((response)=> response.json())
.then((date)=>{
    console.log(date)
})

// cw2
fetch("https://jsonplaceholder.typicode.com/users")
.then((X) => X.json())
.then((y)=>{
    console.log(y[0].name)
    console.log(y[0].username)
    console.log(y[0].email)
})

// cw3
fetch("https://jsonplaceholder.typicode.com/posts")
.then((XX)=> XX.json())
.then((YY)=>{
    YY.forEach(YYY => {
        console.log(YYY.title)
    });
})

// cw4 
fetch("https://jsonplaceholder.typicode.com/posts")
.then((XXX)=> XXX.json())
.then((YYY)=>{
    YYY.slice(0,10).forEach((Y3)=>{
        console.log(Y3.title)
    })
})

// Cw5
fetch("https://jsonplaceholder.typicode.com/comments")
.then((XXXX)=> XXXX.json())
.then((YYYY)=>{
    console.log(YYYY.length)
})

// cw6
fetch("https://jsonplaceholder.typicode.com/photos")
.then((Photos)=> Photos.json())
.then((Res)=>{
    Res.slice(0,10).forEach((RES)=>{
        console.log(RES.url)
    })
})

// cw7
fetch("https://jsonplaceholder.typicode.com/albums")
.then((Albom)=> Albom.json())
.then((Alb)=>{
    console.log(Alb.title)
})