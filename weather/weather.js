const request = require('request');

var getWeather = (latitude, longitude, myCallback) =>{
request({
    url : 'https://api.darksky.net/forecast/35bbdd4de745d47674f0848737bba883/'+latitude+','+longitude,
    json : true 
 }, (error, response, body) =>{
       if(error){
        myCallback('Unable to connect leto forestcast.io API')
       }
       else if(response.statusCode === 404){
        myCallback('Unable to make request something wrong the client side request')
       }
       else if(response.statusCode === 200){
           var faher = body.currently.temperature;
           var cel = (faher-32)* (5/9);
           var actualTemp_faher = body.currently.apparentTemperature;
           var actualTemp_cel = (actualTemp_faher-32)* (5/9);

           myCallback(undefined,'Current temperature is (in F): '+faher+' But actual is : '+actualTemp_faher)
           myCallback(undefined,'Current temperature is (in C): '+Math.round(cel)+' But actual is : '+Math.round(actualTemp_cel));
        }
       else{
        myCallback('Unable to fetch, developer dont know this scenario !!')
       }
  
 })

}//end of getWeather var(annon fun)
5
module.exports ={
    getWeather
}

