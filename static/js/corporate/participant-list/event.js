NodeList.prototype.filter = Array.prototype.filter;

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
// 기간별 조회
const sortButton = document.querySelector(".sort-button");
const sortDropDown = sortButton.nextElementSibling;

sortButton.addEventListener("click", (e) => {
    sortDropDown.classList.toggle("active");
});

sortDropDown.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        e.target.classList.add("active");
        sortButton.textContent = e.target.textContent;
        sortDropDown.classList.remove("active");
    }
});

// ==================================================================================================
// ===================================
// 1. DOM 요소 선택
// ===================================

// 필터 모달 관련
const filterButton = document.querySelector(".filter-button");
const filterModal = document.querySelector(".filter-modal");
const filterBoxList = document.querySelectorAll(".filter-box");
const filterModalBar = document.querySelector(".selItems");
const filterResetButton = document.querySelector(".devResetBtn");
const filterSearchButton = document.querySelector(
    ".filter-modal .devSearchBtn",
);

// 검색창 관련
const searchButton = document.querySelector(".search-box .devSearchBtn");
const searchInput = document.getElementById("rKeyword");
const searchResultBox = document.getElementById("devSearchFilterView");
const searchResultItems = document.querySelector(".devSearchFilterItems");
const searchResetButton = document.querySelector(".devSearchFilterResetBtn");

// ===================================
// 2. 상태 관리
// ===================================

// 필터 모달에서 선택된 항목들
let tempSelectedFilters = {};

// 검색창에서 입력된 검색어
let tempSearchKeyword = "";

// 실제 적용된 필터들
let appliedFilters = {};

// 연속 선택이 필요한 카테고리 설정
// filterGroup 앞자리(카테고리 번호)와 카테고리 이름 매핑
const sequentialCategories = {
    1: "학력",
    2: "경력",
    3: "나이",
    5: "희망연봉",
};

// ===================================
// 3. 유틸리티 함수
// ===================================

// filterGroup으로 필터 버튼 찾기
function findFilterButton(filterGroup) {
    for (let i = 0; i < filterBoxList.length; i++) {
        const box = filterBoxList[i];
        const btn = box.querySelector(
            `button[data-filter-group="${filterGroup}"], 
             input[data-filter-group="${filterGroup}"]`,
        );
        if (btn) return btn;
    }
    return null;
}

// 필터 버튼에 active 클래스 추가
function activateFilterButton(filterGroup) {
    const btn = findFilterButton(filterGroup);
    if (btn) {
        btn.classList.add("active");
        if (btn.tagName === "INPUT" && btn.type === "checkbox") {
            btn.checked = true;
        }
    }
}

// 필터 버튼에서 active 클래스 제거
function deactivateFilterButton(filterGroup) {
    const btn = findFilterButton(filterGroup);
    if (btn) {
        btn.classList.remove("active");
        if (btn.tagName === "INPUT" && btn.type === "checkbox") {
            btn.checked = false;
        }
    }
}

// filterGroup에서 카테고리 번호 추출 (예: "1_2" -> "1")
function getCategoryFromFilterGroup(filterGroup) {
    return filterGroup.split("_")[0];
}

// filterGroup에서 순서 번호 추출 (예: "1_2" -> 2)
function getOrderFromFilterGroup(filterGroup) {
    return parseInt(filterGroup.split("_")[1]);
}

// 특정 카테고리에서 현재 선택된 필터들의 순서 번호 배열 반환
function getSelectedOrdersInCategory(category) {
    var orders = [];
    Object.keys(tempSelectedFilters).forEach(function (filterGroup) {
        if (getCategoryFromFilterGroup(filterGroup) === category) {
            orders.push(getOrderFromFilterGroup(filterGroup));
        }
    });
    return orders.sort(function (a, b) {
        return a - b;
    });
}

// 연속된 숫자인지 확인
function isConsecutive(orders) {
    if (orders.length <= 1) return true;

    for (var i = 1; i < orders.length; i++) {
        if (orders[i] - orders[i - 1] !== 1) {
            return false;
        }
    }
    return true;
}

