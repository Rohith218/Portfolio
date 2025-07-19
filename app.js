document.addEventListener("DOMContentLoaded", function () {
  const about = document.querySelector(".about");
  const home = document.querySelector(".home");
  const rt = document.querySelector(".rt");
  const pf = document.querySelector(".pf");
  const lscroll = document.querySelector(".bleft");
  const rscroll = document.querySelector(".bright");
  const scrollCon = document.querySelector(".webpages");

  if (lscroll) {
    lscroll.addEventListener("click", function (e) {
      e.preventDefault();
      scrollCon.scrollBy({
        left: -200, // scroll LEFT
        behavior: "smooth"
      });
    });
  }
  if (rscroll) {
    rscroll.addEventListener("click", function (e) {
      e.preventDefault();
      scrollCon.scrollBy({
        left: 300, // scroll Right
        behavior: "smooth"
      });
    });
  }
  if (pf) {
    pf.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollBy({
        top: 1120,
        left: 0,
        behavior: "smooth"
      });
    });
  }
  if (about) {
    about.addEventListener("click", function (e) {
      window.scrollBy({
        top: 570,
        left: 0,
        behavior: "smooth"
      });
    });
  }
  if (rt) {
    rt.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });
  }
  if (home) {
    home.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });
  }
  const centerwrap = document.querySelector(".centerwrap");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.2
  });

  if (centerwrap) {
    observer.observe(centerwrap);
  }

  // Animate each .fill bar when it enters viewport
  const fills = document.querySelectorAll(".fill");

  const fillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.4
  });

  fills.forEach(fill => fillObserver.observe(fill));
});