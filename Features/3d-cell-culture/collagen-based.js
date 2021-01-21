const mainContainer = document.querySelector(".main-container");
const imgContainer = document.querySelector(".img-container");
const bodyImg = document.querySelector("#body-img");
const circles = document.querySelectorAll(".circle-path");

// urls
const urlsArr = [
  "/products-services/cell-based-assays/3d-cell-culture/collagen-based-3d-culture-kits/blood-brain-barrier-model.html",
  "/3d-renal-tubule-formation-kit.html",
  "/products-services/cell-based-assays/3d-cell-culture/collagen-based-3d-culture-kits/vascular-biology-model.html"
];

// add links to circles
for (const [i, circle] of circles.entries()) {
  circle.addEventListener("click", () => {
    window.open(urlsArr[i], "_self");
  });
}

// add links to tooltips
const rects = document.querySelectorAll(".tooltip-rect");
const texts = document.querySelectorAll(".tooltip-text");

for (const [i, rect] of rects.entries()) {
  rect.addEventListener("click", () => {
    window.open(urlsArr[i], "_self");
  });
}

for (const [i, text] of texts.entries()) {
  text.addEventListener("click", () => {
    window.open(urlsArr[i], "_self");
  });
}
