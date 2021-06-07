const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url = 'http://api.weatherstack.com/current?access_key=8db08cc5518c4f4ac74ecaf2e53efb08&query=37.8267,-122.4233&units=f'
// request({ url: url, json: true }, (error, response) => {
//     // console.log(response.body.current)
//     //console.log(error)
//     if (error) {
//         console.log('Unable to connect to weather service')
//     } else if (response.body.error) {
//         console.log('Unable to find Location')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out. ')
//     }
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2hhcmFudXNhIiwiYSI6ImNrcGh4eWZ2cTBkb3kzMXBjcmY1dHg2eHYifQ.9wtDUMeAboiWxFbg1H3o4A&limit=1'
// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect mapbox service')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find Location, try another search')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }
// })


// geocode('Bagalkot', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })


//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(75.6799, 15.921651, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })