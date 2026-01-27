// 비밀번호 변경
const passwordChangeButton = document.getElementById("devBtnChangePwd");
const passwordChangeAreas = document.querySelectorAll(".devPwdChangeArea");

passwordChangeButton.addEventListener("click", (e) => {
    // 비밀번호 변경 버튼 toggle
    passwordChangeAreas.forEach((area) => {
        area.style.display = area.style.display === "table" ? "none" : "table";
    });
});

// 도움말
const tipButton = document.querySelector(".mtcBtnTip.devDescLy");
const tipArea = document.querySelector(".lyInfoHelp.devAgreeLayer");

tipButton.addEventListener("click", (e) => {
    const tipBox = tipArea.lastElementChild;
    tipArea.classList.toggle("on");
    tipBox.style.display = tipBox.style.display === "none" ? "block" : "none";
});
