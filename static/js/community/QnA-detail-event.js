// 신고 버튼
const reportActiveButton = document.querySelector(".devQstnDetailMenuIcon");
const reportButton = document.querySelector(".view-more-layer");

reportActiveButton.addEventListener("click", (e) => {
    reportButton.classList.toggle("active");
});
// 공유하기 버튼
const shareButton = document.querySelector(".devShareBtn");
const toolDiv = document.querySelector(
    ".reaction-item .share-layer.tooltip-layer.qnaSpA",
);
shareButton.addEventListener("click", (e) => {
    toolDiv.style.display =
        toolDiv.style.display === "block" ? "none" : "block";
});

// 작성하기 버튼
const writeButtonDiv = document.querySelector(".navi-top-area.has-tooltip");
const writeButton = document.querySelector(".navi-top-area.has-tooltip a");

writeButton.addEventListener("click", (e) => {
    writeButtonDiv.classList.toggle("tooltip-open");
});

// URL 복사 클릭
const URLCopy = document.querySelector(
    ".button.button-copy-url.button-popup-component",
);
const URLCopyLayer = document.querySelector(".url-copy-layer");
const URLCopyLayerBefore = document.querySelector(".button.button-close");

URLCopy.addEventListener("click", (e) => {
    URLCopyLayer.classList.toggle("attached");
});

URLCopyLayerBefore.addEventListener("click", (e) => {
    URLCopyLayer.classList.remove("attached");
});

// 게시글 좋아요
const buttonLike = document.querySelector(".icon-like.qnaSpB.devQstnLike");

buttonLike.addEventListener("click", (e) => {
    buttonLike.classList.toggle("on");
});

const buttonBookMark = document.querySelector(
    ".btnBookmark.qnaSpB.devQnaDetailBookmark",
);

buttonBookMark.addEventListener("click", (e) => {
    buttonBookMark.classList.toggle("on");
});

// 댓글 좋아요

const chatLikeButtonList = document.querySelectorAll(
    ".answerArea li div button.btnHeart.qnaSpB.devBtnAnswerLike",
);
chatLikeButtonList.forEach((chatLike) => {
    chatLike.addEventListener("click", (e) => {
        chatLike.classList.toggle("active");
    });
});

// 대댓글
// 대댓글 (각각 개별 토글) - ?. 문법 없이
const commentReplyButtonList = document.querySelectorAll(
    ".answerArea li div button.btnCmt.devBtnComtList",
);

commentReplyButtonList.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        // 내가 누른 버튼이 속한 li 찾기
        const li = btn.closest("li");
        if (li == null) {
            return;
        }

        // 그 li 안의 commentSec 찾기
        const commentSec = li.querySelector(".commentSec");
        if (commentSec == null) {
            return;
        }

        // 버튼 active 토글
        btn.classList.toggle("active");

        // 해당 commentSec만 열고/닫기
        if (btn.classList.contains("active")) {
            commentSec.style.display = "block";
        } else {
            commentSec.style.display = "none";
        }
    });
});
