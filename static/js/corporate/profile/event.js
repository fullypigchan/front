NodeList.prototype.filter = Array.prototype.filter;
NodeList.prototype.map = Array.prototype.map;
NodeList.prototype.join = Array.prototype.join;
NodeList.prototype.flat = Array.prototype.flat;

// 로고 업로드 모달
//      열기
const logoUploadButton = document.getElementById("devLogoUp");
const logoUploadLayout = document.querySelector(".tbCell.tbLogo");

const logoUploadModal = document.querySelector(".popLogoUpload");
const logoDeleteModal = document.querySelector(".popLogoDel");

//      닫기
const logoUploadCloseButton = document.getElementById("devCloseLayer");
const logoDeleteCloseButton = document.getElementById("devCloseDelLayer");

// input
const companyBasicinputs = document
    .querySelectorAll(".artCoBasic input")
    .filter((input) => !input.closest(".addrMngWrap"));
const textareas = document.querySelectorAll("textarea");

//      로고 선택
const selectLogoInput = document.getElementById("devSelectLogo");
const selectLogoLabel = document.querySelector("#devSelectLogoDelegator label");
let logoImage = "";

//      로고 업로드
const logoUploadSubmitButton = document.getElementById("devSubmit");
const logoContainer = document.querySelector(".tbCell.tbLogo");

//      로고 삭제
const logoDeleteButton = document.getElementById("devDeleteLogo");

// 자본금
const capitalInputLayer = document.querySelector(
    ".tbCapital .elWrap .schInpType",
);

// 기업형태
const typeSelectButton = document.getElementById("devCoType");
const typeSelectList = document.querySelector(".selTypeList");
const companyTypeResultSpan = document.getElementById("Company_Name");

//      외국 기업
const companyTypeInput = document.getElementById("Company_Type");
const nationLayer = document.getElementById("devForeignCoArea");
const nationSearchList = document.getElementById("devNationSearchResult");
const nationSearchContainer = document.getElementById(
    "devNationSearchContainer",
);
const nationInput = document.getElementById("devNation");

//              나라
const nations =
    "가나,가봉,가이아나,감비아,과테말라,그레나다,그리스,그린란드,기니,기니비사우,나미비아,나우루공화국,나이지리아,남아프리카공화국,네델란드,네팔,노르웨이,뉴질랜드,니제르,니카라과,대만,덴마크,도미니카공화국,도미니카연방,독일,동티모르,라오스,라이베리아,라트비아,러시아,레바논,레소토,루마니아,룩셈부르크,르완다,리비아,리투아니아,리히텐슈타인,마다가스카르,마셜,마케도니아,말라위,말레이시아,말리,멕시코,모나코,모로코,모리셔스,모리타니아,모잠비크,몰도바,몰디브,몰타,몽골,미국,미얀마,미크로네시아,바누아투,바레인,바베이도스,바티칸 시국,바하마,방글라데시,베냉,베네수엘라,베트남,벨기에,벨라루스,벨리즈,보스니아.헤르체코비나,보츠와나,볼리비아,부룬디,부르키나파소,부탄,불가리아,브라질,브루나이,사모아,사우디아라비아,사이프러스,산마리노,상투메프린시페,세네갈,세르비아몬테네그로,세이셸,세인트루시아,세인트빈센트그레나딘,세인트키츠네비스,소말리아,솔로몬제도,수단,수리남,스리랑카,스와질란드,스웨덴,스위스,스페인,슬로바키아,슬로베니아,시리아,시에라리온,싱가포르,아랍에미리트연합국,아르메니아,아르헨티나,아이슬란드,아이티,아일랜드,아제르바이잔,아프가니스탄,안도라,알바니아,알제리,앙골라,앤티가바부다,에리트레아,에스토니아,에콰도르,에티오피아,엘살바도르,영국,예멘,오만,오스트레일리아,오스트리아,온두라스,요르단,우간다,우루과이,우즈베키스탄,우크라이나,이라크,이란,이스라엘,이집트,이탈리아,인도,인도네시아,일본,자메이카,잠비아,적도기니,조지아,중국,중앙아프리카공화국,지부티,짐바브웨,차드,체코,칠레,카메룬,카보베르데,카자흐스탄,카타르,캄보디아,캐나다,케냐,코모로,코스타리카,코트디부아르,콜롬비아,콩고,콩고민주공화국,쿠바,쿠웨이트,크로아티아,키르기즈스탄,키리바시,타지키스탄,탄자니아,태국,터키,토고,통가,투르크메니스탄,투발루,튀니지,트리니다드토바고,파나마,파라과이,파키스탄,파푸아뉴기니,팔라우,페루,포르투갈,폴란드,푸에르토리코,프랑스,피지,핀란드,필리핀,헝가리";
