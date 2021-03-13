const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=7fb334586cf67f2a93d9a12e96f99ad5"
fetch (apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log (jsObject);

        document.getElementById("current-temp").textContent = jsObject.main.temp + " °F";
        document.getElementById("description").textContent = jsObject.weather[0].description;
        document.getElementById("humidity").textContent = jsObject.main.humidity + "%";
        document.getElementById("windSpeed").textContent = jsObject.wind.speed + " MPH";
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

        let days = new Array(7);
        days[0] = "Sunday";
        days[1] = "Monday";
        days[2] = "Tuesday";
        days[3] = "Wednesday";
        days[4] = "Thursday";
        days[5] = "Friday";
        days[6] = "Saturday";
        days[7] = "Sunday";
        days[8] = "Monday";
        days[9] = "Tuesday";
        days[10] = "Wednesday";
    
        let day = new Date();
        var d = day.getDay();
        
    
        document.getElementById("dia1").textContent = days[d+1];
        document.getElementById("dia2").textContent = days[d+2];
        document.getElementById("dia3").textContent = days[d+3];
        document.getElementById("dia4").textContent = days[d+4];
        document.getElementById("dia5").textContent = days[d+5];

    })
