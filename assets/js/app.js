let header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (this.scrollY > 120) {
    header?.classList.add("sticky");
  } else {
    header?.classList.remove("sticky");
  }
});
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
toogler?.addEventListener("click", () => {
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

function getChartColorsArray(id) {
  const element = document.getElementById(id);
  if (element !== null) {
    const colorsAttribute = element.getAttribute("data-colors");
    if (colorsAttribute !== null) {
      return JSON.parse(colorsAttribute).map((color) => color.replace(" ", ""));
    }
  }
  return null;
}

function createDonutChart(id, series, labels, height) {
  const chartColors = getChartColorsArray(id);
  if (chartColors !== null) {
    const options = {
      series: series,
      chart: { height: height, type: "donut" },
      labels: labels,
      legend: { position: "bottom" },
      dataLabels: { dropShadow: { enabled: false } },
      colors: chartColors,
    };
    const chart = new ApexCharts(document.querySelector(`#${id}`), options);
    chart.render();
  }
}

function createLineChart(id, series, categories, height) {
  const chartColors = getChartColorsArray(id);
  if (chartColors !== null) {
    const options = {
      series: series,
      chart: { height: height, type: "line" },
      xaxis: { categories: categories },
      legend: { position: "top" },
      dataLabels: { enabled: false },
      markers: { size: 0 },
      colors: chartColors,
    };
    const chart = new ApexCharts(document.querySelector(`#${id}`), options);
    chart.render();
  }
}

// Creating simple donut chart
createDonutChart(
  "simple_dount_chart",
  [44, 55, 13],
  ["Expenses", "Payments", "Cashout"],
  412
);

// Creating line chart with data labels
createLineChart(
  "line_chart_datalabel",
  [
    {
      name: "Current Year",
      data: [14, 11, 16, 12, 17, 13, 12, 14, 18, 16, 12, 20],
    },
    {
      name: "Previous Year",
      data: [26, 24, 32, 36, 33, 31, 33, 34, 31, 36, 32, 37],
    },
  ],
  [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  380
);
// Toggle showing submenus
const submenuLinks = document.querySelectorAll(
  `.header .container .nav-links ul .nav-link.submenulink`
);

submenuLinks?.forEach((link) => {
  link.addEventListener("click", function () {
    link.classList.toggle("open");
  });
});

// Toggle showing aside
const aside = document.querySelector(`aside`);
const asideIcon = document.querySelector(`aside .asideIcon`);
const asideNav = document.querySelector(`aside .asideNav`);

asideIcon?.addEventListener("click", function () {
  aside?.classList.toggle("shrink");
  asideNav?.classList.toggle("open");
});

// Show the confirm btn when check one input
const subscriptionsInputs = document.querySelectorAll(
  `.subscriptionsContainer .subscriptionInputGroup input`
);
const confirmBtn = document.querySelector(
  `.subscriptionsContainer .btnBox .confirmBtn`
);

subscriptionsInputs?.forEach((input) => {
  input?.addEventListener("click", function () {
    if (!confirmBtn?.classList.contains("show")) {
      confirmBtn?.classList.add("show");
    }
  });
});
