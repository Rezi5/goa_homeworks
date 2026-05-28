class User{
    constructor(name,age){
        this.name = name 
        this.age = age
    }
}

let usr = new User("Rezi",17)
console.log(usr.name)
console.log(usr.age)

class car{
    constructor(brand,model){
        this.brand = brand
        this.model = model
    }
    show(){
        return `This is ${this.brand} model ${this.model}`
    }
}

let usr1 = new car("Bmw","M5")
console.log(usr1.show())

class Math{
    static Help(a,b){
        return a + b
    }
}

console.log(Math.Help(10,20))


class game{
    static GAME = "Rockstar"
}
console.log(game.GAME)

class Anima{
    sound(){
        return "Makes sound"
    }
}
class Animal extends Anima{
    Sound(){
        return "Woof woof"
    }
}
let usr2 = new Animal()
console.log(usr2.sound())
console.log(usr2.Sound())

class Person{
    constructor(person,surname){
        this.person = person
        this.surname = surname
    }
}

class student extends Person{
    constructor(person,surname,grade){
        super(person,surname)
        this.grade = grade
    }

    Info(){
        return `Name ${this.person} surname ${this.surname} grade ${this.grade}`
    }
}
let usr3 = new student("Rezi","Dumbadze","A")
console.log(usr3.Info())

class BackAccount{
    #Balance = 0
    set Balance(value){
        if(value < 0){
            console.log("Invalid value")
            return
        }
        this.#Balance = value
    }

}
let acc = new BackAccount()
acc.Balance = -100

