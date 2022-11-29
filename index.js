'use strict';
const actualAudio = document.querySelector("audio");
const buttonThing = document.querySelector(".playbutton");

let isPlaying = false;

buttonThing.addEventListener("click", function(event) {
    event.preventDefault();

    let playPromise = '';

    if (isPlaying){
        isPlaying = false;
        actualAudio.pause();
    } else {
        isPlaying = true;
        playPromise = actualAudio.play();
    }

    if (playPromise !== undefined) {
    playPromise.then(_ => {
      video.pause();
    })
    .catch(error => {
    });
  }
});