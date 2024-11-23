/* function initLightGallery() {
  const galleries = document.querySelectorAll(".gallery");
  galleries.forEach((gallery) => {
    lightGallery(gallery, {
      speed: 500, // Customize LightGallery options here
      download: false,
    });
  });
}

// Initialize LightGallery on page load
initLightGallery();

/* lightGallery(document.querySelector(".gallery"), {
  download: false,
});
 */
function initLightGallery() {
  const galleries = document.querySelectorAll(".gallery");
  galleries.forEach((gallery) => {
    lightGallery(gallery, {
      speed: 500, // Customize LightGallery options here
      download: false, // Option to disable the download button
      closable: true, // Ensure close button is enabled
      enableTouch: true, // Enable touch swipe
      controls: true, // Enable next/prev buttons
      showThumbByDefault: false, // Ensure thumbnails are not shown by default
      thumbnail: true, // Enable thumbnails to show in lightbox
    });
  });
}

// Initialize LightGallery on page load
initLightGallery();
