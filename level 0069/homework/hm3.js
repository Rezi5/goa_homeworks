const user = {
    count: 0,
    add(){
        this.count++
        return this;
    },
    minus(){
        this.count--
        return this;
    },
    show(){
        console.log(this.count)
        return this;
    }
}
user.add().add().add().show()


