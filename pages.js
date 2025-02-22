module.exports = [
    {
        title: "Ry's Apps",
        content: `Hello, I am a freelance software developer. I usually develop web apps. I have also built CLI apps, iOS apps, desktop apps, libraries and video games. You can see past projects on the <a href="/projects">projects page</a>.`,
        filename: 'index.html',
        nav_title: 'home',
        nav_url: '/',
        content_attrs: 'class="non-proj"'
    },
    {
        title: "Projects",
        content: contentProjects(),
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

//
function contentProjects() {
    const projects = require('./projects.json')
    let out = ''

    for(let i = 0; i < projects.length; ++i) {
        const p = projects[i]
        const pid = p.title.toLowerCase().split(' ').join('-')
        let imagesHtml = ''

        if(p.images && p.images.length > 0) {
            imagesHtml += '<ul class="thumbs">'

            for(let j = 0; j < p.images.length; ++j) {
                const o = p.images[j]

                imagesHtml += `<li><a href="${o.image}"><img src="${o.thumb}"></a></li>`
            }

            imagesHtml += '</ul>'
        }

        //
        let stackHtml = ''
        const isStack = p.stack && p.stack.length > 0
        const isGitVis = typeof p.git_vis !== 'undefined'
        const isGitHub = typeof p.github !== 'undefined'
        
        if(isStack || isGitVis || isGitHub) {
            stackHtml += '<ul class="stack">'

            if(isStack) {
                for(let j = 0; j < p.stack.length; ++j) {
                    stackHtml += `<li><em>${p.stack[j]}</em></li>`
                }
            }

            if(isGitVis) {
                stackHtml += `<li><a href="${p.git_vis}">Git</a></li>`
            }

            if(isGitHub) {
                stackHtml += `<li><a class="github" href="${p.github}">GitHub</a></li>`
            }

            stackHtml += '</ul>'
        }

        //
        const h2Html = `<h2><a href="#${pid}">${p.title}</a></h2>`
        const contentHtml = `<div>${p.content}</div>`

        out += `<div id="${pid}" class="proj">${h2Html}${contentHtml}${stackHtml}${imagesHtml}</div>`
    }

    return out
}
