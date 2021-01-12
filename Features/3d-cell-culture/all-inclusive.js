const mainContainer = document.querySelector(".main-container");
const imgContainer = document.querySelector(".img-container");
const bodyImg = document.querySelector("#body-img");
const circles = document.querySelectorAll(".circle-path");

// urls
const urlsArr = [
  "/all-inclusive-3d-human-cortical-spheroid-formation-kit.html",
  "/all-inclusive-3d-human-retinal-pigment-epithelial-spheroid-formation-kit.html",
  "/3d-all-inclusive-blood-brain-barrier-models",
  "/3d-all-inclusive-liver-models",
  "/all-inclusive-3d-chondrocyte-spheroid-formation-kit.html",
  "/3d-all-inclusive-bone-models",
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
