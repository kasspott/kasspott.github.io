const video = document.getElementById("film");
const source = document.getElementById("filmSrc");
const button1 = document.getElementById("przycisk1");
const button2 = document.getElementById("przycisk2");
const nextBtn = document.getElementById("startNext");

let filmNr = 1;

video.addEventListener("ended", () => {
  if (filmNr === 1) {
    button1.style.display = "block";
  } else if (filmNr === 2) {
    button2.style.display = "block";
  }
});

nextBtn.addEventListener("click", () => {
  source.src = "src/2.mp4";
  video.load();
  video.play();
  button1.style.display = "none";
  filmNr = 2;
});
