const clear = document.querySelector("#clear-button");
const memo = document.querySelector("#memo-button");

const audioClear = new Audio("audio/se/star.mp3");
const audioMemo = new Audio("audio/se/rustle.mp3");



function clearHandle(){
    audioClear.volume = 0.3;
    audioClear.play();
    localStorage.clear();
    resetWeb();
}
function memoHandle(){
    audioMemo.volume = 0.2;
    audioMemo.play();
}



async function resetWeb(){
    await sleep(1100);
    window.location.reload();
}
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

clear.addEventListener("click", clearHandle);
memo.addEventListener("mouseover", memoHandle);

