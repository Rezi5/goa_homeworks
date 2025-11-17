let usr1 = {
    name: "rezi",
    age: 18
}
let usr2 = {
    name: "Saba",
    age: 17
}

let usr3 = (a,b,callback) =>{
    callback(a,b)
}

let usr4 = (c,d) =>{
    console.log(c.name," u are", c.age,"Years old")
    console.log(d.name," u are", d.age,"Years old")
}

usr3(usr1,usr2,usr4)