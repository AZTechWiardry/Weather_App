const apikey="cfeca24e95ba82959ab430326e3a0e69";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");


async function checkwheather(city){
    const response=await fetch(apiurl+city+`&appid=${apikey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await response.json();
        // console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="/IMAGES/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="/IMAGES/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="/IMAGES/rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="/IMAGES/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="/IMAGES/mist.png";
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
}
searchBtn.addEventListener("click",()=>{checkwheather(searchBox.value);})
