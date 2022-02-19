const bgImages = ["img/background/bg1.jpg","img/background/bg2.jpg",
                  "img/background/bg3.jpg","img/background/bg4.jpg"];

const chosenImage = bgImages[Math.floor(Math.random() * bgImages.length)];


function bgSelect(){
  console.log([chosenImage]);
  document.body.style.backgroundImage = `url(${[chosenImage]})`;
}
bgSelect();