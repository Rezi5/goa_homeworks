fetch("https://jsonplaceholder.typicode.com/users")
.then((USR)=> USR.json())
.then((ANS)=>{
    ANS.forEach(element => {
        console.log(element.name)
    });
})

fetch("https://jsonplaceholder.typicode.com/users")
.then((email)=> email.json())
.then((showEmail)=>{
    showEmail.forEach((Usr)=>{
        console.log(Usr.name)
        console.log(Usr.email)
    })
})

fetch("https://jsonplaceholder.typicode.com/users")
.then((user)=>user.json())
.then((user1)=>{
    user1.forEach((user3)=>{
        console.log(user3.name)
        console.log(user3.phone)
    })
})
