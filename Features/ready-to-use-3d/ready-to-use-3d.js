const mainContainer = document.querySelector(".main-container");
const imgContainer = document.querySelector(".img-container");
const bodyImg = document.querySelector("#body-img");
const circles = document.querySelectorAll(".circle-path");

// urls
const urlsArr = [
  "https://www.sciencellonline.com/ready-to-use-3d-human-cortical-spheroids.html",
  "https://www.sciencellonline.com/products-services/cell-based-assays/3d-cell-culture/3d-ready-to-use-kits/ocular-model.html",
  "https://www.sciencellonline.com/3d-ready-to-use-bbb-model",
  "https://www.sciencellonline.com/3d-ready-to-use-lung-models",
  "https://www.sciencellonline.com/3d-ready-to-use-liver-models",
  "https://www.sciencellonline.com/3d-ready-to-use-kidney-models",
  "https://www.sciencellonline.com/ready-to-use-3d-human-mesenchymal-stem-cell-spheroids.html",
  "https://www.sciencellonline.com/ready-to-use-3d-chondrocyte-spheroid-kit.html",
  "https://www.sciencellonline.com/3d-ready-to-use-bone-models",
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
