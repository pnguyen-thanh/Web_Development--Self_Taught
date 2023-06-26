import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello, world')
})

app.get('/contact', (req, res) => {
    res.send('Contact: pnguyenthanh0105@gmail.com')
})

app.get('/hobbies', (req, res) => {
    res.send('Hobbies: pnguyenthand')
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})