const nationTags = nations
    .split(",")
    .map((nation) => {
        return `<li><a class="devNationSearchItem" style="cursor:pointer">${nation}</a></li>`;
    })
    .join("");
let tempTypeSelectButton = document.querySelector(".devCoTypeItem.on button");

// 업종
const industryCategoryList = document.querySelector(
    ".tbPart .selTypeList ul:first-child",
);
const industryPartLists = document.querySelectorAll(".tbPart .devPartList");

const industrySelectButton = document.querySelector(".tbPart .btnSelType");
const industryApplyButtons = document.querySelector(".tbPart .selTypeBtn");

const industryInput = document.getElementById("Industry_Code");
const industryResultSpan = document.getElementById("Industry_Name");

//      temp & 기본값 설정
// setIndustrySelectClass();

let tempIndustryType = document.querySelector(".tbPart .devPartCtgr.on button");
let tempIndustryPartList = document.querySelector(".tbPart .devPartList.devOn");
let tempIndustryPartItem = document.querySelector(
    ".tbPart .devPartList .devPartItem.on button",
);
let tempIndustryPartItemValue = tempIndustryPartItem?.textContent;

//      기본값 설정
// tempIndustryPartList && (tempIndustryPartList.style.display = "block");

// tempIndustryPartItem &&
//     (industryInput.value =
//         tempIndustryPartItem.closest(".devPartItem").dataset.part);

// industryInput.value &&
//     (industryResultSpan.textContent = tempIndustryPartItemValue);

// if (tempIndustryPartItem) {
//     industryInput.value =
//         tempIndustryPartItem.closest(".devPartItem").dataset.part;
//     if (industryInput.value) {
//         industryResultSpan.textContent = tempIndustryPartItemValue;
//     }
// }

// 회사주소
//      국내
const addressSearchButton = document.getElementById("devSearchAddr");
const addressSearchLayer = document.getElementById("devAddrMngWrap");

const addressLayerCloseButton = document.getElementById("devCloseAddrLayer");
const addressResultButtons = document.querySelector(".popAddr .popFunc");
const addressSearchPostCodeButton =
    document.getElementById("searchPostCodeBtn");
const addressResultSpan = document.getElementById("devAddr");
const addressInputs = document.querySelectorAll(".popAddr input[type=text]");

const previousAddressInputStyle = addressInputs[0].style.border;

const addressLayer = document.getElementById("devAddrArea");

//      외국
const foreignAddressLayer = document.getElementById("devForeignAddrArea");

// 연혁 및 실적 & 기업개요 및 비전
const historyTextareaLayer = document.querySelector(
    ".artCoHistory .mtcTxaType",
);
const overviewTextareaLayer = document.querySelector(
    ".artCoOverview .mtcTxaType",
);

// 사진 업로드
const photoUploadButton = document.querySelector(".button-photo-upload");
const photoUploadLayer = document.getElementById("devMngPhotoWrap");

const photoUploadCloseButton = document.querySelector(
    ".mtcBtnPopClose.devClosePhotoLive",
);
const photoDelegatorButton = document.getElementById("devSelectPhotoDelegator");
const photoSelectInput = document.getElementById("devSelectPhoto");
const fileNameSpan = document.getElementById("devFileName");

const photoDescriptionTextarea = document.getElementById("devPhotoDesc_upload");

const photoResultButtons = document.querySelector(".fileMngWrap .popFunc");
const photoList = document.getElementById("devPhotoVideoList");

let tempFileName = fileNameSpan.textContent;
let photoImage = "";

// 복리후생
const moreWelfareInfoButton = document.getElementById("devWlfrInfo");
const welfareModalLayer = document.querySelector(".giWelfareModal");

const welfareModalContent = document.querySelector(
    ".giWelfareModal .modalContent",
);
const welfareModalCloseButton = document.querySelector(
    ".giWelfareModal .btnModalClose",
);
const welfareModalResultButtons = document.querySelector(
    ".giWelfareModal .regPrefWrap .buttons",
);

const welfareModalList = document.querySelectorAll(
    ".giWelfareModal .scrlBx .fieldList ul li",
);
const previewWelfareList = document.querySelector(".devPreviewList");
const welfareDirectInputSection = document.querySelector(
    ".seflAddInpWrap.devDirectInput",
);
const previewWelfareListResetButton =
    welfareDirectInputSection.nextElementSibling;

const recommendWelfareButtons = document.querySelector(".autoWlfrRegArea");
const welfareList = document.getElementById("devWlfrList");

//      모달 input 리스트
const welfareModalInputList = welfareModalList.map((list) =>
    list.querySelector("input"),
);
//      기본 체크박스
const welfareModalBasicInputValueList = welfareModalInputList
    .filter((input) => input.checked)
    .map((input) => input.value);

const body = document.querySelector("body");

let tempWelfareInputValues = {};
let tempWelfareModalCodes = {};

