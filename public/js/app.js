
console.log('Client side Javascipt file is loaded')

fetch('http://localhost:3000/weather?address=New%20York').then((response) => { 
    response.json().then((data) => {
        if(data.error) 
            console.log(data.error)
        else 
            console.log(data)
    })
   
})
