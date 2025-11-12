let button = document.querySelector('button');
let heading = document.querySelector('h1');


button.addEventListener('click', () => {
    heading.style.fontSize = '10rem';   
    heading.style.color = 'red';       
    heading.textContent = "You clicked!"; 
});