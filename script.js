
document.getElementById("revealButton").addEventListener("click", function () {
  document.querySelector(".landing").classList.add("hidden");
  document.querySelector(".main-content").classList.remove("hidden");

  // Confetti burst
  const duration = 5 * 1000;
  const end = Date.now() + duration;
  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#bb0000', '#ffffff', '#ff69b4']
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#bb0000', '#ffffff', '#ff69b4']
    });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
});
