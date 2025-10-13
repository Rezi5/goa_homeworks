const num01 = Number(prompt('შეიყვანეთ პირველი რიცხვი: '))
const num02 = Number(prompt('შეიყვანეთ მეორე  რიცხვი: '))
const symbol = prompt('შემოიყვანეთ სიმოლო: ')
let user = {
    number1: num01,
    number2: num02,
    usersymbol: symbol,
    plius(){
    if(this.usersymbol ==="+")
        return(this.number1 + this.number2)
    },
    minus(){
        if(this.usersymbol === "-")
            return (this.number1 - this.number2)
    },
    multiply(){
        if(this.usersymbol === "*")
            return(this.number1 * this.number2)
    },
    divide(){
        if(this.usersymbol === "/")
            return(this.number1 / this.number2)
    },
}

if(user.usersymbol === "+")console.log(user.plius())
else if(user.usersymbol === "-")console.log(user.minus())
else if(user.usersymbol === "*")console.log(user.multiply())
else if(user.usersymbol === "/")console.log(user.divide())
else console.log("Eror")
