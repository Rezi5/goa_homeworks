let colors = ["red", "green", "blue", "yellow", "black"];
let [first,second, ...Rest] = colors
console.log(first)
console.log(second)
console.log(Rest)

let user = {
username: "gio123",
email: "gio@gmail.com",
address: {
city: "Batumi",
zip: "6000"
}
}

let{username:userName,address:{city,zip}} = user
console.log(userName)
console.log(city)
console.log(zip)


