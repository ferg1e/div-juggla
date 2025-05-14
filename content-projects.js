module.exports.contentProjects = (projects) => {
    let out = ''
    const tocLinks = []

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
        tocLinks.push(`<li><a href="#${pid}">${p.title}</a></li>`)
    }

    return `<ul id="projects-nav">${tocLinks.join('')}</ul>` + `<div id="projects">${out}</div>`
}
