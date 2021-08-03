const d = document;

const slidersFurniture = () => {
  const $btnPrev = d.getElementById("btnPrevFurniture");
  const $btnNext = d.getElementById("btnNextFurniture");
  const $sliderContainer = d.querySelector(".hero-slider");
  const $slideLength = d.querySelectorAll(".slide").length;

  let index = 0;
  d.addEventListener("click", (e) => {
    if (e.target === $btnPrev) {
      index === 0 ? (index = $slideLength - 1) : index--;
      $sliderContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    if (e.target === $btnNext) {
      index >= $slideLength - 1 ? (index = 0) : index++;
      $sliderContainer.style.transform = `translateX(-${index * 100}%)`;
    }
  });
};

export default slidersFurniture;
