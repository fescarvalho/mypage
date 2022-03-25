var percent = document.querySelector(".percent");
var loading = document.querySelector(".loading");
var count = 10;
var load = setInterval(animate, 80);

function animate() {
  if (count == 100) {
    loading.parentElement.removeChild(loading);
    clearInterval(load);
  } else {
    count = count + 5;
    percent.textContent = count + "%";
  }
}

function scrollSuaver() {
  const links = document.querySelectorAll('a[href^="#"]');
  if (links.length) {
    function scrollSuave(e) {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }

    links.forEach((link) => {
      link.addEventListener("click", scrollSuave);
    });
  }
}
scrollSuaver();

function scrollAnimate() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    function scrollAnimation() {
      const windowSize = window.innerHeight * 0.8;
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionActive = sectionTop - windowSize < 0;
        if (sectionActive) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }
    scrollAnimation();

    window.addEventListener("scroll", scrollAnimation);
  }
}
scrollAnimate();

function backtotop() {
  const section = document.querySelector("#Education");
  const sectionTop = document.querySelector(".topo");

  function backToTop() {
    const btnTop = section.getBoundingClientRect().top;
    if (btnTop < 100) {
      sectionTop.classList.add("ativo");
    } else {
      sectionTop.classList.remove("ativo");
    }
  }
  window.addEventListener("scroll", backToTop);
}
backtotop();
