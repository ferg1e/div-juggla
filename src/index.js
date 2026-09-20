const fs = require('fs')
const path = require('path')
const pages = require('./pages.js')
const {genHtmlFiles} = require('./gen-html-files.js')

const templatePath = path.resolve(__dirname, 'template.html')
const templateText = fs.readFileSync(templatePath, 'utf8')

genHtmlFiles(pages, templateText)
