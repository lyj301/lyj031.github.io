document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".navbar-burger").forEach(function(burger) {
    burger.addEventListener("click", function() {
      burger.classList.toggle("is-active");
      document.querySelectorAll(".navbar-menu").forEach(function(menu) {
        menu.classList.toggle("is-active");
      });
    });
  });

  if (window.bulmaCarousel && document.querySelector(".results-carousel")) {
    window.bulmaCarousel.attach(".results-carousel", {
      slidesToScroll: 1,
      slidesToShow: 1,
      loop: true,
      infinite: true,
      autoplay: false,
      pagination: true,
      navigation: true
    });
  }
});
