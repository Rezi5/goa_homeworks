let user = (callback) =>{
    const us1 = 10
    const us2 = 20
    callback(us1)
}

let us2 = (us1) =>{
    console.log("hello"+" "+ us1)
}
user(us2)