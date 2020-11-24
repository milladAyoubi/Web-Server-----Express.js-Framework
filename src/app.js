
const express = require('express')
const path = require('path')



console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const publicDir = path.join(__dirname,'../public')
const app = express()

app.use(express.static(publicDir))



app.get('/help', (req,res) => {
    res.send({
        name: 'Ashoka',
        Age: 34,
        
    })
})

app.get('/about', (req,res) => {
    res.send([{
        title: "Node"
    },
    {
        title: "Clone"
    }
])
})

app.get('/weather', (req,res) => {
    res.send('<h1>This is the Weather Tab</h1>')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})



