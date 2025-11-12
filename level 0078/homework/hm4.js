let user = document.querySelector('img')
user.addEventListener("mouseenter", ()=>{
    user.src = 'download.jpg'
})
user.addEventListener('mouseleave', ()=>{
    user.src = 'download (1).jpg'
})