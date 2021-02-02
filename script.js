let skills = [
    'ReactJS',
    'NodeJS',
    'Java',
    'Python',
    'JavaScript',
    'HTML5',
    'CSS3',
    'MongoDB',
    'Git',
    'GitHub'
]

let projects = [
    {
        title: 'Chat App',
        description: 'A Realtime one to one Chat Web-app using WebSockets developed in NodeJS. This App also stores the encrypted messages in a MongoDB Database encrypted using AES encryption by CryptoJS package. Users can connect with one another and start chatting. Connections and chats will be updated in real-time using WebSockets.',
        stack: ['HTML5', 'CSS3', 'NodeJS', 'Socket.IO', 'MongoDB'],
        image: 'assets/img/chat.png',
        github: 'https://github.com/shreekanthsenthil/Chat-App',
        link: 'http://chat.shreekanth.me'
    },
    {
        title: 'Weather PWA',
        description: 'Installable PWA(Progressive Web App) build using ReactJS which shows realtime weather data.',
        stack: ['ReactJS', 'CSS3', 'Netlify'],
        image: 'assets/img/weather.png',
        github: 'https://github.com/shreekanthsenthil/weather-react-pwa',
        link: 'http://weatherpwa.shreekanth.me'
    },
    {
        title: 'Burger Builder',
        description: 'Burger Builder and ordering app build in ReactJS. This App stores the order history in Firebase. User are authenicated and can order and see their order histories.',
        stack: ['ReactJS', 'Redux', 'CSS3', 'Firebase'],
        image: 'assets/img/BurgerBuilder.png',
        github: 'https://github.com/shreekanthsenthil/burger-builder',
        link: 'http://burgerbuilder.shreekanth.me'
    },
    {
        title: 'Blog',
        description: 'Blog App that lets the Users post status updates and connect with friends. Users can follow their friends. A central chatroom is available where users can exchange their thoughts.',
        stack: ['NodeJS', 'ExpressJS', 'MongoDB', 'HTML5', 'CSS3'],
        image: 'assets/img/Blog.png',
        github: 'https://github.com/shreekanthsenthil/blog',
        link: 'http://blog.shreekanth.me'
    },
    {
        title: 'Sudoku Solver',
        description: 'A given Sudoku image is processed with OpenCV to extract the Sudoku puzzle within the image and the sudoku puzzle is solved.',
        stack: ['Python', 'OpenCV', 'TensorFlow'],
        image: 'assets/img/SudokuSolver.png',
        github: 'https://github.com/shreekanthsenthil/Sudoku-Solver-using-OpenCV',
        link: 'https://github.com/shreekanthsenthil/Sudoku-Solver-using-OpenCV'
    }
]

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

let skillDiv = document.querySelector('.skill-badges')

skills.forEach(skill => {
    let node = document.createElement('BUTTON')
    node.classList.add('skill-badge', 'button', 'disabled')
    node.innerHTML = skill
    skillDiv.appendChild(node)
})

let projectsSection = document.querySelector('.portfolio-cards')

projects.forEach(project => {
    let image = document.createElement('IMG')
    image.src = project.image
    let imageDiv = document.createElement('DIV')
    imageDiv.classList.add('col-md-6', 'col-lg-5', 'project-card__img')
    imageDiv.appendChild(image)
    let title = document.createElement('H3')
    title.innerHTML = project.title
    title.classList.add('project-card__title')
    let description = document.createElement('P')
    description.innerHTML = project.description
    description.classList.add('project-card__description')
    description.align = 'justify'
    let stack = document.createElement('P')
    stack.innerHTML = 'Used Stack:'
    stack.classList.add('project-card__stack')
    stackList = document.createElement('UL')
    stackList.classList.add('tags')
    project.stack.forEach(stackNode => {
        let node = document.createElement('li')
        node.innerHTML = stackNode
        stackList.appendChild(node)
    })
    let github = document.createElement('a')
    github.href = project.github
    github.target = 'blank'
    github.classList.add('project-card-github')
    github.innerHTML = '<i class="fa fa-github"></i>'
    let link = document.createElement('a')
    link.href = project.link
    link.innerHTML = project.link
    link.classList.add('project-card__link')
    link.target = 'blank'
    let infoDiv = document.createElement('div')
    infoDiv.classList.add('col-md-6', 'col-lg-7', 'project-card__info')
    infoDiv.appendChild(title)
    infoDiv.appendChild(description)
    infoDiv.appendChild(stack)
    infoDiv.appendChild(stackList)
    infoDiv.appendChild(github)
    infoDiv.appendChild(link)
    let projectDiv = document.createElement('div')
    projectDiv.classList.add('row', 'project-card')
    projectDiv.appendChild(imageDiv)
    projectDiv.appendChild(infoDiv)
    projectsSection.appendChild(projectDiv)
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