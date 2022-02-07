const API_KEY = "daec4cc0d85df5e03b9df3a0a1aa53bc"


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(position);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then((data)=>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main}/ ${data.main.temp}`;
        city.innerText = data.name;
    });
}



function onGeoErr(){
    alert("We can't find your locaiton.")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);