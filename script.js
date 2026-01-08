const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "🤭well i'll be looking forward to it. Woooh!";
  gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

const intro = document.getElementById("intro-music");
const yesTrack = document.getElementById("yes-music");

window.addEventListener("click", function startMusic() {
  intro.loop = true;
  intro.volume = 0.7;
  intro.play();
  window.removeEventListener("click", startMusic);
});

yesBtn.addEventListener("click", () => {
  intro.pause();
  intro.currentTime = 0;

  yesTrack.volume = 0;
  yesTrack.loop = true;
  yesTrack.play();

  let v = 0;
  const fade = setInterval(() => {
    v += 0.07;
    yesTrack.volume = Math.min(v, 1);
    if (v >= 1) clearInterval(fade);
  }, 80);
});
