const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiY2hlY2hvY2FzdGUiLCJhIjoiY2wyd2piaTdjMG1sMjNjb2E5MjB6MXBqciJ9.vEEWa5eBjLM51ryr5EwJsA'
    request({url, json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to location services', undefined)
        }else if(body.features.length === 0){
            callback('Unable to find location', undefined)
        }else{
            const latitude = body.features[0].center[1]
            const longitude = body.features[0].center[0]
            callback(undefined, {
                latitude: latitude, 
                longitude: longitude, 
                location: body.features[0].place_name
            });
        }
    })
}

module.exports= geocode