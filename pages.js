const projects = require('./projects.json')
const {contentProjects} = require('./content-projects.js')

//
module.exports = [
    {
        title: "Ry's Apps",
        content: `<main id="home">Hello and welcome to my website. I am a JavaScript developer. I build apps using JavaScript combined with other technologies. Please take a look at my JavaScript <a href="#">projects</a>, and <a href="#">contact</a> me if you need a JavaScript developer. I think that is it. Oh, I also specialize in minimalist UIs.</main>`,
        filename: 'index.html',
        nav_title: 'home',
        nav_url: '/'
    },
    {
        title: "Projects",
        content: contentProjects(projects),
        filename: 'projects.html',
        nav_title: 'projects',
        nav_url: '/projects',
    },
    {
        title: "Contact",
        content: `<main id="contact">Ry Ferguson<br><a href="mailto:rytf12@gmail.com">rytf12@gmail.com</a><br><a href="https://github.com/ferg1e">github.com/ferg1e</a></main>`,
        filename: 'contact.html',
        nav_title: 'contact',
        nav_url: '/contact'
    },
]
