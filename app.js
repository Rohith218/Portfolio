document.addEventListener("DOMContentLoaded", function () {
  const about = document.querySelector(".about");
  const about11 = document.querySelector(".about11q");
  const home = document.querySelector(".home");
  const home1 = document.querySelector(".home1q");
  const rt = document.querySelector(".rt");
  const pf = document.querySelector(".pf");
  const pf1 = document.querySelector(".pf1q");
  const contact = document.querySelector(".contact1");
  const contact1 = document.querySelector(".contact1q");
  const lscroll = document.querySelector(".bleft");
  const rscroll = document.querySelector(".bright");
  const scrollCon = document.querySelector(".webpages");
  const toggle = document.querySelector(".toggle");
  const side = document.querySelector(".righthexp");
  const righth = document.querySelector(".righth");
  window.onload = function () {
    window.showSlideBar = function () {
      side.style.display = "flex";
      // toggle.style.display = "none";
    };

    window.closeSlideBar = function () {
      side.style.display = "none";
      // toggle.style.display = "contents";
    };
  };
  if (lscroll) {
    lscroll.addEventListener("click", function (e) {
      e.preventDefault();
      scrollCon.scrollBy({
        left: -300, // scroll LEFT
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
  if (pf || pf1) {
    pf.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollBy({
        top: 1120,
        left: 0,
        behavior: "smooth"
      });
    });
    pf1.addEventListener("click", function (e) {
      e.preventDefault();
      side.style.display = "none";
      window.scrollBy({
        top: 1120,
        left: 0,
        behavior: "smooth"
      });
    });
  }
  if (about || about11) {
    about.addEventListener("click", function (e) {
      side.style.display = "none";
      window.scrollBy({
        top: 570,
        left: 0,
        behavior: "smooth"
      });
    });
    about11.addEventListener("click", function (e) {
      side.style.display = "none";
      window.scrollBy({
        top: 570,
        left: 0,
        behavior: "smooth"
      });
    });
  }
  if (contact || contact1) {
    contact.addEventListener("click", function (e) {
      side.style.display = "none";
      window.scrollBy({
        top: 2100,
        left: 0,
        behavior: "smooth"
      });
    });
    contact1.addEventListener("click", function (e) {
      side.style.display = "none";
      window.scrollBy({
        top: 2100,
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
  if (home1) {
    home1.addEventListener("click", function (e) {
      side.style.display = "none";
    })
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

  const roles = [" Quality Engineer", " Code Curious QA", " Automation Tester", " Tech Enthusiast"];
  const text = document.querySelector(".typed-text");
  let rowindex = 0;
  let charindex = 0;
  function type() {
    if (charindex < roles[rowindex].length) {
      text.textContent += roles[rowindex].charAt(charindex);
      charindex = charindex + 1;
      setTimeout(type, 200);
    } else {
      setTimeout(erase, 1500);
    }
  }
  function erase() {
    if (charindex >= 0) {
      text.textContent = "";
      text.textContent += roles[rowindex].substring(0, charindex - 1);
      charindex = charindex - 1;
      setTimeout(erase, 200);
    } else {
      if (rowindex >= roles.length - 1) {
        rowindex = 0;
      } else {
        rowindex += 1;
      }
      setTimeout(type, 500);
    }
  }
  if (text) {
    setTimeout(type, 0);
  }
  const name = "Hey!";
  const name1 = "I'm Rohith!!";
  let i = 0;
  const ina = document.querySelector(".introtext");
  const ina1 = document.querySelector(".introtext1");
  function type1(element, str, delay) {
    let i = 0;
    function typing() {
      if (i < str.length) {
        element.textContent += str[i];
        i++;
        setTimeout(typing, delay);
      }
    }
    typing();
  }
  if (ina) {
    ina.textContent = "";
    setTimeout(type1(ina, name, 100), 100);
  }
  if (ina1) {
    ina1.textContent = "";
     setTimeout(() => type1(ina1, name1, 100), 800);
  }
}

);
