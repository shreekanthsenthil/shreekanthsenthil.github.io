let navbar = document.querySelector('.menu')
let mobileHam = document.querySelector('.menu__mobile-button')

window.addEventListener('scroll', function(e){
    if(window.scrollY > 0){
        navbar.classList.add('menu--active')
    } else{
        navbar.classList.remove('menu--active')
    }
})

let mobileMenu = document.querySelector('.mobile-menu')

mobileHam.addEventListener('click', function(e){
    mobileMenu.classList.add('active')
})

let mobileMenuClose = document.querySelector('.mobile-menu__close')

mobileMenuClose.addEventListener('click', function(e){
    mobileMenu.classList.remove('active')
})

let mobileLink = document.querySelectorAll('.mobileLink')

mobileLink.forEach(function(ele) {
    ele.addEventListener('click', function(e){
        mobileMenu.classList.remove('active')
    })
})