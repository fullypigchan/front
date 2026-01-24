// 로고 업로드 모달
// 열기
const logoUploadButton = document.getElementById("devLogoUp");
const logoUploadLayout = document.querySelector(".tbCell.tbLogo");

// 닫기
const logoUploadCloseButton = document.getElementById("devCloseLayer");
const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");

// 로고 선택
const selectLogoInput = document.getElementById("devSelectLogo");
const selectLogoLabel = document.querySelector("#devSelectLogoDelegator label");

console.log(selectLogoLabel);

// 이벤트
// 닫기
inputs.forEach((input) => {
    input.addEventListener("focus", (e) => {
        logoUploadLayout.classList.remove("on");
    });
});
textareas.forEach((textarea) => {
    textarea.addEventListener("focus", (e) => {
        logoUploadLayout.classList.remove("on");
    });
});

// 열기
logoUploadCloseButton.addEventListener("click", (e) => {
    logoUploadLayout.classList.remove("on");
});

logoUploadButton.addEventListener("click", (e) => {
    logoUploadLayout.classList.add("on");
});

// 로고 선택
selectLogoInput.addEventListener("change", (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();

    selectLogoLabel.textContent = file.name;

    reader.readAsDataURL(file);
    reader.addEventListener("load", (e) => {
        const path = e.target.result;

        if (path.includes("image")) {
            // 로고 업로드
        }
    });
});
