import express from "express"
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import bodyParser from 'body-parser'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmicalculator', (req, res) => {
    console.log(req.body)
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let bmi = weight / (height * height);
    res.send("Your BMI is " + bmi);
})

app.listen(port, (req, res) => {
    console.log('listening on port ' + port)
})