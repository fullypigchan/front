// 페이지 변경 감지 및 모달 처리
let isFormDirty = false;
let pendingNavigation = null;

// 입력 변경 감지
function markAsDirty() {
    isFormDirty = true;
    updateSaveStatus(false);
}

// 저장 상태 업데이트
function updateSaveStatus(saved) {
    const statusEl = document.querySelector(".save-status");
    if (saved) {
        statusEl.innerHTML =
            '<i class="fas fa-check-circle"></i><span>자동 저장됨</span>';
        statusEl.querySelector("i").style.color = "#22c55e";
    } else {
        statusEl.innerHTML =
            '<i class="fas fa-circle"></i><span>저장되지 않음</span>';
        statusEl.querySelector("i").style.color = "#f59e0b";
    }
}

// 모달 열기
function showLeaveModal(targetUrl) {
    pendingNavigation = targetUrl;
    document.getElementById("leaveModal").classList.add("active");
}

// 모달 닫기
function hideLeaveModal() {
    document.getElementById("leaveModal").classList.remove("active");
    pendingNavigation = null;
}

// 모달 버튼 이벤트
document
    .getElementById("modalCancel")
    .addEventListener("click", hideLeaveModal);
document.getElementById("modalLeave").addEventListener("click", function () {
    isFormDirty = false; // 나가기 허용
    if (pendingNavigation) {
        window.location.href = pendingNavigation;
    }
});

// 모달 외부 클릭 시 닫기
document.getElementById("leaveModal").addEventListener("click", function (e) {
    if (e.target === this) {
        hideLeaveModal();
    }
});

// ESC 키로 모달 닫기
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        hideLeaveModal();
    }
});

// 사이드바 링크 클릭 가로채기
document.querySelectorAll(".sidebar-menu a").forEach((link) => {
    link.addEventListener("click", function (e) {
        // 현재 페이지 링크는 무시
        if (this.classList.contains("active")) return;

        if (isFormDirty) {
            e.preventDefault();
            showLeaveModal(this.href);
        }
    });
});

// 브라우저 뒤로가기/새로고침 시 경고
window.addEventListener("beforeunload", function (e) {
    if (isFormDirty) {
        e.preventDefault();
        e.returnValue = "";
        return "";
    }
});

// 입력 필드들에 변경 감지 추가
document.querySelector(".title-input").addEventListener("input", function () {
    markAsDirty();
    // 에러 상태 해제
    this.classList.remove("error");
    const errorMsg = this.parentElement.querySelector(".error-message");
    if (errorMsg) errorMsg.remove();
});
document
    .querySelector(".content-editor")
    .addEventListener("input", function () {
        markAsDirty();
        // 에러 상태 해제
        this.classList.remove("error");
        const errorMsg = this.parentElement.querySelector(".error-message");
        if (errorMsg) errorMsg.remove();
    });
document
    .querySelectorAll(".meta-field input, .meta-field select")
    .forEach((el) => {
        el.addEventListener("input", function () {
            markAsDirty();
            // 에러 상태 해제
            this.classList.remove("error");
            const errorMsg = this.parentElement.querySelector(".error-message");
            if (errorMsg) errorMsg.remove();
        });
        el.addEventListener("change", markAsDirty);
    });
document
    .getElementById("thumbnail-input")
    .addEventListener("change", markAsDirty);

// 카테고리 입력 (단순 입력)
const categoryInput = document.querySelector(".category-input");

categoryInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        let value = this.value.trim();

        if (value) {
            const tag = document.createElement("span");
            tag.className = "category-tag";
            tag.innerHTML = `${value} <i class="fas fa-times" onclick="removeCategory(this)"></i>`;
            this.parentElement.insertBefore(tag, this);
            this.value = "";
            markAsDirty();
        }
    }
});

// 카테고리 삭제
function removeCategory(el) {
    el.parentElement.remove();
    markAsDirty();
}

// 카테고리 입력 변경 감지
categoryInput.addEventListener("input", function () {
    if (this.value.length > 0) {
        markAsDirty();
    }
});

// 썸네일 업로드 미리보기
document
    .getElementById("thumbnail-input")
    .addEventListener("change", function (e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const preview = document.querySelector(".thumbnail-preview");
                preview.innerHTML = `<img src="${e.target.result}" alt="썸네일 미리보기">`;
            };
            reader.readAsDataURL(file);
        }
    });

// 태그 입력 (# 해시태그 모드)
const tagInput = document.querySelector(".tag-input");

tagInput.addEventListener("input", function (e) {
    // #으로 시작하면 해시태그 모드 스타일 적용
    if (this.value.startsWith("#")) {
        this.classList.add("hashtag-mode");
    } else {
        this.classList.remove("hashtag-mode");
    }
});

tagInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        let value = this.value.trim();

        if (value) {
            // #으로 시작하지 않으면 자동으로 추가
            if (!value.startsWith("#")) {
                value = "#" + value;
            }

            const tag = document.createElement("span");
            tag.className = "tag";
            tag.innerHTML = `${value} <i class="fas fa-times" onclick="this.parentElement.remove(); markAsDirty();"></i>`;
            this.parentElement.insertBefore(tag, this);
            this.value = "";
            this.classList.remove("hashtag-mode");
            markAsDirty();
        }
    }
});

// 툴바 버튼 기능 구현
const contentEditor = document.querySelector(".content-editor");

// 버튼 클릭 시 선택 영역 유지를 위해 mousedown에서 preventDefault
document.querySelectorAll(".toolbar-btn").forEach((btn) => {
    btn.addEventListener("mousedown", function (e) {
        e.preventDefault(); // 선택 영역 유지
    });

    btn.addEventListener("click", function (e) {
        e.preventDefault();
        const command = this.dataset.command;
        const value = this.dataset.value || null;

        // 특수 명령어 처리
        if (command === "createLink") {
            const url = prompt("링크 URL을 입력하세요:", "https://");
            if (url) {
                document.execCommand(command, false, url);
            }
        } else if (command === "insertImage") {
            const url = prompt("이미지 URL을 입력하세요:", "https://");
            if (url) {
                document.execCommand(command, false, url);
            }
        } else if (command === "formatBlock") {
            document.execCommand(command, false, `<${value}>`);
        } else {
            document.execCommand(command, false, value);
        }

        // 버튼 활성 상태 업데이트
        updateToolbarState();
        markAsDirty();
    });
});

// 툴바 버튼 활성 상태 업데이트
function updateToolbarState() {
    document.querySelectorAll(".toolbar-btn").forEach((btn) => {
        const command = btn.dataset.command;

        if (
            command === "bold" ||
            command === "italic" ||
            command === "underline" ||
            command === "strikeThrough"
        ) {
            if (document.queryCommandState(command)) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        } else if (
            command === "insertUnorderedList" ||
            command === "insertOrderedList"
        ) {
            if (document.queryCommandState(command)) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        }
    });
}

// 에디터에서 선택 변경 시 툴바 상태 업데이트
contentEditor.addEventListener("keyup", updateToolbarState);
contentEditor.addEventListener("mouseup", updateToolbarState);

// 키보드 단축키 지원
contentEditor.addEventListener("keydown", function (e) {
    if (e.ctrlKey || e.metaKey) {
        switch (e.key.toLowerCase()) {
            case "b":
                e.preventDefault();
                document.execCommand("bold", false, null);
                updateToolbarState();
                break;
            case "i":
                e.preventDefault();
                document.execCommand("italic", false, null);
                updateToolbarState();
                break;
            case "u":
                e.preventDefault();
                document.execCommand("underline", false, null);
                updateToolbarState();
                break;
        }
    }
});

// 발행일 기본값 (오늘)
document.querySelector('input[type="date"]').valueAsDate = new Date();

// 임시 저장
document.getElementById("saveDraftBtn").addEventListener("click", function () {
    // 실제 저장 로직은 여기에 구현
    isFormDirty = false;
    updateSaveStatus(true);

    // 저장 완료 피드백
    this.innerHTML = '<i class="fas fa-check"></i> 저장됨';
    setTimeout(() => {
        this.innerHTML = '<i class="fas fa-save"></i> 임시 저장';
    }, 2000);
});

// 유효성 검사
function validateForm() {
    let isValid = true;
    const titleInput = document.getElementById("titleInput");
    const authorInput = document.getElementById("authorInput");
    const contentEditor = document.querySelector(".content-editor");

    // 에러 초기화
    titleInput.classList.remove("error");
    authorInput.classList.remove("error");
    contentEditor.classList.remove("error");
    document.querySelectorAll(".error-message").forEach((el) => el.remove());

    // 제목 검사
    if (!titleInput.value.trim()) {
        titleInput.classList.add("error");
        const errorMsg = document.createElement("p");
        errorMsg.className = "error-message";
        errorMsg.textContent = "제목을 입력해주세요";
        titleInput.parentElement.appendChild(errorMsg);
        isValid = false;
    }

    // 본문 검사
    const contentText = contentEditor.innerText.trim();
    if (!contentText) {
        contentEditor.classList.add("error");
        const errorMsg = document.createElement("p");
        errorMsg.className = "error-message";
        errorMsg.textContent = "내용을 입력해주세요";
        contentEditor.parentElement.appendChild(errorMsg);
        isValid = false;
    }

    // 작성자 검사
    if (!authorInput.value.trim()) {
        authorInput.classList.add("error");
        const errorMsg = document.createElement("p");
        errorMsg.className = "error-message";
        errorMsg.textContent = "작성자 이름을 입력해주세요";
        authorInput.parentElement.appendChild(errorMsg);
        isValid = false;
    }

    return isValid;
}

