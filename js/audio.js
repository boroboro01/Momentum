const playButton = document.querySelector("#play-button");
const stopButton = document.querySelector("#stop-button");
const audioBGM = new Audio("audio/bgm.mp3");
const audioSHspeak = new Audio("audio/SHspeak.mp3");
const audioClassic = new Audio("audio/classic.mp3");
const audioComedy = new Audio("audio/comedy.mp3");
const audioNuriho = new Audio("audio/nuriho.mp3");
const audioSupergirl = new Audio("audio/supergirl.mp3");
const audioSwitch = new Audio("audio/se/switch.mp3");




const list = [audioBGM, audioSHspeak, audioClassic, audioComedy, audioNuriho, audioSupergirl];
let check = 0;

function playOrNot(){
    if(check === 0){
        audioSwitch.volume = 0.4;
        audioSwitch.play();
        list[check].volume = 0.1;
        list[check].play();
        check += 1;
    }
    else if(check === 1){
        audioHandle();
        check += 1;
    }
    else if(check === 2){
        audioHandle();
        check += 1;
    }
    else if(check === 3){
        audioHandle();
        check += 1;
    }
    else if(check === 4){
        audioHandle();
        check += 1;
    }
    else if(check === 5){
        audioHandle();
        check += 1;
    }
    else{
        audioSwitch.play();
        list[check-1].currentTime = 0;
        list[check-1].pause();
        check = 0;
    }
}


function audioHandle(){
    audioSwitch.volume = 0.4;
    audioSwitch.play();
    list[check-1].currentTime = 0;
    list[check-1].pause();
    list[check].volume = 0.1;
    list[check].play();
}

playButton.addEventListener("click", playOrNot);