// 함수
// input formatting
const formatInputValue = (value, pattern) => {
    let index = 0;

    const result = pattern
        .map((len) => {
            const result = value.slice(index, index + len);
            index += len;
            return result;
        })
        .join("-");

    return result || value;
};

// 주소 api
const executeDaumPostcode = () => {
    new daum.Postcode({
        oncomplete: function (data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            let addr = ""; // 주소 변수
            let extraAddr = ""; // 참고항목 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === "R") {
                // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else {
                // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
            if (data.userSelectedType === "R") {
                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
                    extraAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if (data.buildingName !== "" && data.apartment === "Y") {
                    extraAddr +=
                        extraAddr !== ""
                            ? ", " + data.buildingName
                            : data.buildingName;
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if (extraAddr !== "") {
                    extraAddr = " (" + extraAddr + ")";
                }
                // 조합된 참고항목을 해당 필드에 넣는다.
                document.getElementById("extraAddress").value = extraAddr;
            } else {
                document.getElementById("extraAddress").value = "";
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById("postcode").value = data.zonecode;
            document.getElementById("address").value = addr;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("detailAddress").focus();
        },
    }).open();
};

// 업종 기본값 설정
// function getIndustryInputInitialValue() {
//     let result = [];

//     for (let partList of industryPartLists) {
//         const [partItem] = partList
//             .querySelectorAll(".devPartItem")
//             .filter(
//                 (partItem) => partItem.dataset.part === industryInput.value,
//             );
//         if (partItem) {
//             result.push(partItem);
//             result.push(partList);
//             break;
//         }
//     }
//     const [category] = industryCategoryList
//         .querySelectorAll(".devPartCtgr")
//         .filter(
//             (ctgr) =>
//                 ctgr.dataset.partCtgrCode === result[1].dataset.partCtgrCode,
//         );
//     result.push(category);

//     return result;
// }
// function setIndustrySelectClass() {
//     if (industryInput.value) {
//         const initialValue = getIndustryInputInitialValue();

//         initialValue.forEach((value, index) => {
//             value.classList.add(index === 1 ? "devOn" : "on");
//         });
//     }
// }

// 이벤트
// input
companyBasicinputs.forEach((input) => {
    // value 가 있을 때
    if (input.value) {
        input.closest(".elWrap").classList.add("ok");
    }

    // focus
    input.addEventListener("focus", (e) => {
        if (input.id === "devOpenDate" || input.id === "devFax") {
            input.value = input.value.replace(/[^0-9]/g, "");
        }

        if (input.classList.contains("devCapitalText")) {
            const capitalA = document.getElementById("devCapitalUnitA");
            const capitalB = document.getElementById("devCapitalUnitB");

            capitalA.textContent = "억";
            capitalB.textContent = "만원";

            input.closest(".inpTxItem").classList.add("ok");

            input.closest(".elWrap").classList.add("on");
            if (
                !capitalA.previousElementSibling.value &&
                !capitalB.previousElementSibling.value
            ) {
                input.closest(".elWrap").classList.remove("ok");
            }
        } else {
            input.closest(".elWrap").classList.remove("ok");
            input.closest(".elWrap").classList.add("on");
        }

        // 모달/드롭다운 닫기
        logoUploadLayout.classList.remove("on");
        industrySelectButton.closest(".elWrap").classList.remove("on");
        typeSelectButton.closest(".elWrap").classList.remove("on");
        addressSearchLayer.classList.remove("on");
    });

    // blur
    input.addEventListener("blur", (e) => {
        // value format
        let pattern = [];
        if (input.id === "devOpenDate") {
            if (input.value.length === 6) {
                pattern = [4, 2];
            } else if (input.value.length >= 8) {
                pattern = [4, 2, 2];
            }
        } else if (input.id === "devFax") {
            switch (input.value.length) {
                case 8:
                    pattern = [4, 4];
                    break;
                case 9:
                    pattern = [2, 3, 4];
                    break;
                case 10:
                    pattern = [3, 3, 4];
                    break;
                case 11:
                    pattern = [3, 4, 4];
                    break;
                case 12:
                case 13:
                case 14:
                case 15:
                    pattern = [4, 4, 4];
                    break;
                default:
                    break;
            }
        }
        input.value = formatInputValue(input.value, pattern);

        input.closest(".elWrap").classList.remove("on");
        input.value && input.closest(".elWrap").classList.add("ok");
    });

    // keyup
    if (
        [
            "devOpenDate",
            "devWorkerCnt",
            "devFax",
            "devCapital_A",
            "devCapital_B",
        ].includes(input.id)
    ) {
        input.addEventListener("keyup", (e) => {
            input.value = input.value.replace(/[^0-9]/g, "");
        });
    }

    // input
    input.addEventListener("input", (e) => {
        if (input.id === "devNation") {
            if (!e.target.value) {
                nationSearchList.innerHTML += nationTags;
                nationSearchContainer.style.display = "block";
            } else {
                nationSearchContainer.style.display = "none";
            }
        } else if (
            input.id === "devMainItem" ||
            input.id === "devAddrForeign"
        ) {
            input.maxLength < input.value.length &&
                (input.value = input.value.slice(0, input.maxLength));

            input.closest(".schInpType").querySelector("em").textContent =
                input.value.length;
        }
    });
});
//      외국계 기업 리스트
nationSearchList.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        nationInput.value = e.target.textContent;

        nationSearchContainer.closest(".elWrap").classList.add("ok");
        nationSearchContainer.style.display = "none";
    }
});

