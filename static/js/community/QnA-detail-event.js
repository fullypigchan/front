const reportActiveButton = document.querySelector(".devQstnDetailMenuIcon");
const reportButton = document.querySelector(".view-more-layer");

reportActiveButton.addEventListener("click", (e) => {
    reportButton.classList.toggle("active");
});

const shareButton = document.querySelector(".devShareBtn");
const toolDiv = document.querySelector(
    ".reaction-item .share-layer.tooltip-layer.qnaSpA",
);
shareButton.addEventListener("click", (e) => {
    toolDiv.style.display =
        toolDiv.style.display === "block" ? "none" : "block";
});

const writeButtonDiv = document.querySelector(".navi-top-area.has-tooltip");
const writeButton = document.querySelector(".navi-top-area.has-tooltip a");
console.log(writeButton);
writeButton.addEventListener("click", (e) => {
    writeButtonDiv.classList.toggle("tooltip-open");
});
