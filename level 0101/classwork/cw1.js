class person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
}

const p1 = new person("rezi",17)
console.log(p1.name)
console.log(p1.age) 

class car{
    constructor(brand,model){
        this.brand = brand
        this.model = model
        this.year = 2017
    }
}
const c1 = new car('Alpha romeo',"Giulia")
console.log(c1.brand)
console.log(c1.model)
console.log(c1.year)


class Student{
    constructor(name,grade=0){
        this.name = name
        this.grade = grade
    }
}
const s1 = new Student("rezi")
console.log(s1.name)
console.log(s1.grade)


class Rectangle {
    constructor(width, height) {
    this.width = width;
    this.height = height;
}
}

const rect = new Rectangle(10, 5);
console.log(rect.width);
console.log(rect.height)


class User {
    constructor(username, password) {
    this.username = username;
    this.password = password;
}
}

const user1 = new User("rezi123", "mypassword");
console.log(user1.username);
console.log(user1.password)