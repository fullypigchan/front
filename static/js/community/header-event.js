// 헤더 네비게이션에 마우스 올렸을 때 색 변경
const serviceNav = document.querySelectorAll(".dev-serviceNav a span");

serviceNav.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        link.style.color = "hsl(154.36deg 100% 21.57%)";
    });

    link.addEventListener("mouseleave", () => {
        link.style.color = "#222222";
    });
});

// 기업 서비스에 마우스 올렸을 때 class open 추가 삭제
const userCorp = document.querySelector(".userNav .corp");
userCorp.addEventListener("mouseenter", (e) => {
    userCorp.classList.add("open");
});
userCorp.addEventListener("mouseleave", (e) => {
    userCorp.classList.remove("open");
});

// 기업 서비스 안에 기업 로그인에 마우스 올렸을 때 색 변경
const userCorpLogin = document.querySelector(".btnRowWrap a");
userCorpLogin.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "#F8F8F8";
});
userCorpLogin.addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = "#fff";
});

// 헤더 네비게이션 마우스 올렸을 때 open-active 클래스 추가 삭제
const headNav = document.getElementById("headNavBar");
const navMenu = document.querySelector(".lyNavArea");
const serviceNavDrop = document.querySelector(".dev-serviceNav"); // ul 선택
const backgroundColorChange = document.querySelector(".jkNavDimm");

serviceNavDrop.addEventListener("mouseenter", (e) => {
    headNav.classList.add("open-active");
    backgroundColorChange.classList.add("on");
});

navMenu.addEventListener("mouseleave", () => {
    headNav.classList.remove("open-active");
    backgroundColorChange.classList.remove("on");
});
