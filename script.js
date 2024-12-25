document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("bg-music");
    audio.volume = 0.25;
})

function togglePlay() {
    let audio = document.getElementById("bg-music");

    if (audio.paused) {
        audio.play()
    }
    else {
        audio.pause()
    }
}