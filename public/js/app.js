
console.log('Client side Javascipt file is loaded')



const btn = document.querySelector('.btn')

const locationSelected = document.querySelector('form')
const search = document.querySelector('input')


const view = document.querySelector('#view1')
const locationTitle = document.querySelector('#locationTitle')

btn.addEventListener('click', (e) =>{
    e.preventDefault()
    if(search.value != '') {
    const slocation = search.value
    console.log(slocation)
        
       locationTitle.textContent = slocation.charAt(0).toUpperCase() + slocation.substring(1)
       view.textContent = 'Loading!'
       view2.textContent = 'Loading!'
       view3.textContent = 'Loading!'

fetch('http://localhost:3000/weather?address=' + slocation).then((response) => { 
    response.json().then((data) => {
        if(data.error) 
            console.log(data.error)
        else 
            view.textContent = data.address
            view2.textContent = data.forcast
            view3.textContent = data.country
    })
   
})

    }
    else 
        alert('Enter Location')
})
