const fs = require('fs')

const templateText = fs.readFileSync('template.html', 'utf8')

const pages = [
    {
        title: "Home",
        content: "home content",
        filename: 'index.html',
    },
    {
        title: "Projects",
        content: "projects content",
        filename: 'projects.html'
    },
]

//
for(let i = 0; i < pages.length; ++i) {
    const page = pages[i]
    const html = templateText
        .replace('{{title}}', page.title)
        .replace('{{content}}', page.content)

    fs.writeFile(
        page.filename,
        html,
        error => {
            if(error) {
                //console.log(error)
            }
            else {
                //console.log('saved')
            }
        }
    )
}
