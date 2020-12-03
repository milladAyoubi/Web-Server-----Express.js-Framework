
const express = require('express')
const path = require('path')
const hbs = require('hbs')



console.log(__dirname)
console.log(path.join(__dirname, '../public'))

//Paths
const partialPath = path.join(__dirname, '../handlebars/partials')
const hbsPath = path.join(__dirname, '../handlebars/views')
const publicDir = path.join(__dirname,'../public')

const app = express()

//Pointers to Views
app.set('view engine', 'hbs')
app.set('views', hbsPath)
hbs.registerPartials(partialPath)

app.use(express.static(publicDir))


app.get('',(req,res) => {
    res.render('index', {
        title: 'Weather App W/ Node.js!',
        subTitle: 'Millad Ayoubi',
        btnName: 'Enter Information'

    })
})

app.get('/products', (req,res) => {
    res.send({
        products: []
    })
})

app.get('/about', (req,res) => {
    res.render('about', {
        title: 'Welcome to the About page!',
        subTitle: 'A demonstation of Handlebars in Express',
        btnName: 'I can make this button say anything!'
    })
})

app.get('/about/*',(req,res) => {

    res.send('About Article Not Found')


})


app.get('*',(req,res) => {
res.send('404 Page Not Found')
})
app.listen(3000, () => {
    console.log('Server is up on port 3000')
})



