const fs = require('fs')
const {getNavItems} = require('./get-nav-items.js')

function genHtmlFiles(pages, templateText) {
    for(let i = 0; i < pages.length; ++i) {
        const page = pages[i]
    
        const html = templateText
            .replace('{{title}}', page.title)
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
}

module.exports.genHtmlFiles = genHtmlFiles
