const someURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=7fb334586cf67f2a93d9a12e96f99ad5";
fetch(someURL)
.then((response) => response.json())
.then((thatObject) => {
    console.log (thatObject);

      
    if(thatObject.list[5].weather[0].main == "Thunderstorm"){
        document.getElementById("icon1").setAttribute('src', "./images/thundericon.png")
    }
    else if(thatObject.list[5].weather[0].main == "Drizzle"){
        document.getElementById("icon1").setAttribute('src', "./images/rainicon.png")
    }
    else if(thatObject.list[5].weather[0].main == "Rain"){
        document.getElementById("icon1").setAttribute('src', "./images/rainicon.png")
    }
    else if(thatObject.list[5].weather[0].main == "Snow"){
        document.getElementById("icon1").setAttribute('src', "./images/snowicon.png")
    }
    else if(thatObject.list[5].weather[0].main == "Clear"){
        document.getElementById("icon1").setAttribute('src', "./images/sunIcon.png")
    }
    else if(thatObject.list[5].weather[0].main == "Clouds"){
        document.getElementById("icon1").setAttribute('src', "./images/overcastIcon.png")
    }






    if(thatObject.list[13].weather[0].main == "Thunderstorm"){
        document.getElementById("icon2").setAttribute('src', "./images/thundericon.png")
    }
    else if(thatObject.list[13].weather[0].main == "Drizzle"){
        document.getElementById("icon2").setAttribute('src', "./images/rainicon.png")
    }
    else if(thatObject.list[13].weather[0].main == "Rain"){
        document.getElementById("icon2").setAttribute('src', "./images/rainicon.png")
    }
    else if(thatObject.list[13].weather[0].main == "Snow"){
        document.getElementById("icon2").setAttribute('src', "./images/snowicon.png")
    }
    else if(thatObject.list[13].weather[0].main == "Clear"){
        document.getElementById("icon2").setAttribute('src', "./images/sunIcon.png")
    }
    else if(thatObject.list[13].weather[0].main == "Clouds"){
        document.getElementById("icon2").setAttribute('src', "./images/cloudicon.png")
    }







    if(thatObject.list[21].weather[0].main == "Thunderstorm"){
        document.getElementById("icon3").setAttribute('src',"./images/thundericon.png")
    }
    else if(thatObject.list[21].weather[0].main == "Drizzle"){
        document.getElementById("icon3").setAttribute('src', "./images/rainicon.png")
    }
    else if(thatObject.list[21].weather[0].main == "Rain"){
        document.getElementById("icon3").setAttribute('src', "./images/rainicon.png")
    }
    else if(thatObject.list[21].weather[0].main == "Snow"){
        document.getElementById("icon3").setAttribute('src', "./images/snowicon.png")
    }
    else if(thatObject.list[21].weather[0].main == "Clear"){
        document.getElementById("icon3").setAttribute('src', "./images/sunIcon.png")
    }
    else if(thatObject.list[21].weather[0].main == "Clouds"){
        document.getElementById("icon3").setAttribute('src', "./images/cloudicon.png")
    }






    if(thatObject.list[29].weather[0].main == "Thunderstormm"){
        document.getElementById("icon4").setAttribute('src', "./images/thundericon.png")
    }
    else if(thatObject.list[29].weather[0].main == "Drizzle"){
        document.getElementById("icon4").setAttribute('src', "./images/rainicon.png")
    }
    else if(thatObject.list[29].weather[0].main == "Rain"){
        document.getElementById("icon4").setAttribute('src', "./images/rainicon.png")
    }
    else if(thatObject.list[29].weather[0].main == "Snow"){
        document.getElementById("icon4").setAttribute('src', "./images/snowicon.png")
    }
    else if(thatObject.list[29].weather[0].main == "Clear"){
        document.getElementById("icon4").setAttribute('src', "./images/sunIcon.png")
    }
    else if(thatObject.list[29].weather[0].main == "Clouds"){
        document.getElementById("icon4").setAttribute('src', "./images/cloudicon.png")
    }







    if(thatObject.list[37].weather[0].main == "Thunderstormm"){
        document.getElementById("icon5").setAttribute('src', "./images/thundericon.png")
    }
    else if(thatObject.list[37].weather[0].main == "Drizzle"){
        document.getElementById("icon5").setAttribute('src', "./images/rainicon.png")
    }
    else if(thatObject.list[37].weather[0].main == "Rain"){
        document.getElementById("icon5").setAttribute('src', "./images/rainicon.png")
    }
    else if(thatObject.list[37].weather[0].main == "Snow"){
        document.getElementById("icon5").setAttribute('src', "./images/snowicon.png")
    }
    else if(thatObject.list[37].weather[0].main == "Clear"){
        document.getElementById("icon5").setAttribute('src', "./images/sunIcon.png")
    }
    else if(thatObject.list[37].weather[0].main == "Clouds"){
        document.getElementById("icon5").setAttribute('src', "./images/cloudicon.png")
    } 
        
});


s