// 새 항목 추가 시 연속성 검사
function canAddToCategory(category, newOrder) {
    var currentOrders = getSelectedOrdersInCategory(category);

    // 아직 선택된 게 없으면 OK
    if (currentOrders.length === 0) return true;

    // 새 순서를 추가했을 때 연속인지 확인
    var newOrders = currentOrders.concat([newOrder]).sort(function (a, b) {
        return a - b;
    });
    return isConsecutive(newOrders);
}

// 항목 제거 시 연속성 검사
function canRemoveFromCategory(category, removeOrder) {
    var currentOrders = getSelectedOrdersInCategory(category);

    // 1개 이하면 제거해도 OK
    if (currentOrders.length <= 1) return true;

    // 제거 후 남은 순서들이 연속인지 확인
    var remainingOrders = currentOrders.filter(function (order) {
        return order !== removeOrder;
    });
    return isConsecutive(remainingOrders);
}

// ===================================
// 4. 필터 모달 내부 바 관련 함수
// ===================================

// 필터 모달 바에 항목 추가
function addToModalBar(filterGroup, filterText, isKeyword) {
    const existing = filterModalBar
        .querySelector(`button[data-filter-group="${filterGroup}"]`)
        ?.closest("span");
    if (existing) existing.remove();

    const item = document.createElement("span");
    item.classList.add("item");

    if (isKeyword) {
        item.classList.add("keyword-item");
        tempSearchKeyword = filterText;
    } else {
        tempSelectedFilters[filterGroup] = filterText;
    }

    item.innerHTML = `
        ${filterText}
        <button type="button" class="btnSelDel mtcBtnB devFilterItemDelBtn" 
            data-filter-group="${filterGroup}"></button>
    `;

    filterModalBar.appendChild(item);
}

// 필터 모달 바에서 항목 제거
function removeFromModalBar(filterGroup, isKeyword) {
    const itemToRemove = filterModalBar
        .querySelector(`button[data-filter-group="${filterGroup}"]`)
        ?.closest("span");
    if (itemToRemove) itemToRemove.remove();

    if (isKeyword) {
        tempSearchKeyword = "";
    } else {
        deactivateFilterButton(filterGroup);
        delete tempSelectedFilters[filterGroup];
    }
}

// 필터 모달 바 전체 초기화 (검색어 제외)
function clearModalBar() {
    var filterGroups = Object.keys(tempSelectedFilters);
    filterGroups.forEach(function (filterGroup) {
        removeFromModalBar(filterGroup, false);
    });
}

// 필터 모달 바 렌더링 (모달 열 때 호출)
function renderModalBar() {
    filterModalBar.innerHTML = "";

    // 먼저 모든 필터 버튼 active 해제
    filterBoxList.forEach(function (filterBox) {
        var buttons = filterBox.querySelectorAll(
            "button.devFilterItem, input.devFilterItem",
        );
        buttons.forEach(function (btn) {
            btn.classList.remove("active");
            if (btn.tagName === "INPUT" && btn.type === "checkbox") {
                btn.checked = false;
            }
        });
    });

    // 검색어가 있으면 먼저 표시
    if (tempSearchKeyword) {
        const keywordItem = document.createElement("span");
        keywordItem.classList.add("item", "keyword-item");
        keywordItem.innerHTML = `
            ${tempSearchKeyword}
            <button type="button" class="btnSelDel mtcBtnB devFilterItemDelBtn" 
                data-filter-group="srchKeyword"></button>
        `;
        filterModalBar.appendChild(keywordItem);
    }

    // 선택된 필터들 표시 + active 상태 복원
    Object.keys(tempSelectedFilters).forEach(function (filterGroup) {
        const filterText = tempSelectedFilters[filterGroup];

        const item = document.createElement("span");
        item.classList.add("item");
        item.innerHTML = `
            ${filterText}
            <button type="button" class="btnSelDel mtcBtnB devFilterItemDelBtn" 
                data-filter-group="${filterGroup}"></button>
        `;
        filterModalBar.appendChild(item);

        activateFilterButton(filterGroup);
    });
}

// ===================================
// 5. 검색 결과 바 관련 함수
// ===================================

