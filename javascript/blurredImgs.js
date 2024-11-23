function handleBlurredImages() {
  document.querySelectorAll(".blurred").forEach((img) => {
    if (img.complete) {
      img.classList.add("loaded");
    } else {
      img.addEventListener("load", () => img.classList.add("loaded"), {
        once: true,
      });
    }
  });
}

handleBlurredImages();
