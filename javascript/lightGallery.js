// Initialize LightGallery on page load
//initLightGallery();

function initLightGallery() {
  const galleries = document.querySelectorAll(".gallery");
  galleries.forEach((gallery) => {
    lightGallery(gallery, {
      width: "700px",
      height: "470px",
      speed: 500,
      download: false,
      closable: true,
      enableTouch: true,
      controls: true,
      showThumbByDefault: false,
      thumbnail: true,
      mode: "lg-fade",
    });
  });
}

// Initialize LightGallery on page load
initLightGallery();
