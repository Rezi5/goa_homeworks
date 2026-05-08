// Homework 1
class payment{
    constructor(money){
        this.money = money
    }
    calculate(){
        let final = this.money
        if(final > 200){
            final *= 0.9;
        }
        final*=1.02;
        if(final > 300){
            final +=5
        }
        return final
    }
}

let usr = new payment(350)
console.log(usr.calculate())

// Homework2