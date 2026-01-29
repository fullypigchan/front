NodeList.prototype.filter = Array.prototype.filter;

// header
// server: 메뉴/필터 클릭 시, 페이지 -> 서버 -> (동일한)페이지로 이동
// server에서 쿼리스트링으로 어느 버튼을 클릭했는지 전달
// 화면에서 해당 값을 보고 확인
const tabItems = document.querySelector(".tabItems");
tabItems.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.tagName === "A") {
        const [previousItem] = tabItems
            .querySelectorAll("li")
            .filter((li) => li.classList.contains("on"));
        previousItem.classList.remove("on");
        e.target.closest("li").classList.add("on");
    }

    // 예)
    // url/쿼리스트링 &&
    // (target = tabItems.tabItems.querySelectorAll("li").filter((li) => li.textContent === url/쿼리스트링))
    // target.classList.add("on")
});

// 최근 등록일순
const sortButtons = document.querySelectorAll(".sort-button");

sortButtons.forEach((button) => {
    const sortDropDown = button.nextElementSibling;

    button.addEventListener("click", (e) => {
        sortDropDown.classList.toggle("active");
    });

    sortDropDown.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            if (button.classList.contains("sort1")) {
                const [previousItem] = sortDropDown
                    .querySelectorAll("button")
                    .filter((button) => button.classList.contains("active"));
                previousItem.classList.remove("active");
            }
            // server: 등록일/개수/담당자에 따라 프로그램 list 뿌리기
            // server: 담당자는 동적으로 생성해야함

            e.target.classList.add("active");

            if (button.classList.contains("sort1")) {
                button.textContent = e.target.textContent + "순";
            } else if (button.classList.contains("sort2")) {
                button.textContent = e.target.textContent + "씩 보기";
            } else {
                button.textContent = e.target.textContent;
            }

            sortDropDown.classList.remove("active");
        }
    });
});

// 더보기
const programList = document.querySelectorAll(
    ".scSelectAppList .scSelectAppItem",
);
programList.forEach((li) => {
    const moreOptionLayer = li.querySelector(".more-option");

    li.addEventListener("click", (e) => {
        if (e.target.closest(".moreOptionButton")) {
            moreOptionLayer.classList.toggle("active");
        }
    });
});

document.addEventListener("click", (e) => {
    programList.forEach((li) => {
        const moreOptionButton = li.querySelector(".moreOptionButton");
        const moreOptionLayer = li.querySelector(".more-option");

        if (e.target.closest("li .moreOptionButton") !== moreOptionButton) {
            moreOptionLayer.classList.remove("active");
        }
    });
    sortButtons.forEach((button) => {
        if (e.target !== button) {
            button.nextElementSibling.classList.remove("active");
        }
    });
});

// 맨위로
const toTheTop = document.getElementById("btnMtcTop");

toTheTop.addEventListener("click", (e) => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
