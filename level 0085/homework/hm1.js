let numbers = [10, 20, 30, 40, 50, 60]
let [,Secondnum,Thirdnum, ...rest] = numbers
console.log(Secondnum)
console.log(Thirdnum)
console.log(rest)

let employee = {
id: 101,
name: "Luka",
position: "Developer",
salary: 3000,
contact: {
email: "luka@gmail.com",
phone: "555-123-456"
}
}

let{name:employeeName,salary:monthlySalary,contact:{email:workemail,phone="notProvided"}, ...Restemployee} = employee
console.log(employeeName)
console.log(monthlySalary)
console.log(workemail)
console.log(phone)
console.log(Restemployee)
console.log(`employee name ${employeeName} monthlysalary ${monthlySalary} workemail ${workemail} phone ${phone}`)


let arr = [
{ title: "JS", lessons: 20 },
{ title: "React", lessons: 35 },
{ title: "Node", lessons: 25 }
]

let[{title:firstTitle,lessons:FirstLessons},{title:SecondCourse},{lessons = 0}] = arr
console.log(firstTitle)
console.log(FirstLessons)
console.log(SecondCourse)
console.log(lessons)


let order = {
orderId: 555,
customer: {
name: "Ana",
age: 16
},
items: [
{ product: "Phone", price: 1000 },
{ product: "Case", price: 20 }
]
}
let{customer:{name:costumerName},items:[{product,price},{product:Accesoryname}]} = order
console.log(costumerName)
console.log(product)
console.log(price)
console.log(Accesoryname)

let a = 1;
let b = 2;
let c = 3;
[a, c] = [c, a]
console.log(a)
console.log(c)


let teacher = {
name: "Giuli",
subject: "Math",
experience: 5,
school: "High School",
city: "Batumi"
}

let{name:teacherName,subject:mainSubject,experience:yearsOfExperience, ...Others} = teacher
console.log(teacherName)
console.log(mainSubject)
console.log(yearsOfExperience)
console.log(Others)