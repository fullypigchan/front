// 사이드 네비게이션에 클릭했을 때 색 적용
const lnbGroupAtags = document.querySelectorAll(".lnbGroup a");

lnbGroupAtags.forEach((lnbGroupAtag) => {
    lnbGroupAtag.addEventListener("click", (e) => {
        if (lnbGroupAtag.classList.contains("on")) {
            lnbGroupAtag.style.color = "#7BA882";
        } else {
            lnbGroupAtag.style.color = "#000";
        }
    });
});

// 탈퇴 동으이(필수 동의)
const inputAgreeCheckbox = document.querySelector("#chkLeaveAgree");
const inputAgreeCheckboxLabel = inputAgreeCheckbox.nextElementSibling;
console.log(inputAgreeCheckbox, inputAgreeCheckboxLabel);
inputAgreeCheckbox.addEventListener("click", (e) => {
    inputAgreeCheckboxLabel.classList.toggle("chk");
});

// 탈퇴 신청자 이름 작성
const leaveNameInput = document.getElementById("memberName");
const leaveNameSpan = leaveNameInput.previousElementSibling;
leaveNameInput.addEventListener("focus", (e) => {
    leaveNameSpan.style.display = "none";
});
leaveNameInput.addEventListener("blur", (e) => {
    leaveNameInput.value
        ? (leaveNameSpan.style.display = "none")
        : (leaveNameSpan.style.display = "block");
});

// DB에서 자신의 정보와 일치할 때에만 삭제 되게 해야함(id,이름)
// 탈퇴하기 버튼
const leaveSubmitButton = document.querySelector(".btnBlue");
leaveSubmitButton.addEventListener("click", (e) => {
    if (!leaveNameInput.value) {
        e.preventDefault();
        alert("탈퇴 신청자 이름을 입력해주세요.");
    } else if (!inputAgreeCheckbox.checked) {
        e.preventDefault();
        alert("탈퇴 유의사항을 확인하고 동의해 주세요.");
    } else {
        e.preventDefault();
        confirm("탈퇴를 진행하시겠습니까?");
        location.href();
    }
});
