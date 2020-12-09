const moreBtn = document.querySelectorAll(".more-vid-icon");
const moreDiv = document.querySelectorAll(".vid-more");
const burgerBtn = document.querySelector(".burger-btn");
const leftNavBig = document.querySelector(".left-nav");
const leftNavmini = document.querySelector(".left-nav-mini");
const main = document.querySelector(".main-cont");
const toggleMore = (e) => {
  const itemClass = e.target.nextElementSibling.className;
  console.log(itemClass);
  moreDiv.forEach((e) => {
    e.className = "vid-more close abs";
  });
  if (itemClass == "vid-more close abs") {
    e.target.nextElementSibling.className = "vid-more open abs";
  }
};
moreBtn.forEach((e) => {
  e.addEventListener("click", toggleMore, false);
});

const changeNav = () => {
  leftNavBig.classList.toggle("hide-nav");
  leftNavmini.classList.toggle("show-mini-nav");
  main.classList.toggle("extra-margin-main");
};
burgerBtn.addEventListener("click", changeNav);