// textarea
textareas.forEach((textarea) => {
    textarea.addEventListener("focus", (e) => {
        // 모달/드롭다운 닫기
        logoUploadLayout.classList.remove("on");
        industrySelectButton.closest(".elWrap").classList.remove("on");
        typeSelectButton.closest(".elWrap").classList.remove("on");
        addressSearchLayer.classList.remove("on");
    });
});

//      닫기
logoUploadCloseButton.addEventListener("click", (e) => {
    logoUploadLayout.classList.remove("on");
});
logoDeleteCloseButton.addEventListener("click", (e) => {
    logoUploadLayout.classList.remove("on");
});

//      열기
logoUploadLayout.addEventListener("click", (e) => {
    selectLogoInput.value = "";

    if (
        e.target.closest(".infoBtnB.infoBtnUp") ||
        e.target.classList.contains("infoBtnMod")
    ) {
        selectLogoLabel.textContent = "로고 선택";
        logoImage = "";

        logoDeleteModal.classList.remove("on");
        logoUploadModal.classList.add("on");
    } else if (e.target.classList.contains("infoBtnDel")) {
        logoUploadModal.classList.remove("on");
        logoDeleteModal.classList.add("on");
    } else {
        return;
    }

    logoUploadLayout.classList.add("on");

    typeSelectButton.closest(".elWrap").classList.remove("on");
});

//      로고 선택
selectLogoInput.addEventListener("change", (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.addEventListener("load", (e) => {
        logoImage = e.target.result;

        const check = ["gif", "jpeg", "jpg", "png"].some((extension) =>
            logoImage.includes(extension),
        );

        if (!check) {
            logoImage = "";
            selectLogoLabel.textContent = "";
            selectLogoInput.value = "";

            alert("파일 형식이 올바르지 않습니다.");
            return;
        }
        selectLogoLabel.textContent = file.name;
    });
});

//      로고 업로드
logoUploadSubmitButton.addEventListener("click", (e) => {
    if (logoImage) {
        const logoP = document.createElement("p");
        const buttonP = document.createElement("p");

        logoP.classList.add("logo");
        logoP.innerHTML = `<img src="${logoImage}">`;

        buttonP.classList.add("btn");
        buttonP.innerHTML = `
        <button type="button" class="infoBtn infoBtnDel" id="devLogoDel"></button>
        <button type="button" class="infoBtn infoBtnMod" id="devLogoModify"></button>
        `;

        logoContainer.firstElementChild.remove();
        logoContainer.prepend(buttonP);
        logoContainer.prepend(logoP);

        logoUploadLayout.classList.remove("on");

        alert("업로드 되었습니다.");
    } else {
        alert("로고를 선택해 주십시오.");
    }
});

//      로고 삭제
logoDeleteButton.addEventListener("click", (e) => {
    const logoButton = document.createElement("button");
    logoButton.classList.add("infoBtnB", "infoBtnUp");
    logoButton.id = "devLogoUp";
    logoButton.type = "button";
    logoButton.innerHTML = "<span>로고업로드</span>";

    logoContainer.querySelector(".logo").remove();
    logoContainer.querySelector(".btn").remove();

    logoContainer.prepend(logoButton);

    logoUploadLayout.classList.remove("on");
});

// 기업형태
typeSelectButton.addEventListener("click", (e) => {
    typeSelectButton.closest(".elWrap").classList.toggle("on");

    industrySelectButton.closest(".elWrap").classList.remove("on");
});
typeSelectList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        tempTypeSelectButton &&
            tempTypeSelectButton
                .closest(".devCoTypeItem")
                .classList.remove("on");

        e.target.closest(".devCoTypeItem").classList.add("on");
        typeSelectButton.closest(".elWrap").classList.add("ok");

        companyTypeResultSpan.textContent = e.target.textContent;
        companyTypeInput.value =
            e.target.closest(".devCoTypeItem").dataset.type;

        tempTypeSelectButton = e.target;

        if (["6", "8", "10"].includes(companyTypeInput.value)) {
            nationLayer.style.display = "table";

            // 회사 주소
            addressLayer.style.display = "none";
            foreignAddressLayer.style.display = "block";
        } else {
            nationLayer.style.display = "none";

            // 회사 주소
            foreignAddressLayer.style.display = "none";
            addressLayer.style.display = "block";
        }
        typeSelectButton.closest(".elWrap").classList.remove("on");
    }
});

