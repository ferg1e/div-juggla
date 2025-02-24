const fs = require('fs')
const pages = require('./pages.js')
const {genHtmlFiles} = require('./gen-html-files.js')

const templateText = fs.readFileSync('template.html', 'utf8')

genHtmlFiles(pages, templateText)
