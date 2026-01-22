// 직무선배 체크박스(로그인)
const firstCheckButton =
    document.getElementById("lb_targetCheck2").nextElementSibling;
const jobCheckDrop = document.querySelector(
    ".btn-select.qnaSpA.devQnaWriteBizJobtypeDropDownButton.devQnaWriteBizJobtypeLayer",
);
const jobCheckDropDown = document.querySelector(
    ".layer-box-wrap.job.innerScroll",
);
const jobCheckDropDownCancelButton = document.querySelector(
    ".btn-layer-close.qnaSpB.devQnaWriteBizJobtypeLayerClose",
);
const searchDetailButton = document.querySelector(
    ".btn-direct-search.qnaSpA.devQnaWriteBizJobtypeDirectSearchButton",
);
const searchDetailButtonResult = document.querySelector(
    ".layer-box-wrap.job-directInput",
);
const jobToggleSelected = document.querySelectorAll(".tab.qnaSpA");

const tabMenuClassOnDiv = document.querySelector(".category-group");

const tabMenuCancelButton = document.querySelector(
    ".btn-layer-close.qnaSpB.devQnaWriteBizJobtypeDirectSearchLayerClose",
);

const deleteAllJob = document.querySelector(
    ".btnAllDel.devQnaWriteBizJobtypeAllDeleteButton",
);

const layerCont = document.querySelector(
    ".layer-cont.devRecentSearchBizJobtype",
);

const recentSearchTab = document.querySelector(
    ".layer-cont.devRecentSearchBizJobtypeEmpty",
);

const myJobToggle = document.querySelector(
    ".subtitle-wrap.has-tooltip.devQnaWriteBizJobtypeLayerTooltip",
);
const myJobButton = document.querySelector(".select-tooltip.qnaSpA");

// const contList = document.querySelector(".");

// 직무선배 버튼 이벤트(로그인)
firstCheckButton.addEventListener("click", (e) => {
    jobCheckDrop.classList.toggle("on");
});

jobCheckDrop.addEventListener("click", (e) => {
    jobCheckDropDown.classList.toggle("open");
});

jobCheckDropDownCancelButton.addEventListener("click", (e) => {
    jobCheckDropDown.classList.remove("open");
});

tabMenuCancelButton.addEventListener("click", (e) => {
    jobCheckDropDown.classList.remove("open");
    searchDetailButtonResult.classList.remove("open");
});

searchDetailButton.addEventListener("click", (e) => {
    searchDetailButtonResult.classList.toggle("open");
});

myJobButton.addEventListener("click", (e) => {
    myJobToggle.classList.toggle("tooltip-open");
});

// deleteAllJob.addEventListener("click", (e) => {
//     layerCont.style.display = "none";
//     deleteAllJob.style.display = "none";
//     recentSearchTab.style.display = "block";
// });

// 변수에 담아놓고 사용(로그인)
let tempSelect = null;

jobToggleSelected.forEach((jobToggleSelected) => {
    jobToggleSelected.addEventListener("click", (e) => {
        if (tempSelect) {
            tempSelect.classList.remove("selected");
        }
        tempSelect = jobToggleSelected;
        jobToggleSelected.classList.add("selected");
    });
});

const tabMenuButtons = document.querySelectorAll(
    ".tab-box-wrap > .tab-menu > li.tab",
);
const categoryGroups = document.querySelectorAll(
    ".tab-box-wrap > .category-group",
);

let tempSelectTab = null;
let tempSelectCategory = null; // 카테고리 버튼용 추가

tabMenuButtons.forEach((tabMenuButton, index) => {
    tabMenuButton.addEventListener("click", (e) => {
        // 이전 탭 selected 제거
        if (tempSelectTab) {
            tempSelectTab.classList.remove("selected");
        }

        // 클릭한 탭에 selected 추가
        tempSelectTab = tabMenuButton;
        tabMenuButton.classList.add("selected");

        // 모든 category-group 초기화 후 해당 index만 활성화
        categoryGroups.forEach((group, i) => {
            group.classList.toggle("on", i === index);
        });

        // 해당 탭의 첫번째 카테고리 버튼만 selected
        const currentGroup = categoryGroups[index];
        const categoryButtons = currentGroup.querySelectorAll(".tab.qnaSpA");

        // 모든 카테고리 버튼 selected 제거
        categoryButtons.forEach((btn) => btn.classList.remove("selected"));

        // 첫번째만 selected
        if (categoryButtons[0]) {
            categoryButtons[0].classList.add("selected");
            tempSelectCategory = categoryButtons[0];
        }
    });
});

