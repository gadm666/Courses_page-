//change nav_bar background-color
window.addEventListener("scroll", function () {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 100);
});

// apper answer and hide

const fraq = document.querySelectorAll(".fraq");

fraq.forEach((ele) => {
  ele.onclick = function () {
    this.classList.toggle("open");

    // change plus to minus

    const icon = ele.querySelector(".fraq__icon i");
    if (icon.className === "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  };
});

// nav menue in taplet

const menu = document.querySelector(".nav_manu");
const menuBtn = document.querySelector("#menu-btn");
const CloseBtn = document.querySelector("#close-btn");

// console.log(menuBtn);

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  CloseBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

const closenav = function () {
  menu.style.display = "none";
  CloseBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

CloseBtn.addEventListener("click", closenav);

// make upper arrow

const UpperArrow = document.querySelector(".upper__arrrow i");

// console.log(UpperArrow);

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  if (window.scrollY >= 100) {
    UpperArrow.style.display = "block";
  } else {
    UpperArrow.style.display = "none";
  }
  console.log(window.scrollY);
});

UpperArrow.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