// 발행하기
document.getElementById("publishBtn").addEventListener("click", function () {
    if (!validateForm()) {
        // 첫 번째 에러 필드로 스크롤
        const firstError = document.querySelector(".error");
        if (firstError) {
            firstError.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
            firstError.focus();
        }
        return;
    }

    // 발행 데이터 수집
    const postData = {
        title: document.getElementById("titleInput").value,
        content: document.querySelector(".content-editor").innerHTML,
        author: document.getElementById("authorInput").value,
        publishDate: document.querySelector('.meta-field input[type="date"]')
            .value,
        visibility: document.querySelector(".meta-field select").value,
        categories: Array.from(document.querySelectorAll(".category-tag")).map(
            (el) => el.textContent.replace("×", "").trim()
        ),
        tags: Array.from(
            document.querySelectorAll(".tags-input-container .tag")
        ).map((el) => el.textContent.replace("×", "").trim()),
        thumbnail:
            document.querySelector(".thumbnail-preview img")?.src || null,
        createdAt: new Date().toISOString(),
    };

    // localStorage에 저장
    localStorage.setItem("publishedPost", JSON.stringify(postData));

    // 발행 완료 - 상세 페이지로 이동
    isFormDirty = false;
    window.location.href = "post-view.html?published=true";
});

// 미리보기 모달 열기
function openPreview() {
    const previewContent = document.getElementById("previewContent");

    // 카테고리 가져오기
    const categories = Array.from(
        document.querySelectorAll(".category-tag")
    ).map((el) => {
        return el.textContent.replace("×", "").trim();
    });

    // 제목 가져오기
    const title = document.querySelector(".title-input").value || "제목 없음";

    // 썸네일 가져오기
    const thumbnailImg = document.querySelector(".thumbnail-preview img");
    let thumbnailHtml = "";
    if (thumbnailImg) {
        thumbnailHtml = `<div class="preview-thumbnail"><img src="${thumbnailImg.src}" alt="썸네일"></div>`;
    }
    // 썸네일 없으면 그냥 빈 문자열 (안 보임)

    // 본문 가져오기
    const bodyContent =
        document.querySelector(".content-editor").innerHTML ||
        '<p class="preview-empty">내용이 없습니다.</p>';

    // 태그 가져오기
    const tags = Array.from(
        document.querySelectorAll(".tags-input-container .tag")
    ).map((el) => {
        return el.textContent.replace("×", "").trim();
    });

    // 메타 정보 가져오기
    const author =
        document.getElementById("authorInput").value || "작성자 미지정";
    const publishDate = document.querySelector(
        '.meta-field input[type="date"]'
    ).value;
    const formattedDate = publishDate
        ? new Date(publishDate).toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
          })
        : "발행일 미지정";

    // 카테고리 HTML
    const categoryHtml =
        categories.length > 0
            ? categories
                  .map((c) => `<span class="preview-category">${c}</span>`)
                  .join("")
            : '<span class="preview-empty">카테고리 없음</span>';

    // 태그 HTML
    const tagsHtml =
        tags.length > 0
            ? tags.map((t) => `<span class="preview-tag">${t}</span>`).join("")
            : '<span class="preview-empty">태그 없음</span>';

    // 미리보기 콘텐츠 생성
    previewContent.innerHTML = `
                <div class="preview-meta">
                    ${categoryHtml}
                    <span class="preview-date">${formattedDate}</span>
                    <span class="preview-author">${author}</span>
                </div>
                <h1 class="preview-title">${title}</h1>
                ${thumbnailHtml}
                <div class="preview-body-content">
                    ${bodyContent}
                </div>
                <div class="preview-tags">
                    ${tagsHtml}
                </div>
            `;

    // 모달 열기
    document.getElementById("previewModal").classList.add("active");
    document.body.style.overflow = "hidden";
}

// 미리보기 모달 닫기
function closePreview() {
    document.getElementById("previewModal").classList.remove("active");
    document.body.style.overflow = "";
}

// 미리보기 모달 외부 클릭 시 닫기
document.getElementById("previewModal").addEventListener("click", function (e) {
    if (e.target === this) {
        closePreview();
    }
});

// ESC 키로 미리보기 닫기
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        if (
            document.getElementById("previewModal").classList.contains("active")
        ) {
            closePreview();
        }
    }
});
