// 키워드 검색
const keywordBox = document.querySelector("div[type=div]");
const keyword = document.querySelector("span[type=button]");
const input = document.getElementById("schTxt");
const pageButtons = document.querySelectorAll(".page-btn");
const keywordSearch = document.keywordBox.addEventListener("click", (e) => {
    keyword.style.display = "none";
    input.focus();
});

input.addEventListener("blur", (e) => {
    keyword.style.display = "block";
});

// 키워드 클릭 이벤트
keywordSearch.addEventListener("click", (e) => {
    keywordSearch.style.backgroundColor = "black";
});
