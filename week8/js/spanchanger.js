let slider =document.getElementById("stormRating");
let output = document.getElementById("SeverityOutput");
output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value;
}