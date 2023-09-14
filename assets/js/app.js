let numbers = document.querySelectorAll(".num");
let started = false;
function startCount(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    element.textContent++;
    if (element.textContent == goal) {
      clearInterval(count);
    }
  }, 4000 / goal);
}
window.onscroll = function () {
  if (this.scrollY >= 100) {
    if (!started) {
      numbers.forEach((num) => startCount(num));
    }
    started = true;
  }
};
let navLinks = document.querySelectorAll(".nav-link a");
let sections = document.querySelectorAll(".sec");
let current;
window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    let secTop = sec.offsetTop;
    if (pageYOffset >= secTop - 100) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  });
});
let toogler = document.querySelector(".toogler");
let menu = document.querySelector(".nav-links");
toogler.addEventListener("click", () => {
  menu.classList.toggle("showing");
  menu.classList.contains("showing")
    ? (toogler.querySelector("i").classList =
        "fa-sharp fa-solid fa-bars-staggered")
    : (toogler.querySelector("i").classList = "fa-sharp fa-solid fa-bars");
});
//------------------phone images slider------------------------//
var phoneImgs = new Swiper(".phoneImgs", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 60,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 5,
    stretch: 10,
    depth: 200,
    modifier: 1.2,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".appSliderNext",
    prevEl: ".appSliderPrev",
  },
});
// aos
//aos Delay
$("section").each(function () {
  const sectionDivs = $(this).find("[data-aos]");
  sectionDivs.each(function (index) {
    $(this).attr("data-aos-delay", (index + 1) * 100);
  });
});
// aos
AOS.init({
  offset: 20,
  delay: 50,
  duration: 750,
  // easing: "linear",
  once: true,
});
