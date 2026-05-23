class product{
    constructor(title,price){
        this.title = title
        this._price = price
    }

    get price(){
        return this._price
    }

    set(Newprice){
        if(Newprice >0){
            console.log("Price cant be less than 0")
        }else{
            this._price = Newprice
        }
    }
}
let usr = new product("Phone",1000)
console.log(product.price)

product.price = -50
product.price = 500

console.log(product.price)
