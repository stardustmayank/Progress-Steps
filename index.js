const circles = document.querySelectorAll(".circle");
const progress = document.querySelector(".progress-bar");
let val = 1;
let progressLength = 0;
const prev = document.getElementById("prev");
const next = document.getElementById("next");
prev.addEventListener("click", () => {
  val--;
  if (val < 1) {
    val = 1;
  }
  sliderPrev();
});
next.addEventListener("click", () => {
  val++;
  if (val > circles.length) {
    val = circles.length;
  }
  sliderNext();
});
function sliderNext() {
  //   for (let i = 1; i < val; i++) {
  //     circles[i].classList.add("active");
  //   }
  circles[val - 1].classList.add("active");
  progress.style.width = ((val - 1) / (circles.length - 1)) * 100 + "%";
}
function sliderPrev() {
  circles[val].classList.remove("active");
  progress.style.width = ((val - 1) / (circles.length - 1)) * 100 + "%";

}
