const carousel = document.querySelector(".carousel");
const backgroundMusic = document.getElementById("music-back");
const toggleMusicButton = document.getElementById("buttom");

carousel.addEventListener("mouseover", () => {
    comportamento()
    carousel.style.animationPlayState = "paused";
});

carousel.addEventListener("mouseout", () => {
    comportamento()
    carousel.style.animationPlayState = "running";
});

toggleMusicButton.addEventListener("click", () => {
    comportamento()
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
});

function comportamento() {
    if (window.innerWidth < 450) {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
}


