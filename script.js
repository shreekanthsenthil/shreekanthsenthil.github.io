let navbar = document.querySelector('.menu')

window.addEventListener('scroll', function(e){
    if(window.scrollY > 0){
        navbar.classList.add('menu--active')
    } else{
        navbar.classList.remove('menu--active')
    }
})