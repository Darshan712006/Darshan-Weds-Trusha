// ============================
// Wedding Countdown
// ============================

const weddingDate = new Date("March 14, 2027 10:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance < 0) {

        document.getElementById("countdown").innerHTML =
        "<h2>🎉 We Are Married 🎉</h2>";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

}

setInterval(updateCountdown,1000);

updateCountdown();
// ============================
// Music Player
// ============================

let isPlaying = false;

function toggleMusic() {

    const music = document.getElementById("bg-music");
    const button = document.querySelector(".music-btn");

    if (!isPlaying) {

        music.play()
        .then(() => {
            isPlaying = true;
            button.innerHTML = "⏸";
        })
        .catch(() => {
            alert("Tap again to play music 🎵");
        });

    } else {

        music.pause();
        isPlaying = false;
        button.innerHTML = "🎵";

    }

}

// ============================
// Smooth Scroll
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});
