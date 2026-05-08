// class count{
//     constructor(){
//         this.value = 0
//     }

//     add(){
//         this.value++;
//         return this
//     }

//     minus(){
//         this.value--;
//         return this
//     }

//     show(){
//         console.log(this.value)
//         return this
//     }
// }

// let usr = new count()

// usr.add().add().minus().add().show()


class mathhelp{
    static add(a,b){
        return a * b
    }

    static minus(a,b){
        return a % b
    }
}

console.log(mathhelp.add(20,2))
console.log(mathhelp.minus(20,2))


class animal{
    constructor(name){
        this.name = name
    }

    speak(){
        return "Woof woof"
    }
}

class dog extends animal{
    constructor(name,age){
        super(name)
        this.age = age
    }
    speak(){
        return this.name + " " + 'Woooof'
    }
}

let usr = new dog('Baqsi')
console.log(usr.speak())