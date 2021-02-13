
                let x = parseFloat(document.getElementById("highTemp").innerHTML);
                let y = parseFloat(document.getElementById("windSpeed").innerHTML);

                let chillFactor = 35.74 + 0.6125 * x - 35.75 * Math.pow(y, 0.16) + 0.4275 * x * Math.pow(y, 0.16);
                let printedOutput = chillFactor
                if(x > 50 || y <= 3){

                }

                else{
                document.getElementById("output").textContent = "The wind chill factor is " + printedOutput.toFixed(1) + " °F";
                }
