export function contentProjects(projects) {
    projects.sort((a, b) => b.order - a.order)

    let projectsHtml = ''
    const orderValues = []

    for(const p of projects) {
        const title = `<h1>${p.title}</h1>`
        const gitHubLink = `<a class="github" href="${p.github}">GitHub</a>`
        const content = `<p>${p.content} ${gitHubLink}</p>`

        projectsHtml += title + content
        orderValues.push(p.order)
    }

    if(orderValues.length != [...new Set(orderValues)].length) {
        throw new Error('same order value used more than once')
    }

    return `<main id="projects">${projectsHtml}</main>`
}
