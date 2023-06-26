import express from "express"
import http from "http"

const app = express()
const port = 3000

app.get('/', (req, res) => {
    http.get("http://openweathermap.org/data/2.5/weather?q=London&appid=e72ca729af228beabd5d20e3b7749713&units=metric", (response) => {
        console.log(response.statusCode)
        res.on("data", (data) => {
            JSON.parse(data)
        })
    })
})

app.listen(port, () => {
    console.log('listening on port ' + port)
})