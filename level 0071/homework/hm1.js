// getelementbyid
// getelementbyclasses
// querySelector
// getelementbytagname
// let user = document.getElementById('s')
// user.innerText = "Hellllooo Worlldddd"

// let user1 = document.getElementsByClassName('re')
// user1[0].style.color = "Red"

let user2 = document.querySelector("#rez")
user2.style.color = 'yellow'


let user = document.getElementsByClassName('first')
for(let i = 0; i < user.length; i ++){
    user[i].style.color = "red"
    user[i].style.fontSize = "50px"
    user[i].style.margin = '100px'
}