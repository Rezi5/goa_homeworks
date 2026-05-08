// Homework1
class user{
    static count = 0
    constructor(name){
        this.name
        user.count++
    }

    
}

class admin extends user{
    constructor(name){
        super(name)
    }
}

let usr1 = new user("USer1")
let usr2 = new user("USer2")
let usr3 = new user("USer3")

console.log(user.count)

// Homeowrk2
class Vehicle{
    constructor(brand){
        this.brand = brand
    }
}