// 카테고리 버튼 클릭 이벤트 (각 그룹별로)
categoryGroups.forEach((group) => {
    const categoryButtons = group.querySelectorAll(".tab.qnaSpA");

    categoryButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            // 이전 카테고리 selected 제거
            if (tempSelectCategory) {
                tempSelectCategory.classList.remove("selected");
            }

            // 클릭한 카테고리에 selected 추가
            tempSelectCategory = btn;
            btn.classList.add("selected");
        });
    });
});

jobToggleSelected.forEach;
// 동문선배(로그인)
const thirdCheckButton = document.getElementById("lb_targetCheck1");
const uniCheckDrop = document.querySelector(
    ".btn-select.qnaSpA.devQnaWriteUnivLayer.devQnaWriteUnivDropDownButton",
);

const layerBox = document.querySelector(".layer-box-wrap.alumni");
const layerBoxButton = document.querySelector(
    ".btn-select.qnaSpA.devQnaWriteUnivLayer.devQnaWriteUnivDropDownButton ",
);
const layerBoxCancelButton = document.querySelector(
    ".btn-layer-close.qnaSpB.devQnaWriteUnivLayerClose",
);
const uniLabelTag = document.querySelector(".devUnivItem label");

// 동문선배 이벤트(로그인)
thirdCheckButton.addEventListener("click", (e) => {
    uniCheckDrop.classList.toggle("on");
});

layerBoxButton.addEventListener("click", (e) => {
    layerBox.classList.add("open");
});

layerBoxCancelButton.addEventListener("click", (e) => {
    layerBox.classList.remove("open");
});

uniLabelTag.addEventListener("click", (e) => {
    layerBox.classList.remove("open");
});
// // 체험공고 클릭

// // 체험공고 버튼
// const ExperienceAnnouncementClick = document.querySelector(
//     ".icon-recruit.qnaSpB.btn-layer-open",
// );
// // 공고 레이어
// const ExperienceAnnouncementLayer = document.querySelector(".opening-layer");

// // 갔다온 체험
// const handsOnExperience = document.getElementById("recentRecruit");

// ExperienceAnnouncementClick.addEventListener("click", (e) => {
//     ExperienceAnnouncementLayer.classList.toggle("open");
//     ExperienceAnnouncementClick.classList.toggle("on");
//     handsOnExperience.style.display =
//         handsOnExperience.style.display === "block" ? "none" : "block";
// });

// // 체크 개수에 따라 버튼 달라지기
// NodeList.prototype.filter = Array.prototype.filter;
// const applyAttachRecruitBtn = document.querySelector(".apply.attachRecruitBtn");
// console.log(applyAttachRecruitBtn);
// let resultChecked = 0;
// const checkboxes = document.querySelectorAll("input[type=checkbox]");

// checkboxes.forEach((checkbox) => {
//     checkbox.addEventListener("change", (e) => {
//         const count = checkboxes.filter((checkbox) => checkbox.checked).length;
//         applyAttachRecruitBtn.classList.toggle("on", count !== 0);
//         applyAttachRecruitBtn.textContent =
//             count === 0 ? "첨부하기" : `공고 ${count}건 첨부하기`;
//     });
// });
// X 버튼(공용)
const btnLayerCloses = document.querySelectorAll(".btn-layer-close.qnaSpB");

btnLayerCloses.forEach((btnLayerClose) => {
    btnLayerClose.addEventListener("click", (e) => {
        ExperienceAnnouncementClick.classList.remove("on");
        ExperienceAnnouncementLayer.classList.remove("open");
        handsOnExperience.style.display =
            handsOnExperience.style.display === "block" ? "none" : "block";
    });
});
// 링크

// 링크 버튼
const iconBtnLayerOpen = document.querySelector(
    ".icon-link.qnaSpB.btn-layer-open",
);
// 링크 레이어
const linkLayer = document.querySelector(".layer-box-wrap.link-layer");

// 링크 레이어 X버튼
btnLayerCloses.forEach((btnLayerClose) => {
    btnLayerClose.addEventListener("click", (e) => {
        linkLayer.classList.remove("open");
        iconBtnLayerOpen.classList.remove("on");
    });
});

// 링크 클릭
iconBtnLayerOpen.addEventListener("click", (e) => {
    linkLayer.classList.toggle("open");
    iconBtnLayerOpen.classList.toggle("on");
});

const urlRegex = /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;

