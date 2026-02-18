<script>
  window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    const scroll = window.scrollY;
    hero.style.backgroundPositionY = `${scroll * 0.3}px`;
  });
</script>
