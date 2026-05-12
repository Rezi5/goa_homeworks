// Homework1 Private Field არის კლასის ცვლადი, რომელსაც გარედან ვერ მისწვდები.

// Homework2 # სიმბოლოს ვიყენებთ იმისთვის, რომ JavaScript-მა გაიგოს — ეს field private-ია.

// Homework3
class user{
    #password
    constructor(password){
        this.#password = password
    }
    showpass(){
        return this.#password
    }
}

usr = new user("asdasda")
    console.log(usr.showpass())


// Homework4
class phone{
    #pin
    constructor(pin){
        this.#pin = pin
    }
    check(pin){
        if(pin === this.#pin){
            return "Correct"
        }
        
            return 'incorrect'
        
    }

}

let p1 = new phone(2716)

console.log(p1.check(2716))

// Homework5 private field  JavaScript-ში სპეციალურად არის გაკეთებული ისე, რომ კლასის გარედან საერთოდ არ არსებობდეს წვდომა.

// Homework6

class Test {
#age = 25;
}
const t = new Test();
console.log(t.age);  
// UNdefined

// Homework7
// class User {
// #email = "test@gmail.com";
// }
// const u = new User();
// console.log(u.#email);

class User{
    #email
    constructor(email){
        this.#email = email
    }

    SHowEmail(){
        return this.#email 
    }
}
let USR = new User("userexample2008@email.com")

console.log(USR.SHowEmail())