const inputText = document.querySelector(
    ".jkSchInput.keywordSearch.keywordSearchLink p input[type=text]",
);
const findButton = document.querySelector(".btnSch.qnaSpB.devSearchLink");

// 로딩
const loading = document.querySelector(".loading");

// url 검사 함수 (중복 코드 방지)
function checkUrl() {
    if (urlRegex.test(inputText.value)) {
        loading.style.display = "block";
        setTimeout(() => {
            loading.style.display = "none";
            const a = document.querySelector(".ApiOpenGraphResult");
            a.innerHTML = `
                <a href="#" class="attach-box type-link">
                    <div class="thumb-img-area">
                        <span>링크</span>
                    </div>
                    <div class="link-textarea">
                        <textarea class="corp-name" name="" id="devAttachLinkTitle" cols="20" rows="5" maxlength="51" placeholder="링크 제목을 입력하세요."></textarea>
                    </div>
                </a>
            `;
        }, 1800);
    } else {
        alert("URL을 입력해주세요");
    }
}

// 버튼 클릭
findButton.addEventListener("click", checkUrl);

// 엔터키 입력
inputText.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUrl();
    }
});

// 링크 첨부하기 버튼 활성화

// 링크 제목 입력창
const linkTitleInput = document.querySelector(".ApiOpenGraphResult");
// 첨부하기 버튼
const attachButton = document.querySelector(".apply.attachLinkBtn");

// 입력할 때마다 체크
linkTitleInput.addEventListener("input", (e) => {
    // 링크 제목에 들어갈 변수 담기

    if (e.target.value) {
        attachButton.classList.add("on");
    } else {
        attachButton.classList.remove("on");
    }
});

// 링크 추가
const textarea = document.querySelector(".addFileAndLink");
attachButton.addEventListener("click", (e) => {
    const getText = document.getElementById("devAttachLinkTitle");
    const getURL = document.querySelector(
        ".jkSchInput.keywordSearch.keywordSearchLink p.inpWrap input.schInp",
    );
    if (attachButton.classList.contains("on")) {
        linkLayer.classList.remove("open");
        iconBtnLayerOpen.classList.remove("on");

        textarea.innerHTML += `
            <div class="attach-wrap">
                <a href="#" class="attach-box type-link">
                    <span class="thumb-img-area">
                        <span>링크</span>
                    </span>
                <div class="corp-info-area qnaSpA">
                    <p class="content">${getText.value}</p>
                    <span class="content-url">${getURL.value}</span>
                </div>
            </a>
            <button type="button" class="remove-button qnaSpB">삭제하기</button>
            </div>
        `;
    }
    const a = document.querySelector(".ApiOpenGraphResult");
    a.innerHTML = "";
    getText.value = "";
    getURL.value = "";

    textarea.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-button")) {
            console.log("들어옴");
            e.target.closest(".attach-wrap").remove();
        }
    });
});

// 링크 삭제
const removeLink = document.querySelector(".attach-box.type-link");

// 이미지 버튼
const addPicture = document.querySelector(".icon-photo.qnaSpB.btn-layer-open");
// 숨겨진 파일 input
const photoInput = document.getElementById("photoInput");

// 버튼 클릭 → 숨겨진 input 클릭
addPicture.addEventListener("click", () => {
    photoInput.click();
});

// 파일 선택 시 처리
photoInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // 이미지 파일인지 확인
    if (!file.type.startsWith("image/")) {
        alert("이미지 파일만 올릴 수 있습니다.");
        return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.addEventListener("load", (v) => {
        const path = v.target.result;

        // 이미지를 화면에 추가
        textarea.innerHTML += `
            <div class="attach-wrap attach-image">
                <div class="attach-box type-image">
                    <img src="${path}" alt="첨부 이미지">
                </div>
                <button type="button" class="remove-button qnaSpB">삭제하기</button>
            </div>
        `;
    });

    // 같은 파일 다시 선택 가능하도록 초기화
    e.target.value = "";
});

// 이미지 삭제 (이벤트 위임)
textarea.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-button")) {
        e.target.closest(".attach-wrap").remove();
    }
});

const imoticonButton = document.querySelector(
    ".icon-emotion.qnaSpB.btn-layer-open",
);

const imoticonToggleOpen = document.querySelector(
    ".layer-box-wrap.emotion-layer",
);

imoticonButton.addEventListener("click", (e) => {
    imoticonButton.classList.toggle("on");
    imoticonToggleOpen.classList.toggle("open");
});
