const someURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=7fb334586cf67f2a93d9a12e96f99ad5"
fetch (someURL)
    .then((response) => response.json())
    .then((thatObject) => {
        console.log (thatObject);

        if(thatObject.list[5].weather.main == "Thunderstrom"){
            document.getElementById("icon1").setAttribute('src', week10/images/thundericon.png)
        }
        else if(thatObject.list[5].weather.main == "Drizzle"){
            document.getElementById("icon1").setAttribute('src', week10/images/rainicon.png)
        }
        else if(thatObject.list[5].weather.main == "Rain"){
            document.getElementById("icon1").setAttribute('src', week10/images/rainicon.png)
        }
        else if(thatObject.list[5].weather.main == "Snow"){
            document.getElementById("icon1").setAttribute('src', week10/images/snowicon.png)
        }
        else if(thatObject.list[5].weather.main == "Clear"){
            document.getElementById("icon1").setAttribute('src', week10/images/sunIcon.png)
        }
        else if(thatObject.list[5].weather.main == "Clouds"){
            document.getElementById("icon1").setAttribute('src', week10/images/cloudicon.png)
        }






        if(thatObject.list[13].weather.main == "Thunderstrom"){
            document.getElementById("icon2").setAttribute('src', week10/images/thundericon.png)
        }
        else if(thatObject.list[13].weather.main == "Drizzle"){
            document.getElementById("icon2").setAttribute('src', week10/images/rainicon.png)
        }
        else if(thatObject.list[13].weather.main == "Rain"){
            document.getElementById("icon2").setAttribute('src', week10/images/rainicon.png)
        }
        else if(thatObject.list[13].weather.main == "Snow"){
            document.getElementById("icon2").setAttribute('src', week10/images/snowicon.png)
        }
        else if(thatObject.list[13].weather.main == "Clear"){
            document.getElementById("icon2").setAttribute('src', week10/images/sunIcon.png)
        }
        else if(thatObject.list[13].weather.main == "Clouds"){
            document.getElementById("icon2").setAttribute('src', week10/images/cloudicon.png)
        }







        if(thatObject.list[21].weather.main == "Thunderstrom"){
            document.getElementById("icon3").setAttribute('src', week10/images/thundericon.png)
        }
        else if(thatObject.list[21].weather.main == "Drizzle"){
            document.getElementById("icon3").setAttribute('src', week10/images/rainicon.png)
        }
        else if(thatObject.list[21].weather.main == "Rain"){
            document.getElementById("icon3").setAttribute('src', week10/images/rainicon.png)
        }
        else if(thatObject.list[21].weather.main == "Snow"){
            document.getElementById("icon3").setAttribute('src', week10/images/snowicon.png)
        }
        else if(thatObject.list[21].weather.main == "Clear"){
            document.getElementById("icon3").setAttribute('src', week10/images/sunIcon.png)
        }
        else if(thatObject.list[21].weather.main == "Clouds"){
            document.getElementById("icon3").setAttribute('src', week10/images/cloudicon.png)
        }






        if(thatObject.list[29].weather.main == "Thunderstrom"){
            document.getElementById("icon1").setAttribute('src', /week10/images/thundericon.png)
        }
        else if(thatObject.list[91].weather.main == "Drizzle"){
            document.getElementById("icon1").setAttribute('src', /week10/images/rainicon.png)
        }
        else if(thatObject.list[29].weather.main == "Rain"){
            document.getElementById("icon1").setAttribute('src', /week10/images/rainicon.png)
        }
        else if(thatObject.list[29].weather.main == "Snow"){
            document.getElementById("icon1").setAttribute('src', /week10/images/snowicon.png)
        }
        else if(thatObject.list[29].weather.main == "Clear"){
            document.getElementById("icon1").setAttribute('src', /week10/images/sunIcon.png)
        }
        else if(thatObject.list[29].weather.main == "Clouds"){
            document.getElementById("icon1").setAttribute('src', /week10/images/cloudicon.png)
        }







        if(thatObject.list[37].weather.main == "Thunderstrom"){
            document.getElementById("icon1").setAttribute('src', /week10/images/thundericon.png)
        }
        else if(thatObject.list[37].weather.main == "Drizzle"){
            document.getElementById("icon1").setAttribute('src', /week10/images/rainicon.png)
        }
        else if(thatObject.list[37].weather.main == "Rain"){
            document.getElementById("icon1").setAttribute('src', /week10/images/rainicon.png)
        }
        else if(thatObject.list[37].weather.main == "Snow"){
            document.getElementById("icon1").setAttribute('src', /week10/images/snowicon.png)
        }
        else if(thatObject.list[37].weather.main == "Clear"){
            document.getElementById("icon1").setAttribute('src', /week10/images/sunIcon.png)
        }
        else if(thatObject.list[37].weather.main == "Clouds"){
            document.getElementById("icon1").setAttribute('src', /week10/images/cloudicon.png)
        }




    })