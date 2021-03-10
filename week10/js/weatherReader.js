const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=7fb334586cf67f2a93d9a12e96f99ad5"
fetch (apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log (jsObject);

        document.getElementById("current-temp").textContent = " " + jsObject.main.temp + " °F";
        document.getElementById("description").textContent = " " + jsObject.weather[0].description;
        document.getElementById("humidity").textContent = " " + jsObject.main.humidity + "%";
        document.getElementById("windSpeed").textContent = " " + jsObject.wind.speed + " MPH";
    })

    const castURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=7fb334586cf67f2a93d9a12e96f99ad5"
fetch (castURL)
    .then((response) => response.json())
    .then((newObject) => {
        console.log (newObject);

        document.getElementById("mon").textContent = newObject.list[5].main.temp;
        document.getElementById("tue").textContent = newObject.list[13].main.temp;
        document.getElementById("wed").textContent = newObject.list[21].main.temp;
        document.getElementById("thur").textContent = newObject.list[29].main.temp;
        document.getElementById("fri").textContent = newObject.list[37].main.temp;
    })

    document.getElementById("description").innerText.charAt(0).toUpperCase();