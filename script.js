//array sounds
const soundsArray = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

//play sound
function playSound(element) {
  stopPlaying();
  document.getElementById(element).play();
}
//pause sound
function stopPlaying() {
  soundsArray.forEach((sound) => {
    const melody = document.getElementById(sound);
    melody.pause();
    melody.currentTime = 0;
  });
}
//create button in DOM

async function createButtonsInDOM(element) {
  const button = document.createElement("button");
  button.classList.add("button");
  button.innerHTML = element;
  button.addEventListener("click", () => playSound(element));
  document.getElementById("buttons").appendChild(button);
}

//create button for each sound

soundsArray.forEach((sound) => createButtonsInDOM(sound));
