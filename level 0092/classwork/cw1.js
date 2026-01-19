let usr =document.getElementById("H")
let usr3 =document.getElementById("Max")
let usr4 =document.getElementById("Min")
count = 0

usr3.addEventListener('click',()=>{
    usr.textContent = count
    count++
})

usr4.addEventListener('click',()=>{
    usr.textContent = count
    count--
})