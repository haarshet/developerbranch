import { LightningElement } from 'lwc';
import WEATHER_ICONS from '@salesforce/resourceUrl/weatherAppIcons'

const API_KEY='af7ce1df776e6163e4a477fcbf227c11'
export default class WeatherApp extends LightningElement {

    clearIcon= WEATHER_ICONS+'/weatherAppIcons/clear.svg'
    cloudIcon = WEATHER_ICONS+'/weatherAppIcons/cloud.svg'
    dropletIcon = WEATHER_ICONS+'/weatherAppIcons/droplet.svg'
    hazleIcon = WEATHER_ICONS+'/weatherAppIcons/hazle.svg'
    mapIcon =  WEATHER_ICONS+'/weatherAppIcons/map.svg'
    rainIcon =  WEATHER_ICONS+'/weatherAppIcons/rain.svg'
    snowIcon =  WEATHER_ICONS+'/weatherAppIcons/snow.svg'
    stormIcon =  WEATHER_ICONS+'/weatherAppIcons/storm.svg'
    thermometerIcon =  WEATHER_ICONS+'/weatherAppIcons/thermometer.svg'
    arrowBackIcon =  WEATHER_ICONS+'/weatherAppIcons/arrow-back.svg'

    cityName='';
    error;
    loadingText='';
    isError= false;
    response;

    get loadingClasses(){
        return this.isError ? 'error-msg' : 'success-msg';
    }
    searchHandler(event){
        this.cityName=event.target.value;
    }

    submitHandler(event){
        event.preventDefault();
        this.fetchData();
    }

    fetchData(){
   this.isError = false
    this.loadingText = 'Fetching weather details...'
    console.log("cityName", this.cityName)
    //inside this will call our api
   
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&units=metric&appid=${API_KEY}`
    fetch(URL).then(res=>res.json()).then(result=>{
        console.log(JSON.stringify(result))
        this.weatherDetails(result)
    }).catch((error)=>{
      console.error(error)
      this.loadingText = "Something went wrong"
      this.isError = true
    })

    }


    weatherDetails(data){
        if(data.cod === '404'){
            this.isError =true;
            this.loadingText =`${this.cityName} isn't valid city name `;
        }else{
            this.loadingText=''
            this.isError = false;
            const city = data.name;
            const country = data.sys.country;
            const {description,Id }= data.weather[0];
            const {temp, feels_like, humidity} = data.main;
        }

        this.response = {
            city:city,
            temperature:Math.floor(temp),
            description: description,
            location: `${city} , ${country}`,
            feels_like: Math.floor(feels_like),
            humidity: `${humididty}%`


        }
    }
}