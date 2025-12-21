let get1 = document.querySelector('span')
let get2 = document.getElementById('pause')
let get3 = document.getElementById('continue')
let get4 = document.getElementById('reset')
time = 0

let id = setInterval(()=>{
    get1.textContent = time
    time++
},1000)

get2.addEventListener('click',()=>{
    clearInterval(id)
})

get3.addEventListener('click',()=>{
    clearInterval(id)
    id = setInterval(()=>{
        get1.textContent = time
        time++
    },1000)
})

get4.addEventListener('click',()=>{
    get1.textContent = time
    time = 0
})