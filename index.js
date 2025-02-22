const fs = require('fs')
const pages = require('./pages.js')

const templateText = fs.readFileSync('template.html', 'utf8')

//
function getNavItems(pages, currPage) {
    let r = ''

    for(let i = 0; i < pages.length; ++i) {
        const p = pages[i]
        const cssClass = i == currPage
            ? ' class="curr-nav"'
            : ''

        r += `<li><a href="${p.nav_url}"${cssClass}>${p.nav_title}</a></li>`
    }

    return r
}

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
