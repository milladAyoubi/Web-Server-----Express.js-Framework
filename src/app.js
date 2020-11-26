
const express = require('express')
const path = require('path')



console.log(__dirname)
console.log(path.join(__dirname, '../public'))

//Paths
const hbsPath = path.join(__dirname, '../handlebars')
const publicDir = path.join(__dirname,'../public')

const app = express()

//Pointers to Views
app.set('view engine', 'hbs')
app.set('views', hbsPath)

app.use(express.static(publicDir))


app.get('',(req,res) => {
    res.render('index', {
        title: 'Weather App W/ Node.js!',
        subTitle: 'Millad Ayoubi',
        btnName: 'Enter Information'

    })
})

app.get('/about', (req,res) => {
    res.render('about', {
        title: 'Welcome to the About page!',
        subTitle: 'A demonstation of Handlebars in Express',
        btnName: 'I can make this button say anything!'
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000')
})



