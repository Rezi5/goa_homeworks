let Div1 = document.querySelector('div')
let parent = Div1.parentElement
parent.style.backgroundColor = 'red'

let Ul = document.querySelector('ul')
let find = Ul.firstElementChild
find.textContent = "hello world"


let Button = document.querySelector('button');
let NextSibling = Button.nextElementSibling;
NextSibling.textContent = 'New text'

let Card = document.querySelector('div.card');
let CloneCard = Card.cloneNode(true);
document.body.appendChild(CloneCard);

let P = document.querySelector('p');
let Section = document.querySelector('section');
let CloneP = P.cloneNode(true);
Section.appendChild(CloneP);

let CloneButton = document.querySelector('#cloneButton');
let ElementToClone = document.querySelector('.clone-me');

CloneButton.addEventListener('click', () => {
    let Clone = ElementToClone.cloneNode(true);
    ElementToClone.parentElement.appendChild(Clone);
});

let Img = document.querySelector('img');
console.log(Img.src);


let AddDataButton = document.querySelector('#addDataId');
let ElementForData = document.querySelector('.element');

AddDataButton.addEventListener('click', () => {
    ElementForData.setAttribute('data-id', '12345');
});

let Link = document.querySelector('a');
Link.href = "https://example.com";