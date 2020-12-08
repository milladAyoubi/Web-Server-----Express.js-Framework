
console.log('Client side Javascipt file is loaded')



const btn = document.querySelector('.btn')

const locationSelected = document.querySelector('form')
const search = document.querySelector('input')


const view = document.querySelector('#view1')
const locationTitle = document.querySelector('.titleHead')

btn.addEventListener('click', (e) =>{
    e.preventDefault()
    if(search.value != '') {
    const slocation = search.value

    const displaylocation = slocation.charAt(0).toUpperCase() + slocation.substring(1)
    console.log(displaylocation)
    locationTitle.firstElementChild.textContent = displaylocation
    locationTitle.children[1].attributes[0].nodeValue = 'https://img.icons8.com/color/48/000000/skyscrapers.png'
    
       view.textContent = 'Loading!'
       view2.textContent = 'Loading!'
       view3.textContent = 'Loading!'

fetch('/weather?address=' + slocation).then((response) => { 
    response.json().then((data) => {
        if(data.error) 
            console.log(data.error)
        else 
            view.textContent = displaylocation
            view2.textContent = data.forcast
            view3.textContent = data.country
    })
   
})

    }
    else 
        alert('Enter Location')
})