// 업종
industrySelectButton.addEventListener("click", (e) => {
    industrySelectButton.closest(".elWrap").classList.toggle("on");

    typeSelectButton.closest(".elWrap").classList.remove("on");
});
industryCategoryList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        tempIndustryType &&
            tempIndustryType.closest(".devPartCtgr").classList.remove("on");

        tempIndustryPartList && (tempIndustryPartList.style.display = "none");

        const [target] = industryPartLists.filter(
            (partList) =>
                partList.dataset.partCtgrCode ===
                e.target.closest(".devPartCtgr").dataset.partCtgrCode,
        );

        target.style.display = "block";
        tempIndustryPartList = target;

        e.target.closest(".devPartCtgr").classList.add("on");
        tempIndustryType = e.target;
    }
});
industryPartLists.forEach((partList) => {
    partList.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            tempIndustryPartItem &&
                tempIndustryPartItem
                    .closest(".devPartItem")
                    .classList.remove("on");

            e.target.closest(".devPartItem").classList.add("on");
            industryInput.value = e.target.closest(".devPartItem").dataset.part;
            tempIndustryPartItem = e.target;
        }
    });
});
industryApplyButtons.addEventListener("click", (e) => {
    if (e.target.closest(".mtcBtnBd, .mtcBtnBg")) {
        if (e.target.closest(".mtcBtnBg")) {
            if (industryInput.value) {
                tempIndustryPartItemValue = tempIndustryPartItem.textContent;
                industryResultSpan.textContent = tempIndustryPartItemValue;
            }

            if (tempIndustryPartItem) {
                industryInput.value =
                    tempIndustryPartItem.closest(".devPartItem").dataset.part;
                if (industryInput.value) {
                    industryResultSpan.textContent = tempIndustryPartItemValue;
                    industryResultSpan.closest(".elWrap").classList.add("ok");
                }
            }
        }
    } else {
        return;
    }
    industrySelectButton.closest(".elWrap").classList.remove("on");
});

// 회사주소
addressSearchButton.addEventListener("click", (e) => {
    addressInputs.forEach((input, index) => {
        if (index === 0 || index === 1) {
            input.style.border = previousAddressInputStyle;
        }
        input.value = "";
    });

    addressSearchLayer.classList.add("on");
});
//      닫기
addressLayerCloseButton.addEventListener("click", (e) => {
    addressSearchLayer.classList.remove("on");
});
//      우편번호 찾기
addressSearchPostCodeButton.addEventListener("click", (e) => {
    addressInputs
        .filter((input) => input.placeholder.includes("*"))
        .forEach((input) => {
            input.style.border = previousAddressInputStyle;
        });
    executeDaumPostcode();
});
//      확인/취소
addressResultButtons.addEventListener("click", (e) => {
    if (e.target.closest("button")) {
        if (!e.target.closest(".devCloseAddr")) {
            if (addressInputs[0].value && addressInputs[1].value) {
                addressResultSpan.textContent = addressInputs
                    .filter((input) => input.value.replace(/\s/g, "") !== "")
                    .map((input) => input.value)
                    .join(", ");
                addressLayer.classList.add("ok");

                addressSearchLayer.classList.remove("on");
            } else {
                addressInputs
                    .filter((input) => input.placeholder.includes("*"))
                    .forEach((input) => {
                        input.style.border = input.value
                            ? previousAddressInputStyle
                            : "1px solid #ff3333";
                    });
                alert("주소를 입력해 주십시오.");
            }
        } else {
            addressSearchLayer.classList.remove("on");
        }
    }
});
addressInputs
    .filter((input) => input.placeholder.includes("*"))
    .forEach((input, index) => {
        input.addEventListener("input", (e) => {
            index === 0 &&
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""));
            input.style.border = input.value
                ? previousAddressInputStyle
                : "1px solid #ff3333";
        });
    });

// 연혁 및 실적
historyTextareaLayer.addEventListener("click", (e) => {
    historyTextareaLayer.lastElementChild.focus();
    historyTextareaLayer.firstElementChild.style.display = "none";
});
// 기업개요 및 비전
overviewTextareaLayer.addEventListener("click", (e) => {
    overviewTextareaLayer.lastElementChild.focus();
    overviewTextareaLayer.firstElementChild.style.display = "none";
});
document.addEventListener("click", (e) => {
    if (
        !e.target.closest(".artCoHistory .mtcTxaType") &&
        !historyTextareaLayer.lastElementChild.value
    ) {
        historyTextareaLayer.firstElementChild.style.display = "block";
    }

    if (
        !e.target.closest(".artCoOverview .mtcTxaType") &&
        !overviewTextareaLayer.lastElementChild.value
    ) {
        overviewTextareaLayer.firstElementChild.style.display = "block";
    }
});

