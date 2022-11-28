'use strict';
const actualAudio = document.querySelector("audio");
const buttonThing = document.querySelector(".playbutton");

let isPlaying = false;

buttonThing.addEventListener("click", function(event) {
    event.preventDefault();

    if (isPlaying){
        isPlaying = false;
        actualAudio.pause();
    } else {
        isPlaying = true;
        actualAudio.play();
    }

    
});


