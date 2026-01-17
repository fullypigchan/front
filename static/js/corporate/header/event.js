// 요소 선택
// sub-menu-modal
const subMenuButton = document.querySelector(".button-all-menu");
const subMenu = document.querySelector(".all-menu-modal");

// sub-nav
const subNavLis = document.querySelectorAll(".left-menu-list li");

// corporate-name
const rightMenu = document.querySelector(".right-menu");

// notification-menu
const notification = document.querySelector(".notification-menu");
const noNotification = document.querySelector(".no-notification");
const notificationList = document.querySelector(".notification-list");
const bell = document.querySelector(".bell");
const notifications = [1, 2, 3, 4];

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

// notification-menu
bell.addEventListener("click", (e) => {
    notification.classList.toggle("active");

    if (notifications.length === 0) {
        notificationList.classList.remove("active");
        noNotification.classList.add("active");
    } else {
        noNotification.classList.remove("active");
        notificationList.classList.add("active");
    }
});

notificationList.addEventListener("click", (e) => {
    const notificationModal = document.querySelector(".notification-modal");
    notificationModal.classList.add("active");
});
