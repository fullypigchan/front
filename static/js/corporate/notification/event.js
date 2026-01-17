// 알림창 다음/이전 버튼
DOMTokenList.prototype.includes = Array.prototype.includes;

const swiperWrapper = document.querySelector(".swiper-wrapper");
const nextButton = document.querySelector(".swiper-button-next");
const prevButton = document.querySelector(".swiper-button-prev");
const swipterButtons = [nextButton, prevButton];
let count = 0;

swiperWrapper.style.transform = `translate(0px)`;
swiperWrapper.style.width = `${notifications.length * 430}px`;
swipterButtons[1].classList.add("swiper-button-disabled");
// prevButton.classList.add("swiper-button-disabled");

// 알림창 닫기 버튼
const notificationModal = document.querySelector(".notification-modal");
const closeButton = document.querySelector(".close-button");

// 이전/다음 버튼
swipterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        prevButton.classList.remove("swiper-button-disabled");
        nextButton.classList.remove("swiper-button-disabled");

        if (button.classList.includes("swiper-button-next")) {
            count++;
            swiperWrapper.style.transform = `translate(-${430 * count}px)`;

            if (count === notifications.length - 1) {
                nextButton.classList.add("swiper-button-disabled");
            }
        } else {
            count--;
            swiperWrapper.style.transform = `translate(-${430 * count}px)`;

            if (count === 0) {
                prevButton.classList.add("swiper-button-disabled");
            }
        }
    });
});

// 닫기 버튼
closeButton.addEventListener("click", (e) => {
    notificationModal.classList.remove("active");
});
