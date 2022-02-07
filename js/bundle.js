const light = document.querySelector("#light-button");
const lightBunddle = document.querySelector("#light-bunddle");
const bubbleLight = document.querySelector(".bubbleLight");

const script = ["1. Login for saving date", "2. Make your to-do list", 
                "3. Footer show you The Moon Phase today",
               "4. You can check date, temperature, quotation",
               "5. Click emojis! They have event"];

const audioPop = new Audio("audio/se/pop.mp3");
let z = 1;

function lightText(){
    light.classList.add("paused");
    audioPop.volume = 0.2;
    audioPop.play();
    showScript();
    if(z === 5){
        z = 0;
    }
}

function showScript(){
        bubbleLight.textContent = "";
        bubbleLight.textContent = script[z];
        z++;
}


light.addEventListener("click", lightText);
