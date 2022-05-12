const request = require('postman-request')
const forecast = (latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=48a4952785fd35050cd26cc96324b554&query='+latitude+','+longitude+'&units=m'

    request({url, json:true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to weather service', undefined)
        }else if(body.error){
            callback('Unable to find location', undefined)
        }else{
            const info = body.current
            callback(undefined, info.weather_descriptions[0]+'. It is currently '+info.temperature+' degress out. It feels like '+info.feelslike+' degress out.')
        }
    })
}

module.exports = forecast