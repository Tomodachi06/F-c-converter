const num = document.getElementById("num");
const toFahrenheit = document.getElementById("toFaren");
const toCelsius = document.getElementById("toCelsius");
const content = document.getElementById("textContent");
let temp;

 const btn = document.getElementById("btn").addEventListener("click",
 function () {
   
   if (toFahrenheit.checked) {
    temp = Number(num.value);
    temp = temp * 9 / 5 + 32;
     content.textContent = temp.toFixed(1)  + "°F";
   } else if(toCelsius.checked){
    temp = Number(num.value);
    temp = (temp - 32) * (5/9);
     content.textContent = temp.toFixed(1)  + "°C";
     
   } else {
     content.innerText ="Choose a unit";
   }
 }
 );