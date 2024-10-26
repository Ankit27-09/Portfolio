const burger = document.querySelector('.hamburger')
const navbar = document.querySelector('.nav-container')
const close = document.querySelector('.close')

burger.addEventListener('click',()=>{
    console.log('clicked')
    navbar.classList.toggle('show')
})

close.addEventListener('click',()=>{
    navbar.classList.toggle('show')
})