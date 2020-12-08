const request = require("request");
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geoCode = require('./utils/geoCode')
const forecast = require('./utils/forecast')


console.log(__dirname)
console.log(path.join(__dirname, '../public'))

//Paths
const partialPath = path.join(__dirname, '../handlebars/partials')
const hbsPath = path.join(__dirname, '../handlebars/views')
const publicDir = path.join(__dirname,'../public')

const app = express()
const port = process.env.PORT || 3000 

//Pointers to Views
app.set('view engine', 'hbs')
app.set('views', hbsPath)
hbs.registerPartials(partialPath)

app.use(express.static(publicDir))


app.get('',(req,res) => {
    res.render('index', {
        title: 'Weather App W/ Node.js!',
        subTitle: 'Millad Ayoubi',
        btnName: 'Enter Location'

    })
})

app.get('/weather', (req,res) => {
  
    if(!req.query.address) { 
        return console.log('No Address Entered!')
    }
  
        



geoCode(req.query.address, (error, {latitude, longitude,country} = {}) => {
    if(error) {
        return res.send({error})
    }

    forecast(latitude, longitude, (error, {data,time}) => {
        if(error) {
            return res.send({error})
        }

        res.send({
            forcast: data,
            LocationTime: time,
            address: req.query.address,
            latitude,
            longitude,
            country
        })
    
    })
})

})
app.get('/about', (req,res) => {
    res.render('about', {
        title: 'Welcome to the About page!',
        subTitle: 'A demonstation of Handlebars in Express',
        btnName: 'Enter Location'
    })
})

app.get('/about/*',(req,res) => {

    res.send('About Article Not Found')


})


app.get('*',(req,res) => {
res.send('404 Page Not Found')
})



app.listen(port, () => {
    console.log('Server is up on port 3000')
})



