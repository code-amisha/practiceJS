function rollDice(){
    const myInput = document.getElementById("myInput").value;
    const myResult = document.getElementById("myResult");
    const myImage = document.getElementById("myImage");
    const values =[];
    const images =[];

    for(let i = 0 ; i < myInput; i++){
        const value = Math.floor(Math.random()* 6) + 1;
        values.push(value);
        images.push(`<img src ="/Dice _Roller/image/${value}.jpg">`);
    }

    myResult.textContent = `Dice : ${values.join(",")}`;
    myImage.innerHTML = `${images.join(" ")}`; 
}