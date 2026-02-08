NodeList.prototype.filter = Array.prototype.filter;
NodeList.prototype.map = Array.prototype.map;

// filter
// server: 메뉴/필터 클릭 시, 페이지 -> 서버 -> (동일한)페이지로 이동
// server에서 쿼리스트링으로 어느 버튼을 클릭했는지 전달
// 화면에서 해당 값을 보고 확인
const tabItems = document.querySelector(".status-list");
tabItems.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.tagName === "A") {
        const [previousItem] = tabItems
            .querySelectorAll("a")
            .filter((a) => a.classList.contains("active"));
        previousItem.classList.remove("active");
        e.target.classList.add("active");
    }
});

// 더보기 버튼
const moreOptionButtons = document.querySelectorAll(".moreOptionButton");
const moreOptions = moreOptionButtons.map(
    (button) => button.nextElementSibling,
);

// 탈락 모달
const feedbackModal = document.querySelector(".feedback-modal");
const feedbackModalCloseButton = document.querySelector(
    ".feedback-modal .close-button",
);
const feedbackModalResultButtons = document.querySelector(
    ".feedback-modal .modal-bts",
);
let targetUser = "";

moreOptionButtons.forEach((button, index) => {
    // 더보기 메뉴
    button.addEventListener("click", (e) => {
        moreOptions[index].classList.toggle("active");
    });

    // 승급
    moreOptions[index].addEventListener("click", (e) => {
        if (e.target.closest(".challengerPromoteBtn")) {
            if (confirm("승급 처리하시겠습니까?")) {
                // server: 해당 참여자의 상태를 참여중(in_progress)으로 변경
                alert("승급 처리가 완료되었습니다.");
                // server: 참여자 목록 다시 불러오기
            }
        } else {
            targetUser = button.closest("tr").id;
            feedbackModal.classList.add("active");
        }
    });
});

// 탈락 모달 닫기 버튼
feedbackModalCloseButton.addEventListener("click", (e) => {
    feedbackModal.classList.remove("active");
});

// 탈락 모달 취소/처리 버튼
feedbackModalResultButtons.addEventListener("click", (e) => {
    if (e.target.classList.contains("cancel")) {
        feedbackModal.classList.remove("active");
    } else {
        // server: 피드백 db에 저장
        console.log(targetUser);
        alert("탈락 처리가 완료되었습니다.");
        form.submit();
    }
});

document.addEventListener("click", (e) => {
    moreOptionButtons.forEach((button, index) => {
        if (
            e.target.closest(".moreOptionButton") !== button &&
            !e.target.closest(".more-option")
        ) {
            moreOptions[index].classList.remove("active");
        }
    });
});