// 검색 결과 바에 항목 추가
function addToSearchBar(filterGroup, text) {
    const existing = searchResultItems
        .querySelector(`button[data-filter-group="${filterGroup}"]`)
        ?.closest(".keyword");
    if (existing) existing.remove();

    const item = document.createElement("div");
    item.classList.add("keyword");
    item.innerHTML = `
        <div class="text">${text}</div>
        <button class="button-delete devSearchFilterDelBtn" data-filter-group="${filterGroup}"></button>
    `;
    searchResultItems.appendChild(item);
    appliedFilters[filterGroup] = text;
}

// 검색 결과 바에서 항목 제거
function removeFromSearchBar(filterGroup) {
    const itemToRemove = searchResultItems
        .querySelector(`button[data-filter-group="${filterGroup}"]`)
        ?.closest(".keyword");
    if (itemToRemove) itemToRemove.remove();

    if (filterGroup === "srchKeyword") {
        tempSearchKeyword = "";
        searchInput.value = "";
        removeFromModalBar("srchKeyword", true);
    } else {
        deactivateFilterButton(filterGroup);
        delete tempSelectedFilters[filterGroup];

        const modalItem = filterModalBar
            .querySelector(`button[data-filter-group="${filterGroup}"]`)
            ?.closest("span");
        if (modalItem) modalItem.remove();
    }

    delete appliedFilters[filterGroup];
    updateSearchBarVisibility();
}

// 검색 결과 바 전체 초기화
function clearSearchBar() {
    var filterGroups = Object.keys(appliedFilters);
    filterGroups.forEach(function (filterGroup) {
        removeFromSearchBar(filterGroup);
    });
    searchInput.value = "";
}

// 검색 결과 바 표시/숨김
function updateSearchBarVisibility() {
    const hasItems = Object.keys(appliedFilters).length > 0;
    searchResultBox.style.display = hasItems ? "" : "none";
}

// ===================================
// 6. 이벤트 핸들러
// ===================================

// 필터 모달 열기
filterButton.addEventListener("click", function () {
    filterModal.classList.add("active");
    renderModalBar();
});

// 필터 항목 클릭 (버튼/체크박스)
filterBoxList.forEach(function (filterBox) {
    filterBox.addEventListener("click", function (e) {
        const target = e.target;
        if (target.tagName === "BUTTON" || target.tagName === "INPUT") {
            const filterGroup = target.dataset.filterGroup;
            const filterText = target.dataset.filterText;
            const category = getCategoryFromFilterGroup(filterGroup);
            const order = getOrderFromFilterGroup(filterGroup);

            // 현재 active 상태 확인
            var isCurrentlyActive;
            if (target.tagName === "INPUT" && target.type === "checkbox") {
                // 체크박스는 클릭 시점에 이미 checked가 토글됨
                // 그래서 checked가 true면 "추가하려는 것"
                isCurrentlyActive = !target.checked;
            } else {
                isCurrentlyActive = target.classList.contains("active");
            }

            // 연속 선택이 필요한 카테고리인지 확인
            var isSequentialCategory =
                sequentialCategories.hasOwnProperty(category);

            if (isCurrentlyActive) {
                // 제거하려는 경우
                if (
                    isSequentialCategory &&
                    !canRemoveFromCategory(category, order)
                ) {
                    alert(
                        "연속된 " +
                            sequentialCategories[category] +
                            "을 선택해 주세요",
                    );
                    // 체크박스는 원래 상태로 되돌림
                    if (
                        target.tagName === "INPUT" &&
                        target.type === "checkbox"
                    ) {
                        target.checked = true;
                    }
                    return;
                }

                target.classList.remove("active");
                if (target.tagName === "INPUT" && target.type === "checkbox") {
                    target.checked = false;
                }
                removeFromModalBar(filterGroup, false);
            } else {
                // 추가하려는 경우
                if (
                    isSequentialCategory &&
                    !canAddToCategory(category, order)
                ) {
                    alert(
                        "연속된 " +
                            sequentialCategories[category] +
                            "을 선택해 주세요",
                    );
                    // 체크박스는 원래 상태로 되돌림
                    if (
                        target.tagName === "INPUT" &&
                        target.type === "checkbox"
                    ) {
                        target.checked = false;
                    }
                    return;
                }

                target.classList.add("active");
                if (target.tagName === "INPUT" && target.type === "checkbox") {
                    target.checked = true;
                }
                addToModalBar(filterGroup, filterText, false);
            }
        }
    });
});

