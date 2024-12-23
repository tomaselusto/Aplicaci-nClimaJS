const urlBase= 'https://api.openweathermap.org/data/2.5/weather'  //?q={city name}&appid={API key}
const API_KEY='API - KEY' //la saco para que no quede publica
const difKelvin= 273.15

document.getElementById('searchButton').addEventListener('click',() => {
    const city= document.getElementById('cityInput').value;
    if(city){
        fetchWeather(city)
    }
    else{
        alert('ingrese una ciudad válida')
    }
})

function fetchWeather(city){
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}`)
    .then(data=> data.json())
    .then (data => showWeatherdata(data))
}

function showWeatherdata(data){
    const divResponseData= document.getElementById('responseData')
    divResponseData.innerHTML=''
    const cityName=data.name
    const countryName= data.sys.country
    const temp= data.main.temp
    const description= data.weather[0].description
    const icon=data.weather[0].icon

    const cityInfo= document.createElement('h2')
    cityInfo.textContent=`${cityName}, ${countryName}`
    const tempInfo= document.createElement('p')
    tempInfo.textContent=`La temperatura es ${Math.floor(temp-difKelvin)}°C`

    const iconInfo=document.createElement('img')
    iconInfo.src=`https://openweathermap.org/img/wn/${icon}@2x.png`

    const descriptionInfo= document.createElement('p')
    descriptionInfo.textContent=`Descipción: ${description}`

    divResponseData.appendChild(cityInfo)
    divResponseData.appendChild(tempInfo)
    divResponseData.appendChild(iconInfo)
    divResponseData.appendChild(descriptionInfo)
    
}