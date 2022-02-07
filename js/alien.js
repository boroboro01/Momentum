const alien = document.querySelector("#alien-button");
const talkAlien = document.querySelector("#talk-alien");
const bubbleAlien = document.querySelector(".bubbleAlien");
const content =["*crying*", "Hello friend", "How are you?", "I ate pizza\n yesterday",
                "I want go to a school\n and study math its awsome",
                "I want go to a school\n and play guitar its awsome",
                "I want go to a school\n and hang out firends\n its awsome",
                "I want go to a school\n and Discuss climate\n change and world peace its awsome",
                "I want go to a school\n and write a report on\n liberal democracy and its policies its awsome",
                "I want go to a school\n and do drug its awsome!",
                "I want go to a school\n and bully idiot bitchs\n its awsome!",
                "I want go to a school\n and kill them all its awsome!",
               "https://en.wikipedia.\n org/wiki/Crop_circle", 
                "Cat = God","Could you drive more slowly?",
                "?Ut non nulla ut risus\n ultrices dapibus id non nibh.",
                "?Vestibulum quis lacus\n eleifend, viverra metus vitae, pharetra ipsum.",
               "I'll be an astronaut traveling in space","Please give me some water",
                "Please pray me", "Please get out", "What are you laughing about?",
               "Stop touching me", "Are you listening?", "Fuck!", "Shit!",
               "Fucking slow down!", "This car is a piece of shit\n because it always breaks down",
               "You are such a dork!", "You lucky bastard!", "You have a good family",
               "I love you so much","I love thinking about the future","I knew because I was in love with you.",
               "Darling, did you hear me?", "Darling, sweetheart, come here", "Honey, Do you want some coffee?",
               "Are you feeling better, honey?", "Time is money, honey.", "It happens sometimes, honey.",
               "I love you", "Can you hear me?","Boring", "*sigh*", "*laughing*", "I wanna be your man"];
const audioTalk = new Audio("audio/se/bip.mp3");
let i = 0;
let n = 0;


const audioAlien = new Audio("audio/se/baby.mp3");

function alienHandle(){
    audioAlien.volume = 0.2;
    audioAlien.play();
    setInterval(typing, 300)
    if (i === content[n].length){
        bubbleAlien.textContent = "";
        i = 0;
        n = Math.floor(Math.random() * content.length);
    }
    slangCheck();
}

function typing(){
    if (i < content[n].length) {
        let txt = content[n].charAt(i);
        bubbleAlien.innerHTML += txt=== "\n" ? "<br/>": txt;
        audioTalk.play();
        i++;
    }
}

function slangCheck(){
    if(content[n].indexOf("!") != -1){
        talkAlien.style.color = "red";
    }
    else{
        talkAlien.style.color = "black";
    }
}



alien.addEventListener("click", alienHandle);
