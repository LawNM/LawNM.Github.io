const file = "./stores.json";

fetch(file)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);
    const stores = jsonObject["stores"];
    for(let i = 0; i < stores.length; i++){
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let owner = document.createElement("p");
        let phone = document.createElement("p");
        let address = document.createElement("p");
        let hours = document.createElement("p");
        let img = document.createElement("img");

        h2.textContent = stores[i].name;
        owner.textContent = "Owner: " + stores[i].owner;
        phone.textContent = "Phone: " + stores[i].phone;
        address.textContent = "Address: " + stores[i].address;
        hours.textContent = "Hours: " + stores[i].hours;
        img.setAttribute("src", stores[i].pic);
        card.setAttribute("class","cardNo"+[i]);

        card.appendChild(h2);
        card.appendChild(img);
        card.appendChild(owner);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(hours)


        

        document.querySelector("div.cards").appendChild(card);
    }
    image.setAttribute
});