// 사진 업로드
photoUploadButton.addEventListener("click", (e) => {
    if (e.target.closest(".button-photo-upload")) {
        if (photoList.children.length === 15) {
            alert("사진은 최대 15개 까지 업로드 할 수 있습니다.");
            return;
        }
        photoSelectInput.value = "";
        photoDescriptionTextarea.value = "";

        photoDescriptionTextarea
            .closest(".txaBx")
            .querySelector("em").textContent = 0;

        fileNameSpan.textContent = tempFileName;
        photoImage = "";

        photoUploadLayer.classList.add("on");
    }
});

photoUploadCloseButton.addEventListener("click", (e) => {
    photoUploadLayer.classList.remove("on");
});
photoDelegatorButton.addEventListener("click", (e) => {
    if (e.target.closest("label")) {
        photoSelectInput.click();
    }
});
photoSelectInput.addEventListener("change", (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.addEventListener("load", (e) => {
        photoImage = e.target.result;

        const check = ["gif", "jpeg", "jpg"].some((extension) =>
            photoImage.includes(extension),
        );

        if (!check) {
            photoImage = "";
            fileNameSpan.textContent = "";
            photoSelectInput.value = "";

            alert("파일 형식이 올바르지 않습니다.");
            return;
        }
        fileNameSpan.textContent = file.name;
    });
});
photoDescriptionTextarea.addEventListener("input", (e) => {
    e.target.maxLength < e.target.value.length &&
        (e.target.value = e.target.value.slice(0, e.target.maxLength));

    e.target.closest(".txaBx").querySelector("em").textContent =
        e.target.value.length;
});
photoResultButtons.addEventListener("click", (e) => {
    if (e.target.closest(".devClosePhotoLive")) {
        photoUploadLayer.classList.remove("on");
    } else {
        if (photoImage) {
            // 설명 p
            // 사진 li
            const photoItem = document.createElement("li");

            if (photoList.previousElementSibling.tagName !== "P") {
                const description = document.createElement("p");
                description.classList.add("upload-text-guide");
                description.innerHTML =
                    "사진을 끌어다 순서를 변경하거나, 대표 사진으로 옮겨 놓을 수 있습니다.";
                photoList.before(description);
            }

            photoItem.classList.add("thumbnail");
            photoItem.innerHTML = `
                <div class="thumb ok">
                    <img src="${photoImage}">
                    <span class="btnFunc">
                        <button type="button" class="mtcBtn mtcBtnDel_1 devDeletePhoto"></button>
                    </span>
                </div>
                <div class="text-box ${photoDescriptionTextarea.value && "has-value"}">
                    <fieldset>
                        <textarea name="photoVideoText" maxlength="25" title="사진/동영상 설명 입력" placeholder="클릭하여 설명을 입력하세요.">${photoDescriptionTextarea.value}</textarea>
                    </fieldset>
                </div>
            `;

            photoList.appendChild(photoItem);

            photoUploadLayer.classList.remove("on");
        } else {
            alert("이미지 주소가 입력되지 않았습니다.");
        }
    }
});

photoList.addEventListener("focusin", (e) => {
    if (e.target.tagName === "TEXTAREA") {
        e.target.closest(".text-box").classList.add("focus");
    }
});
photoList.addEventListener("focusout", (e) => {
    if (e.target.tagName === "TEXTAREA") {
        e.target.closest(".text-box").classList.remove("focus");
    }
});
photoList.addEventListener("input", (e) => {
    if (e.target.tagName === "TEXTAREA") {
        if (e.target.value) {
            e.target.closest(".text-box").classList.add("has-value");
        } else {
            e.target.closest(".text-box").classList.remove("has-value");
        }
    }
});
photoList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        confirm("해당 사진을 삭제하시겠습니까?") &&
            e.target.closest(".thumbnail").remove();

        photoList.children.length || photoList.previousElementSibling.remove();
    }
});

