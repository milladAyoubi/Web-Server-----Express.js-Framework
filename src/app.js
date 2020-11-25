
const express = require('express')
const path = require('path')



console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const publicDir = path.join(__dirname,'../public')
const app = express()



app.set('view engine', 'hbs')
app.use(express.static(publicDir))

app.get('',(req,res) => {
    res.render('index')
})
app.get('/help', (req,res) => {
    res.send({
        name: 'Ashoka',
        Age: 34,
        
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000')
})



