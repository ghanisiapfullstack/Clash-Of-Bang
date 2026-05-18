// Carousel for Latest Updates section

document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("carouselTrack");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const cards = document.querySelectorAll(".update-card");

    if (!track || cards.length === 0) return;

    let currentIndex = 0;

    function getVisibleCount() {
        return window.innerWidth <= 768 ? 1 : 3;
    }

    function updatePosition() {
        const visible = getVisibleCount();
        const maxIndex = cards.length - visible;

        if (currentIndex > maxIndex) currentIndex = maxIndex;
        if (currentIndex < 0) currentIndex = 0;

        const cardWidth = cards[0].getBoundingClientRect().width;
        const gap = 24;
        track.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
    }

    nextBtn.addEventListener("click", () => {
        const maxIndex = cards.length - getVisibleCount();
        currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
        updatePosition();
    });

    prevBtn.addEventListener("click", () => {
        const maxIndex = cards.length - getVisibleCount();
        currentIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
        updatePosition();
    });

    window.addEventListener("resize", updatePosition);

    updatePosition();
});
