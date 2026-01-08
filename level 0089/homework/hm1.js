let usr1 = document.getElementById("In1")
let usr2 = document.getElementById("In2")
let usr3 = document.getElementById("In3")
let usr4 = document.getElementById("Btnn")
let usr5 = document.getElementById("Result")
usr4.addEventListener('click',()=>{
    if(usr1.value === ""){
        alert("input must be a number!")
        return
    }if(usr2.value === ""){
        alert("Input must be a number")
        return
    }if(usr3.value === ""){
        alert("Input must be a number")
        return
    }
    usr5.textContent = Number(usr1.value) +  Number(usr2.value) +  Number(usr3.value)
})