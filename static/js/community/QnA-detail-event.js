// 신고 버튼

// 신고 열리는 버튼
const reportActiveButton = document.querySelector(".devQstnDetailMenuIcon");
// 신고창 뜨는 신고버튼
const reportButton = document.querySelector(".view-more-layer");
// 신고창
const pressReportButton = document.querySelector(".mtuLyWrap.lyQnaReport");
// 신고창 x버튼
const pressReportButtonClose = document.querySelector(
    ".butClose.mtuSpImg.devLyBtnClose",
);
// 신고창 text-area 문구
const reportFormBox = document.querySelector(
    ".qnaFormBx.qnaTxaBx.devTplSchPh span",
);
// 신고창 text-area
const reportTextArea = document.getElementById("lb_reason_8");
// 신고창 신고하기 버튼
const reportSubmitButton = document.querySelector(".btnReport.devBtnReportIns");
// 신고창 첫번째 이유(input radio)
const reportFirstReasonRadio = document.getElementById("lb_reason_1");
// 댓글에 신고버튼
const commentReportButtons = document.querySelectorAll(
    ".btnReport.devBtnReport",
);
// 댓글에 신고버튼 누를 시 신고창 띄우기
commentReportButtons.forEach((commentReportButton) => {
    commentReportButton.addEventListener("click", (e) => {
        pressReportButton.style.display = "block";
    });
});
// 신고하기 눌렀을 때 알림띄우기(confirm 사용 시 확인,취소 뜸)
reportSubmitButton.addEventListener("click", (e) => {
    const reportSubmitMessage = confirm(
        "신고된 글은 운영자에게 전달됩니다. 신고하시겠습니까?",
    );
    if (reportSubmitMessage) {
        alert("신고 처리 완료되었습니다.");
        location.href = "../community/QnA-detail.html";
    }
});
// 신고창 text-area 누를 시 문구 삭제
reportTextArea.addEventListener("click", (e) => {
    reportFormBox.style.display = "none";
    input.focus();
});

// 신고창 text-area 바깥 누를시 다시 문구 띄우기
reportTextArea.addEventListener("blur", (e) => {
    reportFormBox.style.display = "block";
});

// 신고 버튼 활성화 및 눌렀을 시 신고창 띄우기
reportActiveButton.addEventListener("click", (e) => {
    reportButton.classList.toggle("active");
    reportButton.addEventListener("click", (e) => {
        pressReportButton.style.display = "block";
    });
    reportFirstReasonRadio.checked = true;
});

// 신고창 닫기
pressReportButtonClose.addEventListener("click", (e) => {
    pressReportButton.style.display = "none";
});

// 공유하기 버튼
const shareButton = document.querySelector(".devShareBtn");
const toolDiv = document.querySelector(
    ".reaction-item .share-layer.tooltip-layer.qnaSpA",
);

// 공유하기 눌렀을 때 창띄우기
shareButton.addEventListener("click", (e) => {
    toolDiv.style.display =
        toolDiv.style.display === "block" ? "none" : "block";
});

// 작성하기 버튼
const writeButtonDiv = document.querySelector(".navi-top-area.has-tooltip");
const writeButton = document.querySelector(".navi-top-area.has-tooltip a");

// 작성하기 버튼 눌렀을 때 띄울 툴바
writeButton.addEventListener("click", (e) => {
    writeButtonDiv.classList.toggle("tooltip-open");
});

// URL 복사 클릭

// URL 복사 버튼
const URLCopy = document.querySelector(
    ".button.button-copy-url.button-popup-component",
);

// URL 복사 눌렀을 시 클래스 추가
const URLCopyLayer = document.querySelector(".url-copy-layer");
// 닫기 버튼
const URLCopyLayerBefore = document.querySelector(".button.button-close");

// 클릭 시 "attached" 클래스 토글
URLCopy.addEventListener("click", (e) => {
    URLCopyLayer.classList.toggle("attached");
});

// 닫기 버튼 누르면 "attached" 클래스 삭제
URLCopyLayerBefore.addEventListener("click", (e) => {
    URLCopyLayer.classList.remove("attached");
});

// 게시글(질문) 좋아요(로그인)

// 좋아요 버튼
// const qstnLikeButton = document.querySelector(".devQstnLike");

// 버튼 눌렀을 때 클래스 "on" 토글
// if (qstnLikeButton) {
//     qstnLikeButton.addEventListener("click", (e) => {
//         qstnLikeButton.classList.toggle("on");
//     });
// }

// // 댓글 좋아요(로그인)

// 댓글에 좋아요 버튼들
// const chatLikeButtonList = document.querySelectorAll(
//     ".answerArea li div button.btnHeart.qnaSpB.devBtnAnswerLike",
// );

