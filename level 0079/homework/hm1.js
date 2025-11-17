let bod = document.body;
let darkBtn = document.getElementsByClassName("F1")[0];
let pinkBtn = document.getElementsByClassName("F2")[0];

darkBtn.addEventListener("click", () => {
    bod.style.backgroundColor = "black";
});

pinkBtn.addEventListener("click", () => {
    bod.style.backgroundColor = "pink";
});

let claimBtn = document.getElementsByClassName("sur")[0];
let passwordInput = document.querySelector('input[type="password"]');

claimBtn.addEventListener("click", () => {
    if(passwordInput.value.length < 8) {
        alert("Password must be min. 8 characters long");
    } else {
        alert("Password is valid!");
    }
});


