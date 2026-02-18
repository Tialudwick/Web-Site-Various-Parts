
  window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    const scroll = window.scrollY;
    hero.style.backgroundPositionY = `${scroll * 0.3}px`;
  });




  window.addEventListener("scroll", () => {
    const nav = document.getElementById("mainNav");
    nav.classList.toggle("scrolled", window.scrollY > 50);
  });