// 필터 모달 바에서 X 버튼 클릭
filterModalBar.addEventListener("click", function (e) {
    if (e.target.classList.contains("devFilterItemDelBtn")) {
        const filterGroup = e.target.dataset.filterGroup;

        // 검색어(srchKeyword)면 무시
        if (filterGroup === "srchKeyword") {
            return;
        }

        const category = getCategoryFromFilterGroup(filterGroup);
        const order = getOrderFromFilterGroup(filterGroup);
        var isSequentialCategory =
            sequentialCategories.hasOwnProperty(category);

        // 연속 선택 카테고리면 제거 가능한지 확인
        if (isSequentialCategory && !canRemoveFromCategory(category, order)) {
            alert(
                "연속된 " + sequentialCategories[category] + "을 선택해 주세요",
            );
            return;
        }

        removeFromModalBar(filterGroup, false);
    }
});

// 필터 모달 초기화 버튼 (검색어는 유지)
filterResetButton.addEventListener("click", function () {
    clearModalBar();
    renderModalBar();
});

// 필터 모달 "검색하기" 버튼
filterSearchButton.addEventListener("click", function () {
    Object.keys(appliedFilters).forEach(function (key) {
        if (key !== "srchKeyword") {
            const itemToRemove = searchResultItems
                .querySelector(`button[data-filter-group="${key}"]`)
                ?.closest(".keyword");
            if (itemToRemove) itemToRemove.remove();
            delete appliedFilters[key];
        }
    });

    if (tempSearchKeyword) {
        addToSearchBar("srchKeyword", tempSearchKeyword);
    }

    Object.keys(tempSelectedFilters).forEach(function (filterGroup) {
        const filterText = tempSelectedFilters[filterGroup];
        addToSearchBar(filterGroup, filterText);
    });

    updateSearchBarVisibility();
    filterModal.classList.remove("active");
});

// 검색창 검색 버튼
searchButton.addEventListener("click", function () {
    const keyword = searchInput.value.trim();

    if (keyword) {
        tempSearchKeyword = keyword;
        addToSearchBar("srchKeyword", keyword);
    }

    Object.keys(tempSelectedFilters).forEach(function (filterGroup) {
        const filterText = tempSelectedFilters[filterGroup];
        addToSearchBar(filterGroup, filterText);
    });

    updateSearchBarVisibility();
});

// 검색 결과 바에서 X 버튼 클릭
searchResultItems.addEventListener("click", function (e) {
    if (e.target.classList.contains("devSearchFilterDelBtn")) {
        const filterGroup = e.target.dataset.filterGroup;

        // 검색어가 아니고 연속 선택 카테고리면 검사
        if (filterGroup !== "srchKeyword") {
            const category = getCategoryFromFilterGroup(filterGroup);
            const order = getOrderFromFilterGroup(filterGroup);
            var isSequentialCategory =
                sequentialCategories.hasOwnProperty(category);

            if (
                isSequentialCategory &&
                !canRemoveFromCategory(category, order)
            ) {
                alert(
                    "연속된 " +
                        sequentialCategories[category] +
                        "을 선택해 주세요",
                );
                return;
            }
        }

        removeFromSearchBar(filterGroup);
    }
});

// 검색 결과 바 초기화 버튼
searchResetButton.addEventListener("click", function () {
    clearSearchBar();
    clearModalBar();
    tempSearchKeyword = "";
});

// 모달 외부 클릭 시 닫기
document.addEventListener("click", function (e) {
    if (
        !e.target.classList.contains("filter-button") &&
        !e.target.closest(".filter-modal") &&
        !e.target.closest(".btnSelDel")
    ) {
        filterModal.classList.remove("active");
    }
});

// 승급/탈락
const rejectButton = document.querySelector(".advancement.reject");
const approveButton = document.querySelector(".advancement");

rejectButton.addEventListener("click", (e) => {
    if (confirm("탈락 처리 하시겠습니까?")) {
        e.target.closest("td").innerHTML =
            `<span class="advancement reject">승급 탈락</span>`;
    }
});
approveButton.addEventListener("click", (e) => {
    if (confirm("승급 처리 하시겠습니까?")) {
        e.target.closest("td").innerHTML =
            `<span class="advancement approve">승급 완료</span>`;
    }
});
