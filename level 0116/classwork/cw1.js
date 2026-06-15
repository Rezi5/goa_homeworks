// 1 classwork

try {
    console.log(notExistVariable);
} catch (error) {
    console.log("Error caught!");
}



// 2classswork
try{
    let num = 10
    console.log(num + 10)
    console.log(abc)
}catch(error){
    console.log("There is error")
}


// 3 classwork
try{
    console.log("HelloWorld")
    console.log(usr)
    
}catch(error){
    console.log("ERROR")
}


// 4classwork
let User = () =>{
    try{
        let a = 10
        let b = 20
        console.log(a + b)
        console.log(a + y)
    }catch(error){
        console.log("There is errrror")
    }
}
User()



// 5Classwork
async function take(){
    try{
    let user1 = await fetch("https://jsonplaceholder.typicode.com/users")
    let user2 = await user1.json()
    console.log(user2)
    }
    catch(error){
        console.log("Erori moxda")
    }
}
take()