// 각 버튼 눌렀을 시 "active" 토글
// chatLikeButtonList.forEach((chatLike) => {
//     chatLike.addEventListener("click", (e) => {
//         chatLike.classList.toggle("active");
//     });
// });

// 대댓글(로그인)

// 댓글 버튼들
const commentReplyButtonList = document.querySelectorAll(
    ".answerArea li div button.btnCmt.devBtnComtList",
);

commentReplyButtonList.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // 내가 누른 버튼이 속한 li 찾기
        const li = btn.closest("li");
        const commentSec = li.querySelector(".commentSec");
        btn.classList.toggle("active");
        if (btn.classList.contains("active")) {
            commentSec.style.display = "block";
        } else {
            commentSec.style.display = "none";
        }
        // 닫기 버튼 눌렀을 때 닫히기.
        const commentReplyCloseButton = document.querySelector(
            ".btnCmtClose.qnaSpA.qnaBtnClose",
        );
        commentReplyCloseButton.addEventListener("click", (e) => {
            commentSec.style.display = "none";
            btn.classList.remove("active");
        });
    });
});

// 북마크 등록(로그인)
// const buttonBookMark = document.querySelector(
//     ".btnBookmark.qnaSpB.devQnaDetailBookmark",
// );
// const bookMarkLayer = document.querySelector(
//     ".book-mark-layer.tooltip-layer.qnaSpA",
// );

// buttonBookMark.addEventListener("click", (e) => {
//     if (!buttonBookMark.classList.contains("on")) {
//         bookMarkLayer.style.opacity = "1";
//         setTimeout(() => {
//             bookMarkLayer.style.opacity = "0";
//         }, 975);
//     } else {
//         bookMarkLayer.style.opacity = "0";
//     }
//     buttonBookMark.classList.toggle("on");
// });

// // 요소 선택（비로그인）
// const wrapper = document.querySelector(".writeBoxWrap.cmtWrite");
// const mainTextarea = wrapper.querySelector("mainTextarea");
// const buttons = document.querySelectorAll(".btnBx.devComtRoot button");

// buttons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         alert("로그인 후 이용해주세요.");
//     });
// });

// mainTextarea.addEventListener("click", (e) => {
//     alert("로그인 후 이용해주세요.");
// });

// 비로그인 시 로그인 페이지로 이동(클릭 이벤트)
// function loginHref() {
//     location.href = "";
// }

// // 신고 (비로그인)
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

// 댓글에 이모티콘
const imoticonButtons = document.querySelectorAll(".icon-emoticon.qnaSpB");
const imoticonToolbars = document.querySelectorAll(
    ".layer-box-wrap.emotion-layer",
);
const buttonLayerCloses = document.querySelectorAll(".btn-layer-close.qnaSpB");

imoticonButtons.forEach((imoticonButton, i) => {
    imoticonButton.addEventListener("click", (e) => {
        imoticonButton.classList.toggle("on");
        imoticonToolbars[i].classList.toggle("open");
    });
});

// 이모티콘 버튼 x눌렀을 때 나가기
buttonLayerCloses.forEach((buttonLayerClose, idx) => {
    buttonLayerClose.addEventListener("click", (e) => {
        imoticonToolbars[idx].classList.remove("open");
        imoticonButtons[idx].classList.remove("on");
    });
});

// 대댓글 전용
// 댓글 통합(로그인)
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
            textarea.value = textarea.value.substring(0, 1001);
            textarea.focus();
            ph2List[idx].style.display = "none";
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
    textarea.addEventListener("input", (e) => {
        if (textarea.value) {
            ph2List[idx].style.display = "none";
        } else {
            // 글자가 없으면 ph2 다시 표시
            ph2List[idx].style.display = "block";
        }
    });
});

// 댓글 달기 버튼
const replySubmitButton = document.querySelector(".btnSbm.devBtnAnswerWrite");
// 대댓글 달기 버튼
const replyOfReplySubmitButtons = document.querySelectorAll(
    ".btnSbm.devBtnComtWrite",
);

// 대댓글 달기
replyOfReplySubmitButtons.forEach((replyOfReplySubmitButton) => {
    replyOfReplySubmitButton.addEventListener("click", (e) => {
        location.href = "../community/QnA-detail.html";
    });
});

// 댓글 달기
replySubmitButton.addEventListener("click", (e) => {
    alert("댓글이 등록되었습니다.");
    location.href = "../community/QnA-detail.html";
});

const addFileButtons = document.querySelectorAll(".button icon-photo.qnaSpB");

addFileButtons.forEach((addFileButton) => {
    const thumbnail = document.querySelector("div.image");
    const cancel = document.querySelector("div.cancel");

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

    cancel.addEventListener("click", (e) => {
        input.value = "";
        cancel.style.display = "none";
        thumbnail.style.backgroundImage = `url(./images/add.png)`;
    });
});