// 복리후생
//      추천버튼
recommendWelfareButtons.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        // welfareList button 리스트
        const welfareButtonList = welfareList
            .querySelectorAll("li")
            .map((li) => li.firstElementChild);
        // 밖에서 선언하면 리스트에 동적으로 생성된 요소는 가져올 수 없음

        // 이미 선택한 복리후생이 있는지 검사
        const [duplication] = welfareButtonList.filter(
            (button) => button.dataset.itemCode === e.target.dataset.itemCode,
        );

        if (duplication) {
            // 이미 선택했다면 alert창
            alert("이미 선택하신 복리후생입니다.");
        } else {
            // 복리후생 리스트에 추가
            const welfareItem = document.createElement("li");
            welfareItem.innerHTML = `
                    <button type="button" class="devItemDel" data-item-code="${e.target.dataset.itemCode}">${e.target.textContent}</button>
                `;
            welfareList.appendChild(welfareItem);

            // 설명글 보이지 않게
            welfareList.previousElementSibling.style.display = "none";

            // 모달 input check로 바꾸기
            const [targetInput] = welfareModalInputList.filter(
                (input) => input.value === e.target.dataset.itemCode,
            );

            targetInput.closest("span").classList.add("chk");
            targetInput.checked = true;
            tempWelfareInputValues[targetInput.value] = e.target.textContent;
        }
    }
});
welfareList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        // welfareList button 리스트
        const welfareButtonList = welfareList
            .querySelectorAll("li")
            .map((li) => li.firstElementChild);

        // 삭제 타겟
        const [targetButton] = welfareButtonList.filter(
            (button) => button.dataset.itemCode === e.target.dataset.itemCode,
        );

        // 리스트에서 삭제
        targetButton.closest("li").remove();

        // 모달 input check를 false로 바꾸기
        const [targetInput] = welfareModalInputList.filter(
            (input) => input.value === e.target.dataset.itemCode,
        );

        // 클래스 제거, check 비활성화
        if (e.target.dataset.itemCode.length !== 6) {
            targetInput.closest("span").classList.remove("chk");
            targetInput.checked = false;
        }
        delete tempWelfareInputValues[e.target.dataset.itemCode];

        // 리스트에 아무것도 없다면 설명글 보여주기
        if (!Object.keys(tempWelfareInputValues).length) {
            welfareList.previousElementSibling.style.display = "block";
        }
    }
});
//      전체보기
moreWelfareInfoButton.addEventListener("click", (e) => {
    // check인 input을 previewWelfareList에 추가하기

    // 추천으로 추가한 복리후생 항목이 0개라면
    // 기존 checked input에 클래스 추가/checked를 true로
    welfareModalInputList
        .filter((input) =>
            welfareModalBasicInputValueList.includes(input.value),
        )
        .forEach((input) => {
            if (!Object.keys(tempWelfareInputValues).length) {
                input.checked = true;
                input.closest("span").classList.add("chk");
            } else {
                input.checked = false;
                input.closest("span").classList.remove("chk");
            }
        });

    // 추가해야 할 항목 처리
    if (!Object.keys(tempWelfareModalCodes).length) {
        welfareModalInputList
            .filter((input) =>
                Object.keys(tempWelfareModalCodes).includes(input.value),
            )
            .forEach((input) => {
                input.checked = true;
                input.closest("span").classList.add("chk");
            });
    }

    // 모달 리스트 비우기
    previewWelfareList.innerHTML = "";
    welfareList.innerHTML = "";
    // 비우지 않으면 이전 값들 누적됨

    // 모달 리스트에 값 넣기
    welfareModalInputList
        .filter((input) => input.checked)
        .forEach((input) => {
            const previewWelfareItem = document.createElement("li");
            previewWelfareItem.classList.add("subItem");
            previewWelfareItem.innerHTML = `
                        <span class="inr">
                            <span class="devItemText">${input.nextElementSibling.textContent}</span>
                            <button type="button" class="spRegA btnItemDel" data-item-code="${input.value}"></button>
                        </span>
                    `;

            previewWelfareList.appendChild(previewWelfareItem);
            tempWelfareModalCodes[input.value] =
                input.nextElementSibling.textContent;
        });
    // 모달 리스트 열기
    previewWelfareList.style.display = "block";

    // 모달창 열기
    const scroll = window.scrollY;
    body.style.height = "100%";
    body.style.position = "fixed";
    body.style.top = `-${scroll}px`;

    moreWelfareInfoButton.classList.add("isCheckButton");
    welfareModalLayer.style.display = "block";
    welfareModalLayer.style.opacity = 1;

    console.log(tempWelfareInputValues);
    console.log(tempWelfareModalCodes);
});

