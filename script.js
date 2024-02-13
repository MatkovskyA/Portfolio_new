//Появление блоков при скролле
function onEntry(entry) {
  entry.forEach((element) => {
    if (element.isIntersecting) {
      element.target.classList.add("animation-show");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".animation");

for (let elem of elements) {
  observer.observe(elem);
}
//slider slick
$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    adaptiveHeight: true,
    speed: 1000,
  });
});
