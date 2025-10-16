let title = document.getElementById('id1')
title.style.backgroundColor = "red"
title.style.color = "blue"
console.log(title)



let title2 = document.getElementsByClassName('idd')
for(let i = 0; i < title2.length; i++){
    title2[i].style.color = "red"
}