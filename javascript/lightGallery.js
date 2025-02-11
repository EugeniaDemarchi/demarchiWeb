function initLightGallery() {
  const galleries = document.querySelectorAll(".gallery");
  galleries.forEach((gallery) => {
    lightGallery(gallery, {
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
