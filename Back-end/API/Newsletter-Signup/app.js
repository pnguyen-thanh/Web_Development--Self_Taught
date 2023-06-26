import express from 'express'
import bodyParser from 'body-parser'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    res.statusCode === 200 ? res.sendFile(__dirname + '/success.html') : res.sendFile(__dirname + '/failure.html')
    console.log(req.body)
})

app.listen(port,() => {
    console.log('listening on port ' + port)
})


// 474eb02761268866856a18a64b15ceb6-us13