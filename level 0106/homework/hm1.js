class animal{
    constructor(name,sound){
        this.name = name
        this.sound = sound
    }

    makesound(){
        return this.name + " "+ "says" + " " + this.sound
    }
}

let an1 = new animal("Baqsi","woof woof ")



console.log(an1.makesound())

class employee{
    constructor(Fullname,salary){
        this.Fullname = Fullname
        this.salary = salary
    }

    showSalary(){
        return this.Fullname + "Salary is" + this.salary
    }

}

let Sal1 = new employee("Rezi",1000)
console.log(Sal1.showSalary())


class laptop{
    constructor(brand, price){
        this.brand = brand
        this.price = price
    }
    
    fps(){
    return  this.brand + " " + "Price is " + " " + this.price
    }
}

let lap = new laptop("Dell",1900)
console.log(lap.fps())

class Acc{
    #money
    constructor(money){
        this.#money = money
    }

    showmoney(){
        return this.#money
    }
}

let usr = new Acc(12121)

console.log(usr.showmoney())