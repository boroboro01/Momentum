const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const greetingBg = document.querySelector("#greeting-bg");
const pahse = document.querySelector("#phase");
const moon = document.querySelector("#moon");
const moonName = document.querySelector("#moon-name");
const description = document.querySelector("#description");
const onlineAudio = new Audio("audio/se/online.mp3");
const connectAudio = new Audio("audio/se/connect.mp3");
const exhaustAudio = new Audio("audio/se/exhaust.mp3");
const printAudio = new Audio("audio/se/print.mp3");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginForm(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Welcome to space ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greetingBg.classList.remove(HIDDEN_CLASSNAME);
    phase.classList.remove(HIDDEN_CLASSNAME);
    moon.classList.remove(HIDDEN_CLASSNAME);
    moonName.classList.remove(HIDDEN_CLASSNAME);
    description.classList.remove(HIDDEN_CLASSNAME);
    onlineAudio.play();
    printAudioPlay();
    exhaustAudioPlay();
    connectAudioPlay();
}

async function printAudioPlay(){
    await sleep(1000);
    printAudio.volume = 0.2;
    printAudio.play();
}
async function exhaustAudioPlay(){
    await sleep(4000);
    exhaustAudio.play();
}
async function connectAudioPlay(){
    await sleep(5000);
    connectAudio.play();
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginForm);
}
else{
    // show the greeting
    paintGreetings();
}