// 1) შექმენი კლასი User, რომელსაც კონსტრუქტორში გადაეცემა name და age, და ობიექტის შექმნისას შეინახე ეს მნიშვნელობები. შემდეგ შექმენი ორი განსხვავებული მომხმარებელი და დაბეჭდე მათი მონაცემები კონსოლში.
// 2) შექმენი კლასი Car, რომელსაც კონსტრუქტორში გადაეცემა brand, model და year, და შექმენი მინიმუმ 3 მანქანის ობიექტი.
// 3) შექმენი კლასი Book, სადაც კონსტრუქტორი მიიღებს title, author და pages, შემდეგ შექმენი ერთი წიგნი და დაბეჭდე მისი ყველა თვისება.
// 4) შექმენი კლასი Student, რომელსაც კონსტრუქტორში ექნება name, surname და grade, და შექმენი 5 სტუდენტი მასივში.
// 5) შექმენი კლასი Product, სადაც კონსტრუქტორი მიიღებს name და price, და შექმენი 3 პროდუქტი, შემდეგ კონსოლში გამოიტანე მხოლოდ მათი ფასები.


// HOmework 1
class user{
    constructor(name,age){
        this.name = name
        this.age = age
    }
}

let user1 = new user('Rezi',18)
let user2 = new user("Nika",17)

console.log(user1.name)
console.log(user1.age)
console.log(user2.name)
console.log(user2.age)

// Homework 2

class car{
    constructor(Brand,model,year){
        this.Brand = Brand
        this.model = model
        this.year = year
    }
}
let car1 = new car('Alpha Romeo','Giulia',2017)
let car2 = new car('Bmw',"m5cs",2020)
let car3 = new car('Mercedes','c63',2017)

console.log(car1.Brand, car1.model,car1.year)
console.log(car2.Brand,car2.model,car2.year)
console.log(car3.Brand,car3.model,car3.year)

// Homework 3

class book{
    constructor(title,author,pages){
        this.title = title
        this.author = author
        this.pages = pages
    }
}

let book1 = new book("1984", "George Orwell", 328)
console.log(book1.author, book1.title, book1.pages)

// Homework 4

class Student{
    constructor(name,surname,grade){
        this.name = name
        this.surname = surname
        this.grade = grade
    }
}

let Student1 = new Student('Rezi',"Dumbadze",50)
let Student2 = new Student('Nikoloz','Bidzinashvili',90)
let Student3 = new Student('Saba','Davitadze',80)
let Student4 = new Student("Luka",'idk',40)
let Student5 = new Student("Sandro",'idk',80)

console.log(Student1.name,Student1.surname,Student1.grade)
console.log(Student2.name,Student2.surname,Student2.grade)
console.log(Student3.name,Student3.surname,Student3.grade)
console.log(Student4.name,Student4.surname,Student4.grade)
console.log(Student5.name,Student5.surname,Student5.grade)

// Homework 5
class  Product{
    constructor(item,price){
        this.item = item
        this.price = price
    }
}

let product1 = new Product('Steak',10)
let product2 = new Product('Egg', 1)
let product3 = new Product('Avocado',2)
console.log(product1.price)
console.log(product2.price)
console.log(product3.price)