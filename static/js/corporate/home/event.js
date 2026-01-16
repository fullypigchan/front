// 요소 선택
// sub-menu-modal
const subMenuButton = document.querySelector(".button-all-menu");
const subMenu = document.querySelector(".all-menu-modal");

// sub-nav
const subNavLis = document.querySelectorAll(".left-menu-list li");

// corporate-name
const rightMenu = document.querySelector(".right-menu");

// notification-modal
const notification = document.querySelector(".notification-modal");
const bell = document.querySelector(".bell");
let hasNotification = true;

// 이벤트 추가
// sub-menu-modal
subMenuButton.addEventListener("click", (e) => {
    subMenuButton.classList.toggle("active");
    subMenu.classList.toggle("active");
});

// sub-nav
subNavLis.forEach((li) => {
    li.addEventListener("mouseenter", (e) => {
        e.target.classList.add("active");
    });
    li.addEventListener("mouseleave", (e) => {
        e.target.classList.remove("active");
    });
});

// corporate-name
// document.addEventListener("DOMContentLoaded", (e) => {
//     // 로그인 검사할 방법 모름
//     if (true) {
//         rightMenu.classList.add("active");
//     }
// });

// notification-modal
bell.addEventListener("click", (e) => {
    const noNotification = document.querySelector(".no-notification");
    const notificationList = document.querySelector(".notification-list");

    notification.classList.toggle("active");

    (hasNotification ? notificationList : noNotification).classList.toggle(
        "active"
    );
});
