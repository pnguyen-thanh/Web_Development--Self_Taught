const fs = require("fs")

fs.writeFile('test.txt', "Hello from NodeJS!", (err) => {
    if (err) {
        throw err
    }
    console.log("The file has been saved successfully")
})

fs.readFile('test.txt', 'utf8' ,(err, data) => {
    if (err) {
        throw err
    }
    console.log(data)
})