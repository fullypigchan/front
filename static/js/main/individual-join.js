// 비밀번호 도움말 버튼
const btnHelp = document.querySelector(".btnHelp");
const passwordHelp = document.querySelector(".row.mbr_passwd");
const passwordHelpChat = document.querySelector(".lyHelp");

btnHelp.addEventListener("click", (e) => {
    passwordHelp.style.zIndex =
        passwordHelp.style.zIndex === "9100" ? "auto" : "9100";
    passwordHelpChat.style.display =
        passwordHelpChat.style.display === "none" ? "block" : "none";
});

// 비밀번호 표시
const showPasswordButton = document.querySelector(
    ".mbrBtnAuth.dev-password-dp",
);
const showPassword = document.getElementById("M_Pwd");

showPasswordButton.addEventListener("click", (e) => {
    showPassword.type = showPassword.type === "password" ? "text" : "password";
    showPasswordButton.classList.toggle("selected");
});

// 입력정보 경고
const fields = [
    {
        input: "idcheck",
        selector: ".mbr_id",
        notice: "notice_msg_id",
        regexp: /^[a-z0-9]{4,16}$/,
        errorMsg: "4~16자의 영문 소문자, 숫자만 사용 가능합니다.",
    },
    {
        input: "M_Pwd",
        selector: ".mbr_passwd",
        notice: "notice_msg_pwd",
        regexp: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,16}$/,
        errorMsg: "8~16자의 영문, 숫자, 특수문자를 모두 포함해야 합니다.",
    },
    {
        input: "M_Name",
        selector: ".mbr_name",
        notice: "notice_msg_name",
        regexp: /^[가-힣a-zA-Z\s]{2,12}$/,
        errorMsg: "2~12자의 한글, 영문만 입력 가능합니다.",
    },
    {
        input: "Born",
        selector: ".mbr_age",
        notice: "notice_msg_age",
        regexp: /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/,
        errorMsg: "생년월일 8자리를 입력해주세요. (예: 20000131)",
    },
    {
        input: "M_Email",
        selector: ".mbr_email",
        notice: "notice_msg_mail", // HTML에서 id가 notice_msg_mail임
        regexp: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        errorMsg: "올바른 이메일 형식을 입력해주세요.",
    },
    {
        input: "M_Phone",
        selector: ".mbr_phone",
        notice: "notice_msg_phone",
        regexp: /^01[016789]-?\d{3,4}-?\d{4}$/,
        errorMsg: "올바른 휴대폰 번호를 입력해주세요.",
    },
    {
        input: "Certify_Num",
        selector: ".authentication_check",
        notice: "notice_msg_certify",
        regexp: /^\d{6}$/,
        errorMsg: "인증번호 6자리를 입력해주세요.",
    },
];

fields.forEach(({ input, selector, notice, regexp, errorMsg }) => {
    const inputEl = document.getElementById(input);
    const col1 = document.querySelector(`${selector} .col_1`);
    const col2 = document.querySelector(`${selector} .col_2`);
    const noticeEl = document.getElementById(notice);

    if (!inputEl || !col1 || !col2) return;

    // 포커스
    inputEl.addEventListener("focus", () => {
        col1.classList.add("focus");
        col2.classList.add("focus");
    });

    // 블러 (포커스 해제)
    inputEl.addEventListener("blur", () => {
        // 값 없으면 포커스 스타일 제거
        if (!inputEl.value) {
            col1.classList.remove("focus");
            col2.classList.remove("focus");
        }

        // 정규식 검증
        if (regexp && noticeEl) {
            if (!inputEl.value) {
                // 빈 값
                // 마지막 인증번호는 확인 제외
                if (noticeEl.classList.contains("notice_msg_certify")) {
                    noticeEl.innerHTML = "필수 입력 항목입니다.";
                    noticeEl.classList.add("failure");
                    noticeEl.style.display = "block";
                }
            } else if (!regexp.test(inputEl.value)) {
                // 정규식 불일치
                noticeEl.innerHTML = errorMsg;
                noticeEl.classList.add("failure");
                noticeEl.style.display = "block";
            } else {
                // 마지막 인증번호는 확인 제외
                if (noticeEl.classList.contains("notice_msg_certify")) {
                    // 성공
                    noticeEl.innerHTML = "확인되었습니다.";
                    noticeEl.classList.remove("failure");
                    noticeEl.classList.add("success");
                    noticeEl.style.display = "block";
                    setTimeout(() => {
                        noticeEl.classList.remove("success");
                        noticeEl.style.display = "none";
                    }, 1000);
                }
            }
        }
    });
});

// 인증번호 전송
const verificationCodeSend = document.querySelector(
    ".button.buttonSendCertification",
);
const phoneRegexp = /^01[016789]-?\d{3,4}-?\d{4}$/;
const PhoneNumber = document.getElementById("M_Phone");
const phoneNotice = document.getElementById("notice_msg_phone");

verificationCodeSend.addEventListener("click", (e) => {
    if (phoneRegexp.test(PhoneNumber.value)) {
        phoneNotice.innerHTML = "인증번호가 전송되었습니다.";
        phoneNotice.classList.add("success");
        phoneNotice.style.display = "block";
        setTimeout(() => {
            phoneNotice.classList.remove("success");
            phoneNotice.style.display = "none";
        }, 1500);
    }
});

// 인증번호 재전송
const btnReSendCert = document.getElementById("btnReSendCert");
btnReSendCert.addEventListener("click", (e) => {
    if (phoneRegexp.test(PhoneNumber.value)) {
        phoneNotice.innerHTML = "인증번호가 재전송되었습니다.";
        phoneNotice.classList.add("success");
        phoneNotice.style.display = "block";
        setTimeout(() => {
            phoneNotice.classList.remove("success");
            phoneNotice.style.display = "none";
        }, 1500);
    } else {
        phoneNotice.innerHTML = "휴대폰 번호를 입력해주세요";
        phoneNotice.classList.add("failure");
        phoneNotice.style.display = "block";
    }
});

// 인증번호 확인
const verificationCode = document.getElementById("Certify_Num");
const verificationCodeCheck = document.getElementById("btnCheckCert");
const verificationCodeNotice = document.getElementById("notice_msg_certify");

verificationCodeCheck.addEventListener("click", (e) => {
    if (verificationCode.value === "000000") {
        verificationCodeNotice.innerHTML = "인증이 완료되었습니다.";
        verificationCodeNotice.classList.add("success");
        verificationCodeNotice.style.display = "block";
        setTimeout(() => {
            verificationCodeNotice.classList.remove("success");
            verificationCodeNotice.style.display = "none";
        }, 1500);
    }
});
