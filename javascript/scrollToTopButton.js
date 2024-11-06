const scrollToTopButton = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollToTopButton.classList.remove("hidden");
  } else {
    scrollToTopButton.classList.add("hidden");
  }
});
scrollToTopButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
