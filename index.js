const fs = require('fs')
const pages = require('./pages.js')
const {getNavItems} = require('./get-nav-items.js')

const templateText = fs.readFileSync('template.html', 'utf8')

//
for(let i = 0; i < pages.length; ++i) {
    const page = pages[i]

    const html = templateText
        .replace('{{title}}', page.title)
        .replace('{{content_attrs}}', page.content_attrs ? ' ' + page.content_attrs : '')
        .replace('{{content}}', page.content)
        .replace('{{nav_items}}', getNavItems(pages, i))

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
