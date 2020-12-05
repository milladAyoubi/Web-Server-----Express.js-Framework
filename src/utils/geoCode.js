const request = require('request');




const geoCode = (address,callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoibmlja29saWNlMzk2MyIsImEiOiJja2g0NTUxNjcxNXB0MnJscWUwY3g4YTF4In0.rxPSADky4xlbyZx2V7Xw5g';
  
    request({url, json:true}, (error,{body}) => {
      if(error) {
        callback('Error', undefined);
      }
      else if (body.features.length === 0 ) {
        callback('Error',undefined) 
      }
      else {
  
      callback(undefined, {
          latitude: body.features[0].center[1],
          longitude: body.features[0].center[0],
          location: body.features[0].place_name,
          country: body.features[0].context[1].text 
        
  
      })
    }
  
  
    });
  };
  
  module.exports = geoCode
  
  
  
  
  