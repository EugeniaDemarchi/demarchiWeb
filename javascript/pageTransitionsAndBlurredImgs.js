const swup = new Swup();

// Function to handle blurred images
function handleBlurredImages() {
  document.querySelectorAll(".blurred").forEach((img) => {
    if (img.complete) {
      img.classList.add("loaded");
    } else {
      img.addEventListener("load", () => {
        img.classList.add("loaded");
      });
    }
  });
}

handleBlurredImages();

swup.hooks.on("page:view", () => {
  handleBlurredImages();
});
