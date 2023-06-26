import express from 'express'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bodyParser from 'body-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {
    // console.log(req.body)
    let val1 = req.body.num1
    let val12 = req.body.num2
    let sum = Number(val1) + Number(val12)
    res.send(`Sum: ${sum}`)
})

app.listen(port, () => {
    console.log("listening on port " + port)
})
