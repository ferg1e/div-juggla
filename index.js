const fs = require('fs')

const templateText = fs.readFileSync('template.html', 'utf8')

console.log(templateText)
