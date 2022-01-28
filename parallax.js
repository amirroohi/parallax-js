const item1 = document.querySelector(".item1");
const item5 = document.querySelector(".item5");

window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  //   console.log(offset);
  item1.style.backgroundPositionY = offset * 0.7 + "px";
  //   item5.style.backgroundPositionY = offset * 1 + "px";
});
