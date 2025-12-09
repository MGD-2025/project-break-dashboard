
// Ciudad y Pais. Pondremos la ciudad y País en el que nos encontramos. name, country
// El estado del clima."condition": {
     // "text": "Sunny",
      //icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
    //code": 1000
 
//Imagen y grados celsius de nuestra ciudad.temp_c
// Precipitaciones, humedad y viento km/h. "wind_kph", "humidity","precip_mm":
//La previsión por horas en el día en el que estamos. Con su hora, imagen y grados celsius. 
//

const tiempoactual = document.getElementById('tiempoactual')
const tiempohoras = document.getElementById ('tiempohoras')

async function getWeather (){
    try{
    const response = await fetch ('https://api.weatherapi.com/v1/current.json?key=0a420d54d80041878c9183548250312&q=Madrid&aqi=no')
    const data = await response.json()
    return data
} catch (err){
    }
}
getWeather().then(data=> {
    const {name, country} = data.location
    const {condition:{text},condition:{icon}, temp_c, wind_kph, humidity,precip_mm }= data.current
    const template = `
        <div>
            <article>
                <h3>${name}/${country}</h3>
                <h3>${text}</h3>
            </article>
            <section>
                <img src=${icon} alt='tiempo'/>
                <p>Temperatura: ${temp_c}</p>
                <p>Viento: ${wind_kph}</p>
                <p>Humedad: ${humidity}</p>
                <p>Precipitaciones: ${precip_mm}</p>
            </section>
        </div>
        `
    tiempoactual.innerHTML = template
})
  

async function WeatherHours (){
    try{
    const response = await fetch ('https://api.weatherapi.com/v1/forecast.json?key=0a420d54d80041878c9183548250312&q=Madrid&aqi=no')
    const data = await response.json()
    return data
} catch (err){
    }
}
WeatherHours ().then(data=>{
    const forecast = data.forecast.forecastday[0].hour 
    let prevision = forecast.map (hora =>{
        const {time,temp_c, condition:{icon}} = hora
        return `
            <div>
                <p>${time}</p>
                <img src=${icon} alt='icono'/>
                <p>${temp_c}</p>
                
            </div>
            `
        }) 

prevision = prevision.join ('')

tiempohoras.innerHTML=prevision
})
        