welfareModalCloseButton.addEventListener("click", (e) => {
    // 모달창 닫기
    tempWelfareModalCodes = { ...tempWelfareInputValues };
    Object.entries(tempWelfareInputValues).forEach(([key, value]) => {
        // 복리후생 리스트에 추가
        const welfareItem = document.createElement("li");
        welfareItem.innerHTML = `
            <button type="button" class="devItemDel" data-item-code="${key}">${value}</button>
            `;
        welfareList.appendChild(welfareItem);
    });

    body.style.height = "";
    body.style.position = "";
    body.style.top = "";

    moreWelfareInfoButton.classList.remove("isCheckButton");
    welfareModalLayer.style.display = "none";
    welfareModalLayer.style.opacity = 0;

    console.log(tempWelfareInputValues);
    console.log(tempWelfareModalCodes);
});
welfareModalResultButtons.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        if (e.target.classList.contains("btnOk")) {
            // 모달 - 확인
            tempWelfareInputValues = { ...tempWelfareModalCodes };
        } else {
            tempWelfareModalCodes = { ...tempWelfareInputValues };
        }
        Object.entries(tempWelfareInputValues).forEach(([key, value]) => {
            // 복리후생 리스트에 추가
            const welfareItem = document.createElement("li");
            welfareItem.innerHTML = `
            <button type="button" class="devItemDel" data-item-code="${key}">${value}</button>
            `;
            welfareList.appendChild(welfareItem);
        });
        body.style.height = "";
        body.style.position = "";
        body.style.top = "";

        moreWelfareInfoButton.classList.remove("isCheckButton");
        welfareModalLayer.style.display = "none";
        welfareModalLayer.style.opacity = 0;

        console.log(tempWelfareInputValues);
        console.log(tempWelfareModalCodes);
    }
});
welfareModalList.forEach((li) => {
    li.addEventListener("change", (e) => {
        if (e.target.tagName === "INPUT") {
            if (e.target.checked) {
                // check 했을 때
                // 모달 리스트 열기
                previewWelfareList.style.display = "block";

                // 모달 리스트에 값 넣기
                const previewWelfareItem = document.createElement("li");
                previewWelfareItem.classList.add("subItem");
                previewWelfareItem.innerHTML = `
                <span class="inr">
                <span class="devItemText">${e.target.nextElementSibling.textContent}</span><button type="button" class="spRegA btnItemDel" data-item-code="${e.target.value}"></button>
                </span>
                `;
                previewWelfareList.appendChild(previewWelfareItem);

                e.target.closest("span").classList.add("chk");
                tempWelfareModalCodes[e.target.value] =
                    e.target.nextElementSibling.textContent;
            } else {
                // check 해제 했을 때

                // 제거 대상 찾기
                const [targetButton] = previewWelfareList
                    .querySelectorAll("button")
                    .filter(
                        (button) => button.dataset.itemCode === e.target.value,
                    );

                // 요소 제거, 클래스 제거
                e.target.closest("span").classList.remove("chk");
                targetButton.closest(".subItem").remove();
                delete tempWelfareModalCodes[e.target.value];
            }
        }
    });
});

welfareDirectInputSection.addEventListener("focusin", (e) => {
    // 직접 추가
    if (e.target.tagName === "INPUT") {
        e.target.closest(".inpTxItem").classList.add("ok");
    }
});
welfareDirectInputSection.addEventListener("focusout", (e) => {
    if (e.target.tagName === "INPUT") {
        e.target.value || e.target.closest(".inpTxItem").classList.remove("ok");
    }
});
welfareDirectInputSection.addEventListener("click", (e) => {
    if (e.target.closest(".devDirectInputBtn")) {
        // server: db에서 중복확인 필요
        const itemCode = Math.floor(Math.random() * 900000) + 100000;

        const previewWelfareItem = document.createElement("li");
        previewWelfareItem.classList.add("subItem");
        previewWelfareItem.innerHTML = `
                    <span class="inr">
                        <span class="devItemText">${e.target.closest(".inpTxItem").firstElementChild.value}</span><button type="button" class="spRegA btnItemDel" data-item-code="${itemCode}"></button>
                    </span>
                `;

        previewWelfareList.appendChild(previewWelfareItem);

        // 등록한 새로운 코드 추가
        tempWelfareModalCodes[itemCode] =
            e.target.closest(".inpTxItem").firstElementChild.value;

        // 등록 후 input value 제거
        e.target.closest(".inpTxItem").firstElementChild.value = "";
    }
});
previewWelfareList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        // 요소 제거, 클래스 제거, input check 비활성화
        if (e.target.dataset.itemCode.length !== 6) {
            // 직접 추가한 요소는 제거할 클래스가 없으니 if로 예방
            // 글자 수가 6 이상이면 사용자 정의 복리후생
            const [targetInput] = welfareModalInputList.filter(
                (input) => input.value === e.target.dataset.itemCode,
            );
            targetInput.checked = false;
            targetInput.closest("span").classList.remove("chk");
        }
        e.target.closest(".subItem").remove();
        delete tempWelfareModalCodes[e.target.dataset.itemCode];
    }
});
previewWelfareListResetButton.addEventListener("click", (e) => {
    // 초기화 버튼
    // 모달 input 전부 false로, 클래스도 제거
    welfareModalInputList.forEach((input) => {
        input.checked = false;
        input.closest("span").classList.remove("chk");
    });

    previewWelfareList.innerHTML = "";
    tempWelfareModalCodes = {};
    tempWelfareInputValues = {};

    // 모달 리스트 닫기
    previewWelfareList.style.display = "none";
});
