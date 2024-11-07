/* const images = document.querySelectorAll("img");

images.forEach((img) => {
  img.classList.add("blurred");
  img.onload = () => {
    img.classList.remove("blurred");
  };
});
 */
document.querySelectorAll(".blurred").forEach((img) => {
  img.addEventListener("load", () => {
    img.classList.add("loaded"); // Adds 'loaded' class when the image is loaded
  });
});
