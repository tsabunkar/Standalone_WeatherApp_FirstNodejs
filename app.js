const yargs = require('yargs');
const _ = require('lodash');
/* const argv = yargs.options({ //options method provide addtional features in yargs module 
    a : {
        demand : true,
        alias : 'address',//gives the 'a' as alias for 'address' flag in the input argument
        describe : 'It is just an address description just to for pgmmers understanding',
        string : true //String takes boolean (ie true/false) this tells yargs to parse string arguments
                    //not to parse number, etc
    }
}).help()
  .alias('help', 'h') //We can also provide the alias of i/p argument using alias() method
  .argv; */
  const argv = yargs.argv;

  const geocode = require('./geocode/geocode');
   /*  var latitude=""; //dont use global vara , bcoz of asynchronous pgmming
    var longitude=""; */
  geocode.geoaddress(argv.a, (errorMess, result)=>{// 2nd argum is callback fun
           
            if(errorMess){
                console.log(errorMess);
            }else{
               /*  latitude =  result.latitude;
                longitude=  result.longitude; */
               
            
                console.log(JSON.stringify(result, undefined, 2))
                fetchTemp(result.latitude, result.longitude);
            }
  });
  //geoaddress will be invoked first then when response is recieved, it will execute the 
  //callback fun present @second argum


//http://developer.forecast.io
  //35bbdd4de745d47674f0848737bba883  -> api key of developer.forecast.io    or   https://darksky.net/dev
  //https://api.darksky.net/forecast/35bbdd4de745d47674f0848737bba883/18.9635751,72.825885
  //https://api.darksky.net/forecast/key/latitude,longitude


  const getWeatherInfo = require('./weather/weather');
 
 var fetchTemp = (latitude,longitude)=>{
   
 //console.log(latitude) //It is empty, bcoz latitude and longitude is not updated to value its still 
  //empty string bcoz the we are not waiting to fetch latitude and longitude value from google api
  //we are just continuing with remaining code by considering the lat & lng value as empty str
  // console.log(longitude)  
   getWeatherInfo.getWeather(latitude, longitude, (errorMess, result) => {
       if(errorMess){
           console.log(errorMess)
       }else{
           console.log(result)
       }
   });

}//end of fetchTemp() annonym fun

