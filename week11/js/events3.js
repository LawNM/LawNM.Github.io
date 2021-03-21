const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);
    const towns = jsonObject["towns"];

        let EventCard1 = document.createElement("section");
        let title1 = document.createElement("h2");
        let hr1 = document.createElement("hr")
        let ul1 = document.createElement("ul")
        let events0 = document.createElement("li");
        let events1 = document.createElement("li");
        let events2 = document.createElement("li");
        let br = document.createElement("br");



        title1.textContent = "Events:";
        
        EventCard1.appendChild(title1);
        EventCard1.appendChild(hr1)
        EventCard1.appendChild(ul1)
        events0.textContent = towns[0].events[0]
        ul1.appendChild(events0);
        events1.textContent = towns[0].events[1]
        ul1.appendChild(events1);
        events2.textContent = towns[0].events[2]
        ul1.appendChild(events2);
        EventCard1.appendChild(br);
        
        document.querySelector("div#EventCard1").appendChild(EventCard1);

       
        
});

