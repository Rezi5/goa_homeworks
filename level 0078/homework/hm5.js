const bods = document.body
let user = document.querySelector(".f")
let user2 = document.querySelector(".s")
let user3 = document.querySelector(".t")

user.addEventListener('click',()=>{
    bods.style.backgroundColor = "red"
})

user2.addEventListener('click',()=>{
    bods.style.backgroundColor = "blue"
})

user3.addEventListener('click',()=>{
    bods.style.backgroundColor = "black"
})