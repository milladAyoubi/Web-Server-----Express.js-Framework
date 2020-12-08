const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=fd4ab5def50a0a0c8d0cfcff7f835846&query=' + latitude + ',' + longitude 

    request({ url, json: true }, (error, {body}) => {
        if (error) 
            callback('Error', undefined)
         else if (body.error) 
            callback('Error', undefined)
         else 
            callback(undefined, {
                                   data : body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress",
                                   time: body.location.localtime
            }
                )
        
    })
}

module.exports = forecast