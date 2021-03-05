const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);
    const towns = jsonObject["towns"];

        let Card1 = document.createElement("section");
        let Card2 = document.createElement("section");
        let Card3 = document.createElement("section");
        let title1 = document.createElement("h2");
        let title2 = document.createElement("h2");
        let title3 = document.createElement("h2");
        let motto1 = document.createElement("p");
        let motto2 = document.createElement("p");
        let motto3 = document.createElement("p");
        let founded1 = document.createElement("p");
        let founded2 = document.createElement("p");
        let founded3 = document.createElement("p");
        let pop1 = document.createElement("p");
        let pop2 = document.createElement("p");
        let pop3 = document.createElement("p");
        let rain1 = document.createElement("p");     
        let rain2 = document.createElement("p"); 
        let rain3 = document.createElement("p"); 


        title1.textContent = towns[5].name;
        motto1.textContent = towns[5].motto;
        founded1.textContent = "Year Founded: " + towns[5].yearFounded;
        pop1.textContent = "Population: " + towns[5].currentPopulation;
        rain1.textContent = "Average Rainfall: " + towns[5].averageRainfall;
        Card1.appendChild(title1);
        Card1.appendChild(motto1);
        Card1.appendChild(founded1);
        Card1.appendChild(pop1);
        Card1.appendChild(rain1);
        document.querySelector("div#card1").appendChild(Card1);

        title2.textContent = towns[6].name;
        motto2.textContent = towns[6].motto;
        founded2.textContent = "Year Founded " + towns[6].yearFounded;
        pop2.textContent = "Population: " + towns[6].currentPopulation;
        rain2.textContent = "Average Rainfall: " + towns[6].averageRainfall;
        Card2.appendChild(title2);
        Card2.appendChild(motto2);
        Card2.appendChild(founded2);
        Card2.appendChild(pop2);
        Card2.appendChild(rain2);
        document.querySelector("div#card2").appendChild(Card2);

        title3.textContent = towns[1].name;
        motto3.textContent = towns[1].motto;
        founded3.textContent = "Year Founded " + towns[1].yearFounded;
        pop3.textContent = "Population: " + towns[1].currentPopulation;
        rain3.textContent = "Average Rainfall: " + towns[1].averageRainfall;
        Card3.appendChild(title3);
        Card3.appendChild(motto3);
        Card3.appendChild(founded3);
        Card3.appendChild(pop3);
        Card3.appendChild(rain3);
        document.querySelector("div#card3").appendChild(Card3);

        
        
});

