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

  const roles = [" Quality Engineer"," Code Curious QA"," Automation Tester"," Tech Enthusiast"];
  const text = document.querySelector(".typed-text");
  let rowindex = 0;
  let charindex = 0;
  function type(){
    if(charindex<roles[rowindex].length){
      text.textContent+=roles[rowindex].charAt(charindex);
      charindex=charindex+1;
      setTimeout(type, 200);
    }else{
      setTimeout(erase,1500);
    }
  }
  function erase(){
    if(charindex>=0){
      text.textContent = "";
      text.textContent+=roles[rowindex].substring(0,charindex-1);
      charindex = charindex-1;
      setTimeout(erase,200);
    }else{
      if(rowindex>=roles.length-1){
        rowindex = 0;
      }else{
        rowindex +=1;
      }
      setTimeout(type,500);
    }
  }
  if(text){
    setTimeout(type,0);
  }
}

);
