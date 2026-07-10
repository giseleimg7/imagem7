const cards = Array.from(document.querySelectorAll("[data-video-card]"));

cards.forEach((card) => {
  const button = card.querySelector("[data-toggle-video]");

  if (!button) return;

  button.addEventListener("click", () => {
    const isPaused = card.classList.toggle("is-paused");
    const video = card.querySelector("video");

    if (video) {
      if (isPaused) {
        video.pause();
      } else {
        video.play();
      }
    }

    button.textContent = isPaused ? ">" : "||";
    button.setAttribute("aria-label", isPaused ? "Reproduzir vídeo" : "Pausar vídeo");
  });
});

const services = Array.from(document.querySelectorAll(".service-card"));

services.forEach((service) => {
  service.addEventListener("pointerenter", () => {
    services.forEach((item) => item.classList.remove("active"));
    service.classList.add("active");
  });
});

const revealItems = Array.from(document.querySelectorAll("section, .service-item, .tile"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => {
  item.classList.add("reveal");
  observer.observe(item);
});
