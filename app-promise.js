const yargs = require('yargs');
const argv = yargs.argv;
const axios = require('axios');

var encodedURI = encodeURIComponent('2 lane kamathipura');
var geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedURI;
var promiseObj = axios.get(geocodeUrl); //axios give us promise Object
 
promiseObj.then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        //If no result is found for the entered search address, then throw this user-define exception
        throw new Error('Unable to find the address !!'); //when this error 
        //is throw it will go the catch block
    }
    var latitude = response.data.results[0].geometry.location.lat;
    var longitude = response.data.results[0].geometry.location.lng;
    var weatherUrl = 'https://api.darksky.net/forecast/35bbdd4de745d47674f0848737bba883/' + latitude + ',' + longitude;
    var promiseObj2 = axios.get(weatherUrl);

    promiseObj2.then((response) => {
        var temperature = response.data.currently.temperature;
        var appartemperature = response.data.currently.apparentTemperature;
        console.log("current temperature is :" + temperature + " It feel likes : " + appartemperature)
    })

}).catch((err) => { //Both the then() fun has common catch
    if (err.code = 'ENOENT') {
        console.log('Unable to connect to Google API')
    } else { //When throw throws its Error, then it will come here, where we can print our user-define 
        //excetption using message property 
        console.log(err.message)
    }
});
