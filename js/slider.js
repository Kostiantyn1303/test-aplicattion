const sliderContainer = document.querySelector(".slider-container");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slideWidth = document.querySelector(".slide").clientWidth;

let currentIndex = 0;

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + 8) % 8;
  updateSlider();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % 8;
  updateSlider();
});

function updateSlider() {
  sliderContainer.style.transform = `translateX(-${
    slideWidth * currentIndex
  }px)`;
}

updateSlider();
