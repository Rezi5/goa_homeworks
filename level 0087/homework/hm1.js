let usr = document.querySelector('div')
let speed = 100
let x = 0
let y = 0
document.addEventListener('keydown',(r)=>{
    if(r.key === 'd' && window.innerWidth - 150 > x){
        x+=speed
    }else if(r.key == "s" && window.innerHeight - 150 > y){
        y+=speed
    }else if(r.key == 'w' && y >0){
        y-=speed
    }else if(r.key =='a' && x > 0){
        x-=speed
    }

    usr.style.left = `${x}px`
usr.style.top = `${y}px`
console.log(r.key)
})



let usr1 = document.getElementsByClassName("Im2")[0]
let fall = 0
let Fallspeed = 5

setInterval(() => {
    fall += Fallspeed
    if(fall > window.innerHeight){
        fall = -150
    }
    usr1.style.top = `${fall}px`
},20)


let usr2 = document.getElementsByClassName('Im3')[0]
let fall1 = 0
let Fallspeed1 = 5
setInterval(()=>{
    fall1 += Fallspeed1
    if(fall1 > window.innerHeight){
        fall1 = -150
    }
    usr2.style.top = `${fall1}px`
},20)

let usr3 = document.getElementsByClassName('Im4')[0]
let Fall2 = 0
let Speed = 5
setInterval(()=>{
    Fall2 += Speed
    if(Fall2 > window.innerHeight){
        Fall2 = -150
    }
    usr3.style.top = `${Fall2}px`
},20)


let usr4 = document.getElementsByClassName('Im5')[0]
let Fall3 = 0
let Speed2 = 5
setInterval(()=>{
    Fall3 += Speed2
    if(Fall3 > window.innerHeight){
        Fall3 = -150
    }
    usr4.style.top = `${Fall3}px`
},20)