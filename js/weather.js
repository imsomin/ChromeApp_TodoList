const API_KEY = "APIKEY";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    //fetch를 사용해서 URL을 얻을 수 있다
    //Javascript는 url을 부르고, 해당 정보를 얻었을 때 요구사항을 Javascript에게 말해주어야 한다
    //fetch는 일종의 promise이다. 즉 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는 것이다
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


