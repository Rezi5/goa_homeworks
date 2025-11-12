let user = document.querySelector(".txt0");
let user2 = document.querySelector(".txt1");

user2.addEventListener('click', () => {
    user2.textContent = user.value;
});