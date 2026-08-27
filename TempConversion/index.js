const myTextbox = document.getElementById("mytextbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
let result = document.getElementById("result");
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(myTextbox.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + "F°";
    }else if (toCelsius.checked){
        temp = Number(myTextbox.value);
        temp = (temp-32)*(5/9);
        result.textContent = temp.toFixed(1) + "F°";
    }else{
        result.textContent = "Select a Unit";
    }
}
