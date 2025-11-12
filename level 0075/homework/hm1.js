function user(callback){
    const name = "rezi";
    callback(name)
}

user((name) => 
console.log('hello' + " "+ name))