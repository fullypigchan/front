document.addEventListener("DOMContentLoaded", function () {
    setReport();
});

// 공유하기 클릭
const shareButton = document.querySelector(".devShareBtn");
const toolDiv = document.querySelector(
    ".reaction-item .share-layer.tooltip-layer.qnaSpA",
);
shareButton.addEventListener("click", (e) => {
    toolDiv.style.display =
        toolDiv.style.display === "block" ? "none" : "block";
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

// 작성하기 버튼
const writeButtonDiv = document.querySelector(".navi-top-area.has-tooltip");
const writeButton = document.querySelector(".navi-top-area.has-tooltip a");

writeButton.addEventListener("click", (e) => {
    writeButtonDiv.classList.toggle("tooltip-open");
});

// // 비로그인 버튼 클릭시 로그인 페이지
// function loginHref() {
//     location.href = "";
// }

// 신고 (비로그인)
// const reportActiveButton = document.querySelector(".devQstnDetailMenuIcon");
// const reportButton = document.querySelector(".view-more-layer");

// reportActiveButton.addEventListener("click", (e) => {
//     reportButton.classList.toggle("active");
//     reportButton.addEventListener("click", (e) => {
//         alert("로그인 후 이용하실 수 있습니다.");
//     });
// });

// // 좋아요(비로그인)
// const buttonLike = document.querySelector(".icon-like.qnaSpB.devQstnLike");
// const beforeLikeCount = document.querySelector(
//     ".icon-like.qnaSpB.devQstnLike em",
// );

// buttonLike.addEventListener("click", (e) => {
//     alert("로그인 후 이용하실 수 있습니다.");
// });

// // 북마크 등록（비로그인)
// const buttonBookMark = document.querySelector(
//     ".btnBookmark.qnaSpB.devQnaDetailBookmark",
// );

// buttonBookMark.addEventListener("click", (e) => {
//     alert("로그인 후 이용하실 수 있습니다.");
// });

// // 요소 선택（비로그인）
// const wrapper = document.querySelector(".writeBoxWrap.cmtWrite");
// const textarea = wrapper.querySelector("textarea");
// const buttons = document.querySelectorAll(".btnBx.devComtRoot button");

// buttons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         alert("로그인 후 이용하실 수 있습니다.");
//     });
// });

// textarea.addEventListener("click", (e) => {
//     alert("로그인 후 이용하실 수 있습니다.");
// });

// 신고 버튼(로그인)
const reportActiveButton = document.querySelector(".devQstnDetailMenuIcon");
const reportButton = document.querySelector(".view-more-layer");
const mtuLyWrapLyQnaReport = document.querySelector(".mtuLyWrap.lyQnaReport");
const butClose = document.querySelector(".butClose.mtuSpImg.devLyBtnClose");
const btnCancel = document.querySelector(".btnCancel.bg_white.devLyBtnClose");
const reportFormBx = document.querySelector(
    ".qnaFormBx.qnaTxaBx.devTplSchPh span",
);
const commentReportButtons = document.querySelectorAll(
    ".btnReport.devBtnReport",
);
const reportTextarea = document.getElementById("lb_reason_8");
const submitButton = document.querySelector(".btnReport.devBtnReportIns");
const firstReportRadio = document.getElementById("lb_reason_1");

function setReport() {
    reportTextarea.addEventListener("click", (e) => {
        reportFormBx.style.display = "none";
        input.focus();
    });

    reportTextarea.addEventListener("blur", (e) => {
        reportFormBx.style.display = "block";
    });
}

commentReportButtons.forEach((commentReportButton) => {
    commentReportButton.addEventListener("click", (e) => {
        mtuLyWrapLyQnaReport.style.display = "block";
    });
});

submitButton.addEventListener("click", (e) => {
    const reportSubmitMessage = confirm(
        "신고된 글은 운영자에게 전달됩니다. 신고하시겠습니까?",
    );
    if (reportSubmitMessage) {
        alert("신고 처리 완료되었습니다.");
        location.href = "../skill-log/log-detail.html";
    }
});

reportActiveButton.addEventListener("click", (e) => {
    reportButton.classList.toggle("active");
    reportButton.addEventListener("click", (e) => {
        mtuLyWrapLyQnaReport.style.display = "block";
    });
    firstReportRadio.checked = true;
});

butClose.addEventListener("click", (e) => {
    mtuLyWrapLyQnaReport.style.display = "none";
});

btnCancel.addEventListener("click", (e) => {
    mtuLyWrapLyQnaReport.style.display = "none";
});

// 좋아요(로그인)
const buttonLike = document.querySelector(".icon-like.qnaSpB.devQstnLike");
const beforeLikeCount = document.querySelector(
    ".icon-like.qnaSpB.devQstnLike em",
);

buttonLike.addEventListener("click", (e) => {
    buttonLike.classList.toggle("on");
});

// 북마크 등록（로그인)
const buttonBookMark = document.querySelector(
    ".btnBookmark.qnaSpB.devQnaDetailBookmark",
);
const bookMarkLayer = document.querySelector(
    ".book-mark-layer.tooltip-layer.qnaSpA",
);

buttonBookMark.addEventListener("click", (e) => {
    if (!buttonBookMark.classList.contains("on")) {
        bookMarkLayer.style.opacity = "1";
        setTimeout(() => {
            bookMarkLayer.style.opacity = "0";
        }, 975);
    } else {
        bookMarkLayer.style.opacity = "0";
    }
    buttonBookMark.classList.toggle("on");
});

// 댓글 좋아요(로그인)
const chatLikeButtonList = document.querySelectorAll(
    ".answerArea li div button.btnHeart.qnaSpB.devBtnAnswerLike",
);
chatLikeButtonList.forEach((chatLike) => {
    chatLike.addEventListener("click", (e) => {
        chatLike.classList.toggle("active");
    });
});

// 대댓글 (로그인)
const commentReplyButtonList = document.querySelectorAll(
    "button.btnCmt.devBtnComtList",
);
const commentReplyCloseButtons = document.querySelectorAll(
    "btnCmtClose.qnaSpA.qnaBtnClose",
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

        const commentReplyCloseButton = commentSec.querySelector(
            ".btnCmtClose.qnaSpA.qnaBtnClose",
        );
        commentReplyCloseButton.addEventListener("click", (e) => {
            commentSec.style.display = "none";
            btn.classList.remove("active");
        });
    });
});

