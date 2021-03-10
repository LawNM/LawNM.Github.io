const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=7fb334586cf67f2a93d9a12e96f99ad5";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
  });
