const projects = require('./projects.json')
const {contentProjects} = require('./content-projects.js')

//
module.exports = [
    {
        title: "Ry's Apps",
        content: `Hello, I am a freelance software developer. I specialize in building websites that use a database. I have also built CLI apps, iOS apps, desktop apps, libraries and video games. You can view my projects on the <a href="/projects">projects page</a>.`,
        filename: 'index.html',
        nav_title: 'home',
        nav_url: '/',
        content_attrs: 'class="non-proj"'
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
        content: `<div style="text-align: center">Ry Ferguson<br><a href="mailto:rytf12@gmail.com">rytf12@gmail.com</a><br><a href="tel:9492732575">(949) 273-2575</a><br><a href="https://github.com/ferg1e">github.com/ferg1e</a></div>`,
        filename: 'contact.html',
        nav_title: 'contact',
        nav_url: '/contact',
        content_attrs: 'class="non-proj"'
    },
]