// 이모티콘 버튼
const imoticonButtons = document.querySelectorAll(".icon-emoticon.qnaSpB");
const imoticonToolbars = document.querySelectorAll(
    ".layer-box-wrap.emotion-layer",
);
const buttonLayerCloses = document.querySelectorAll(".btn-layer-close.qnaSpB");

imoticonButtons.forEach((imoticonButton, idx) => {
    imoticonButton.addEventListener("click", (e) => {
        imoticonButton.classList.toggle("on");
        imoticonToolbars[idx].classList.toggle("open");
        mainTextarea.focus();
    });
});

buttonLayerCloses.forEach((buttonLayerClose, idx) => {
    buttonLayerClose.addEventListener("click", (e) => {
        imoticonToolbars[idx].classList.remove("open");
        imoticonButtons[idx].classList.remove("on");
    });
});

// 댓글 통합
const textareas = document.querySelectorAll(".writeBoxWrap.cmtWrite.case");
const ph1List = document.querySelectorAll(".ph_1");
const ph2List = document.querySelectorAll(".ph_2");
const uiPlaceholders = document.querySelectorAll(".uiPlaceholder");

textareas.forEach((wrapper, idx) => {
    const textarea = wrapper.querySelector("textarea"); // 실제 textarea 요소 찾기

    wrapper.addEventListener("click", (e) => {
        wrapper.classList.remove("case");
        uiPlaceholders[idx].classList.add("focus");
        ph1List[2 * idx].style.display = "none";
        ph2List[2 * idx].style.display = "block";
    });
});

const textCount = document.querySelectorAll("span.byte b");
const wrappers = document.querySelectorAll(".writeBoxWrap.cmtWrite");

wrappers.forEach((wrapper, idx) => {
    const textarea = wrapper.querySelector("textarea"); // 실제 textarea 요소 찾기

    if (!textarea) return; // textarea가 없으면 스킵

    // 댓글 작성시 글자 수 올라가기
    textarea.addEventListener("input", (e) => {
        console.log(textCount);
        const totalTextCount = textarea.value.length;
        textCount[idx].innerHTML = `${totalTextCount}`;
        if (totalTextCount > 1000) {
            alert("최대 1000자까지 입력 가능합니다.");
            textarea.value = textarea.value.substring(0, 1000);
            textarea.focus();
            ph2List[idx].style.display = "none";
        }
    });

    // 글자 입력 시
    textarea.addEventListener("input", (e) => {
        if (textarea.value) {
            ph2List[idx].style.display = "none";
        } else {
            // 글자가 없으면 ph2 다시 표시
            ph2List[idx].style.display = "block";
        }
    });

    // textarea 외부를 클릭했을 때
    // 1. 클릭 대상이 mainTextarea 아닐 경우
    // 2. 작성된 내용이 없을 경우
    // 3. 클릭 대상이 이모티콘 버튼이 아닐 경우
    // 4. 클릭 대상이 이모티콘이 아닐 경우
    document.addEventListener("click", (e) => {
        if (
            e.target.tagName !== "TEXTAREA" &&
            !textarea.value &&
            !e.target.classList.contains("icon-emoticon") &&
            !e.target.closest(".emotion-area")
        ) {
            if (
                !document
                    .querySelector(".emotion-layer")
                    .classList.contains("open")
            ) {
                wrapper.classList.add("case");
                uiPlaceholders[idx].classList.remove("focus");
                ph1List[idx].style.display = "block";
                ph2List[idx].style.display = "none";
            }
        }
    });
});

// 댓글등록

const replySubmitButton = document.querySelector(".btnSbm.devBtnAnswerWrite");
replySubmitButton.addEventListener("click", (e) => {
    alert("댓글이 등록되었습니다.");
    location.href = "../skill-log/log-detail.html";
});
const replyOfReplySubmitButtons = document.querySelectorAll(
    ".btnSbm.devBtnComtWrite",
);

replySubmitButtons.forEach((replySubmitButton) => {
    replySubmitButton.addEventListener("click", (e) => {
        location.href = "../skill-log/log-detail.html";
    });
});

// 첨부파일
const addFileButtons = document.querySelectorAll(".button.icon-photo.qnaSpB");

addFileButtons.forEach((addFileButton) => {
    addFileButton.addEventListener("change", (e) => {
        const [file] = e.target.files;
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.addEventListener("load", (e) => {
            const path = e.target.result;

            if (path.includes("image")) {
                thumbnail.style.backgroundImage = `url(${path})`;
            } else {
                thumbnail.style.backgroundImage = `url(./images/attach.png)`;
            }
        });

        cancel.style.display = "block";
    });
});
