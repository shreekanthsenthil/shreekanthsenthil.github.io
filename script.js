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

function submitForm(){
    let body = "Name: " + document.querySelector(".js-field-name").value + "\n" + "Email: " + document.querySelector(".js-field-email").value + "\n" + document.querySelector(".js-field-message").value
    let data = {
        subject: "Mail from Portfolio",
        body: body
    }
    fetch("https://mail-shreekanth.herokuapp.com/", {
        method: "POST",
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(res => submitCompleted())
}

function submitCompleted(){
    document.querySelector(".js-field-name").value = ""
    document.querySelector(".js-field-email").value = ""
    document.querySelector(".js-field-message").value = ""
}

let submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', submitForm)