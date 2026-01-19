// 알림 버튼 효과
const notificationItems = document.querySelectorAll(".notification-item");

// 알림 선택
const notificationButtons = document.querySelectorAll(
    ".notification-item .notification-footer .buttons",
);

// 알림창 닫기 버튼
const notificationModal = document.querySelector(".notification-modal");
const notificationCloseButton = document.querySelector(
    ".notification-modal .close-button",
);

// // 알림창 다음/이전 버튼
const notificationSwiperWrapper = document.querySelector(
    ".notification-modal .swiper-wrapper",
);
const notificationNextButton = document.querySelector(
    ".notification-modal .swiper-button-next",
);
const notificationPrevButton = document.querySelector(
    ".notification-modal .swiper-button-prev",
);

let notificationCount = 0;
notificationSwiperWrapper.style.width = `${notificationButtons.length * 430}px`;

// // 이벤트
// 알림 버튼 효과
notificationItems.forEach((item) => {
    item.lastElementChild;

    item.addEventListener("mouseenter", (e) => {
        item.classList.add("active");
    });

    item.addEventListener("mouseleave", (e) => {
        item.classList.remove("active");
    });
});

// 알림 선택
notificationButtons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
        notificationPrevButton.classList.remove("swiper-button-disabled");
        notificationNextButton.classList.remove("swiper-button-disabled");

        notificationModal.classList.add("active");
        notificationCount = index;

        notificationSwiperWrapper.style.transform = `translate(-${notificationCount * 430}px)`;
        if (notificationCount === 0) {
            notificationPrevButton.classList.add("swiper-button-disabled");
        } else if (notificationCount === notificationButtons.length - 1) {
            notificationNextButton.classList.add("swiper-button-disabled");
        } else {
            notificationPrevButton.classList.remove("swiper-button-disabled");
            notificationNextButton.classList.remove("swiper-button-disabled");
        }
    });
});

// 닫기 버튼
notificationCloseButton.addEventListener("click", (e) => {
    notificationModal.classList.remove("active");
});

// // 이전/다음 버튼
notificationPrevButton.addEventListener("click", (e) => {
    notificationPrevButton.classList.remove("swiper-button-disabled");
    notificationNextButton.classList.remove("swiper-button-disabled");

    notificationCount--;
    notificationSwiperWrapper.style.transform = `translate(-${430 * notificationCount}px)`;

    if (notificationCount === 0) {
        notificationPrevButton.classList.add("swiper-button-disabled");
    }
});

notificationNextButton.addEventListener("click", (e) => {
    notificationPrevButton.classList.remove("swiper-button-disabled");
    notificationNextButton.classList.remove("swiper-button-disabled");

    notificationCount++;
    notificationSwiperWrapper.style.transform = `translate(-${430 * notificationCount}px)`;

    if (notificationCount === notificationButtons.length - 1) {
        notificationNextButton.classList.add("swiper-button-disabled");
    }
});
