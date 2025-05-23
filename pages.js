const projects = require('./projects.json')
const {contentProjects} = require('./content-projects.js')

//
module.exports = [
    {
        title: "Ry's Apps",
        content: `<div id="home">Hello, I am a freelance software developer. I specialize in building websites that use a database. I have also built CLI apps, iOS apps, desktop apps, libraries and video games. You can view my projects on the <a href="/projects">projects page</a>.</div>`,
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
        content: `<div id="contact">Ry Ferguson<br><a href="mailto:rytf12@gmail.com">rytf12@gmail.com</a><br><a href="https://github.com/ferg1e">github.com/ferg1e</a></div>`,
        filename: 'contact.html',
        nav_title: 'contact',
        nav_url: '/contact'
    },
]
