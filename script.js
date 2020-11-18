let navbar = document.querySelector('.menu')

window.addEventListener('scroll', function(e){
    if(window.scrollY > 0){
        navbar.classList.add('menu--active')
    } else{
        navbar.classList.remove('menu--active')
    }
})

let mobileHam = document.querySelector('.menu__mobile-button')
let mobileMenu = document.querySelector('.mobile-menu')

mobileHam.addEventListener('click', function(e){
    mobileMenu.classList.add('active')
})

let mobileMenuClose = document.querySelector('.mobile-menu__close')

mobileMenuClose.addEventListener('click', function(e){
    mobileMenu.classList.remove('active')
})