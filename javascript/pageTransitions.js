document.addEventListener("DOMContentLoaded", () => {
  setupNavbarLinks();

  function setupNavbarLinks() {
    const links = document.querySelectorAll("a.nav-link, a.dropdown-item");

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        const href = link.getAttribute("href");
        const isExternal = link.target === "_blank" || href.startsWith("http");

        // Ignore dropdown toggle links or `#` links
        if (href === "#" || link.classList.contains("dropdown-toggle")) {
          return; // Do nothing for dropdown toggles
        }

        if (href && !isExternal) {
          event.preventDefault(); // Prevent default navigation
          document.body.classList.add("page-exit"); // Add transition class
          setTimeout(() => {
            window.location.href = href; // Navigate after transition
          }, 500); // Match CSS transition duration
        }
      });
    });
  }
});
