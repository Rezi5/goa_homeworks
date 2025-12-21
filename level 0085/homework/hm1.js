let usr = document.querySelector("button")
let usr1 = setTimeout(() =>{
    usr.innerHTML = "Clicked"
},2000)
console.log(usr1)


let inp = document.querySelector("#myInput")
let btn = document.querySelector("#myButton")
let spn = document.querySelector("#output")

btn.addEventListener("click", () =>{
    let value = inp.value

    setTimeout(() => {
        spn.textContent = value
    }, 3000);
})


