const mainContainer = document.querySelector(".main-container");
const imgContainer = document.querySelector(".img-container");
const bodyImg = document.querySelector("#body-img");
const circles = document.querySelectorAll(".circle-path");
// const tooltips = document.querySelectorAll(".tooltip");

// cerebral-cortex
const cerebralCortex = document.querySelector("#cerebral-cortex");
// const cerebralCortexTT = document.querySelector("#cerebral-cortex-tt");

cerebralCortex.addEventListener("click", () => {
  window.open(
    "https://www.sciencellonline.com/ready-to-use-3d-human-cortical-spheroids.html",
    "_self"
  );
});

// add tooltip
cerebralCortex.appendTooltip = function () {
  console.log("oo");
  const cerebralCortexTT = document.createElement("div");
  cerebralCortexTT.id = "cerebralCortexTT";
  cerebralCortexTT.className = "tooltip";
  cerebralCortexTT.innerHTML = "<div>Cerebral Cortex Model</div>";
  let sel = this;
  let pos = sel.getBoundingClientRect();
  cerebralCortexTT.style.display = "block";
  cerebralCortexTT.style.top = pos.top - 30 + "px";
  cerebralCortexTT.style.left = pos.left - 60 + "px";
  imgContainer.appendChild(cerebralCortexTT);
};
cerebralCortex.appendTooltip();

// cerebralCortex.addEventListener("mouseenter", function () {
//   let sel = this;
//   let pos = sel.getBoundingClientRect();
//   cerebralCortexTT.style.display = "block";
//   cerebralCortexTT.style.top = pos.top - 18 + "px";
//   cerebralCortexTT.style.left = pos.left - 70 + "px";
// });

// ocular
const ocular = document.querySelector("#ocular");
// const ocularTT = document.querySelector("#ocular-tt");

ocular.addEventListener("click", () => {
  window.open(
    "https://www.sciencellonline.com/products-services/cell-based-assays/3d-cell-culture/3d-ready-to-use-kits/ocular-model.html",
    "_self"
  );
});

// ocular.addEventListener("mouseenter", function () {
//   let sel = this;
//   let pos = sel.getBoundingClientRect();
//   ocularTT.style.display = "block";
//   ocularTT.style.top = pos.top - 18 + "px";
//   ocularTT.style.left = pos.left - 40 + "px";
// });

// blood-brain-barrier
const bloodBrainBarrier = document.querySelector("#blood-brain-barrier");
// const bloodBrainBarrierTT = document.querySelector("#blood-brain-barrier-tt");

bloodBrainBarrier.addEventListener("click", () => {
  window.open(
    "https://www.sciencellonline.com/3d-ready-to-use-bbb-model",
    "_self"
  );
});

// bloodBrainBarrier.addEventListener("mouseenter", function () {
//   let sel = this;
//   let pos = sel.getBoundingClientRect();
//   bloodBrainBarrierTT.style.display = "block";
//   bloodBrainBarrierTT.style.top = pos.top - 18 + "px";
//   bloodBrainBarrierTT.style.left = pos.left - 80 + "px";
// });

// lung
const lung = document.querySelector("#lung");
// const lungTT = document.querySelector("#lung-tt");

lung.addEventListener("click", () => {
  window.open(
    "https://www.sciencellonline.com/3d-ready-to-use-lung-models",
    "_self"
  );
});

// lung.addEventListener("mouseenter", function () {
//   let sel = this;
//   let pos = sel.getBoundingClientRect();
//   lungTT.style.display = "block";
//   lungTT.style.top = pos.top - 18 + "px";
//   lungTT.style.left = pos.left - 40 + "px";
// });

// all circles
const modelsArr = [
  "Cerebral Cortex Model",
  "Ocular Model",
  "Blood Brain Barrier Model",
  "Lung Model",
  "Liver Model",
  "Kidney Model",
  "Mesenchymal Stem Cell Model",
  "Cartilage Model",
  "Bone Model",
];
// for (const circle of circles) {
//   circle.appendTooltip = function () {
//     const tooltip = document.createElement("div");
//   };
//   circle.appendTooltip();
// }

for (const circle of circles) {
  circle.addEventListener("mouseenter", function () {
    let sel = this;
    // console.log(this);
    let pos = sel.getBoundingClientRect();
    // for (const tooltip of tooltips) {
    //   tooltip.style.display = "block";
    //   tooltip.style.top = pos.top - 18 + "px";
    //   tooltip.style.left = pos.left - 40 + "px";
    // }
  });
}

for (const circle of circles) {
  circle.addEventListener("mouseenter", function () {
    circle.setAttribute("r", "6");
  });

  circle.addEventListener("mouseleave", function () {
    // for (const tooltip of tooltips) {
    //   setTimeout(() => {
    //     tooltip.style.opacity = "0.2";
    //   }, 500);
    // }
    circle.setAttribute("r", "4");
  });
}

// [].forEach.call(document.querySelectorAll(".circle-path"), (item)=>{

// })
