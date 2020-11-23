
const express = require('express')


const app = express()


app.get('', (req, res) => {
    res.send('Hello Express!')
})


app.get('/help', (req,res) => {
    res.send('<h1>Obi-Wan: Hello There!</h1>')
})



app.get('/about', (req,res) => {
    res.send('<h1>GENERAL KENOBI!!!!</h1>')
})



app.get('/weather', (req,res) => {
    res.send('<h1>This is the Weather Tab</h1>')
})
app.listen(3000, () => {
    console.log('Server is up on port 3000')
})