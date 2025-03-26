document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");

  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  closeMenu.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
  });

  // Close menu when clicking outside
  mobileMenu.addEventListener("click", function (e) {
    if (e.target === mobileMenu) {
      mobileMenu.classList.add("hidden");
    }
  });
});
