// 요소 선택
// sub-menu-modal
const subMenuButton = document.querySelector(".button-all-menu");
const subMenu = document.querySelector(".all-menu-modal");

// sub-nav
const subNavLis = document.querySelectorAll(".left-menu-list li");

// notification-menu
const bell = document.querySelector(".bell");
const notificationMenu = document.querySelector(".notification-menu");
const noNotification = document.querySelector(".no-notification");
const notificationContainer = document.querySelector(
    ".list-notification-container",
);

const notificationCheck = false;

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

// notification-menu
bell.addEventListener("click", (e) => {
    notificationMenu.classList.toggle("active");

    if (notificationCheck) {
        notificationContainer.classList.remove("active");
        noNotification.classList.add("active");
    } else {
        noNotification.classList.remove("active");
        notificationContainer.classList.add("active");
    }
});
