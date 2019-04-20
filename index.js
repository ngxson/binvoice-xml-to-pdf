var { execFile } = require('child_process')
var fs = require('fs')
var xmlBuffer = fs.readFileSync('./input/invoice.xml')
var templateHTML = fs.readFileSync('./input/template.html').toString()
var app = require('express')()
var random = Math.floor(1 + 10000 * Math.random()).toString()

app.get('/InvoiceTemplate/' + random, (req, res) => {
    res.send(templateHTML)
})

function runProcess() {
    var templateURL = 'http://localhost:3005/InvoiceTemplate/' + random
    var child = execFile('./bin/xml-to-pdf.exe', ['--templateURL', templateURL], {
        encoding: 'binary'
    }, (error, stdout, stderr) => {
        fs.writeFileSync('./output.pdf', stdout, 'binary')
        process.exit()
    })
    child.stdin.write(xmlBuffer)
}

app.listen(3005, runProcess)
