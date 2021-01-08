const mainContainer = document.querySelector(".main-container");
const imgContainer = document.querySelector(".img-container");
const bodyImg = document.querySelector("#body-img");
const circles = document.querySelectorAll(".circle-path");

// open url
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

for (const [i, circle] of circles.entries()) {
  circle.addEventListener("click", () => {
    window.open(urlsArr[i], "_self");
  });
}

// add tooltips
const modelsArr = [
  "Cerebral Cortex Model",
  "Ocular Model",
  "Blood Brain Barrier Model",
  "Lung Models",
  "Liver Models",
  "Kidney Model",
  "Mesenchymal Stem Cell Model",
  "Cartilage Model",
  "Bone Models",
];
const idsArr = [
  "cerebral-cortex-tt",
  "ocular-tt",
  "blood-brain-barrier-tt",
  "lung-tt",
  "liver-tt",
  "kidney-tt",
  "mesenchymal-stem-cell-tt",
  "cartilage-tt",
  "bone-tt",
];

for (const [i, circle] of circles.entries()) {
  circle.appendTooltip = function () {
    const tooltipDiv = document.createElement("div");
    tooltipDiv.className = "tooltip";
    tooltipDiv.id = idsArr[i];
    tooltipDiv.innerHTML = modelsArr[i];
    let sel = this;
    let pos = sel.getBoundingClientRect();
    tooltipDiv.style.display = "block";
    tooltipDiv.style.top = pos.top + 40 + "px";
    tooltipDiv.style.left = pos.left - 35 + "px";
    imgContainer.appendChild(tooltipDiv);
  };
  circle.appendTooltip();
}

const tooltips = document.querySelectorAll(".tooltip");

// mouse event
for (const [i, circle] of circles.entries()) {
  circle.addEventListener("mouseenter", function () {
    circle.setAttribute("r", "8");
    for (const [j, tooltip] of tooltips.entries()) {
      if (i === j) {
        tooltip.style.opacity = "1";
      }
    }
  });

  circle.addEventListener("mouseleave", function () {
    for (const tooltip of tooltips) {
      setTimeout(() => {
        tooltip.style.opacity = "0.3";
      }, 500);
    }
    circle.setAttribute("r", "6");
  });
}
