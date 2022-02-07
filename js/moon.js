//2022년 2월 1일 삭 기준
const images =["1newMoon.png", "2waxingCrescent.png", "3firstQuarter.png", "4waxingGibbous.png",
              "5fullMoon.png", "6waningGibbous.png", "7lastQuarter.png", "8waningCrescent.png"];
const moonImage = document.createElement("img");
const moonTarget = document.querySelector("#moon");
const nameTarget = document.querySelector("#moon-name");
const desTarget = document.querySelector("#description");



function moonPhase(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let age = (2022-year)*11 + (month-2) + (30-1+day);
    while(true){
        if(age > 30){
            age -= 30;
        }
        else{
            break;
        }
}
    if(age === 0){
        const chosenImage = images[0];
        moonImage.src = `img/moon/${chosenImage} `;
        moonTarget.appendChild(moonImage);
        nameTarget.innerText ="NEW MOON";
        desTarget.innerText ="The new moon is the first lunar phase, when the Moon and Sun have the same ecliptic longitude.";
    }
    else if(1 <= age && age < 7){
        const chosenImage = images[1];
        moonImage.src = `img/moon/${chosenImage} `;
        moonTarget.appendChild(moonImage);
        nameTarget.innerText ="WAXING CRESCENT";
        desTarget.innerText ="The Waxing Crescent Moon starts as the Moon becomes visible again after the New Moon conjunction";
    }
    else if(age === 7 || age === 8){
        const chosenImage = images[2];
        moonImage.src = `img/moon/${chosenImage} `;
        moonTarget.appendChild(moonImage);
        nameTarget.innerText ="FIRST QUARTAR";
        desTarget.innerText ="The moon has traveled 1/4 of the way through its orbit. last quarter phases are sometimes called a Half Moon.";
    }
    else if(9 <= age && age < 15){
        const chosenImage = images[3];
        moonImage.src = `img/moon/${chosenImage} `;
        moonTarget.appendChild(moonImage);
        nameTarget.innerText ="WAXING GIBBOUS";
        desTarget.innerText ="This phase occurs between the first quarter and full Moon and describes the Moon when it is more than half lit, but not yet fully";
    }
    else if(age === 15){
        const chosenImage = images[4];
        moonImage.src = `img/moon/${chosenImage} `;
        moonTarget.appendChild(moonImage);
        nameTarget.innerText ="FULL MOON";
        desTarget.innerText ="The full moon is the lunar phase when the Moon appears fully illuminated from Earth's perspective. Enjoy full moon";
    }
    else if(16 <= age && age < 22){
        const chosenImage = images[5];
        moonImage.src = `img/moon/${chosenImage} `;
        moonTarget.appendChild(moonImage);
        nameTarget.innerText ="WANING GIBBOUS";
        desTarget.innerText ="This phase occurs between the full and last quarter and describes the Moon when it is more than half lit, but not fully.";
    }
     else if(age === 22 || age ===23){
        const chosenImage = images[6];
        moonImage.src = `img/moon/${chosenImage} `;
        moonTarget.appendChild(moonImage);
        nameTarget.innerText ="LAST QUARTAR";
        desTarget.innerText ="The moon has traveled 3/4 of the way through its orbit. This stage is sometimes also called Third Quarter.";
    }
    else if(24 <= age && age < 30){
        const chosenImage = images[7];
        moonImage.src = `img/moon/${chosenImage} `;
        moonTarget.appendChild(moonImage);
        nameTarget.innerText ="WANING CRESCENT";
        desTarget.innerText ="The Waning Crescent Moon phase is an intermediate phase, and it's the last of the lunar month. It comes before the New Moon";
    }
    else{
    }
}



moonPhase();



