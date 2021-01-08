const mainContainer = document.querySelector(".main-container");
const bodyImg = document.querySelector("#body-img");
const circles = document.querySelectorAll(".circle-path");
const tooltips = document.querySelectorAll(".tooltip");

// cerebral-cortex
const cerebralCortex = document.querySelector("#cerebral-cortex");
const cerebralCortexTT = document.querySelector("#cerebral-cortex-tt");

cerebralCortex.addEventListener("click", () => {
  window.open(
    "https://www.sciencellonline.com/ready-to-use-3d-human-cortical-spheroids.html",
    "_self"
  );
});

cerebralCortex.addEventListener("mouseenter", function () {
  let sel = this;
  let pos = sel.getBoundingClientRect();
  cerebralCortexTT.style.display = "block";
  cerebralCortexTT.style.top = pos.top - 40 + "px";
  cerebralCortexTT.style.left = pos.left - 70 + "px";
  cerebralCortex.setAttribute("r", "6");
});

cerebralCortex.addEventListener("mouseleave", () => {
  setTimeout(() => {
    cerebralCortexTT.style.display = "none";
    cerebralCortex.setAttribute("r", "4");
  }, 3000);
});

// ocular
const ocular = document.querySelector("#ocular");
const ocularTT = document.querySelector("#ocular-tt");

ocular.addEventListener("click", () => {
  window.open(
    "https://www.sciencellonline.com/products-services/cell-based-assays/3d-cell-culture/3d-ready-to-use-kits/ocular-model.html",
    "_self"
  );
});

ocular.addEventListener("mouseenter", function () {
  let sel = this;
  let pos = sel.getBoundingClientRect();
  ocularTT.style.display = "block";
  ocularTT.style.top = pos.top - 40 + "px";
  ocularTT.style.left = pos.left - 40 + "px";
});

ocular.addEventListener("mouseleave", () => {
  ocularTT.style.display = "none";
});

// [].forEach.call(document.querySelectorAll(".circle-path"), (item)=>{

// })
