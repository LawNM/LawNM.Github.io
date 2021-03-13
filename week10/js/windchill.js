const otherURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=7fb334586cf67f2a93d9a12e96f99ad5"
fetch (otherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log (jsObject);

        let x = jsObject.main.temp;
        let y = jsObject.wind.speed; 

        let chillFactor = 35.74 + 0.6125 * x - 35.75 * Math.pow(y, 0.16) + 0.4275 * x * Math.pow(y, 0.16);
        let printedOutput = chillFactor
        if(x > 50 || y <= 3){
            document.getElementById("output").textContent = "N/A"
        }

        else{
        document.getElementById("output").textContent =  printedOutput.toFixed(1) + " °F";
        }


    })

