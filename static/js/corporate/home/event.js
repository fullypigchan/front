// 변수 선언
// 다음/이전 버튼
const serviceSwiperWrapper = document.querySelector(
    ".service-modal .swiper-wrapper",
);
const serviceNextButton = document.querySelector(
    ".service-modal .swiper-button-next",
);
const servicePrevButton = document.querySelector(
    ".service-modal .swiper-button-prev",
);
const serviceSwiperButtons = [serviceNextButton, servicePrevButton];
let serviceCount = 0;

serviceSwiperWrapper.style.width = `${8 * 730}px`;

// 닫기 버튼
const serviceModal = document.querySelector(".service-modal");
const serviceCloseButton = document.querySelector(
    ".service-modal .close-button",
);

// 서비스 선택
const serviceButtonList = document.querySelectorAll(".service-list li button");

// 공지사항
const noticeBanner = document.querySelector(".notice-box .swiper-wrapper");
let noticeCount = 0;

noticeBanner.style.height = "260px";

setInterval(() => {
    noticeCount++;
    noticeBanner.style.transform = `translate(0, -${52 * noticeCount}px)`;
    noticeBanner.style.transition = `transform 0.3s`;

    if (noticeCount === 4) {
        setTimeout(() => {
            noticeBanner.style.transform = `translate(0px)`;
            noticeBanner.style.transition = `transform 0s`;
        }, 300);
        noticeCount = 0;
    }
}, 3500);

// 이벤트
// 이전/다음 버튼
serviceSwiperButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        servicePrevButton.classList.remove("swiper-button-disabled");
        serviceNextButton.classList.remove("swiper-button-disabled");

        if (button.classList.contains("swiper-button-next")) {
            serviceCount++;
            serviceSwiperWrapper.style.transform = `translate(-${730 * serviceCount}px)`;

            console.log(serviceCount);

            if (serviceCount === 7) {
                serviceNextButton.classList.add("swiper-button-disabled");
            }
        } else {
            serviceCount--;
            serviceSwiperWrapper.style.transform = `translate(-${730 * serviceCount}px)`;

            console.log(serviceCount);

            if (serviceCount === 0) {
                servicePrevButton.classList.add("swiper-button-disabled");
            }
        }
    });
});

// 닫기 버튼
serviceCloseButton.addEventListener("click", (e) => {
    serviceModal.classList.remove("active");
});

// 서비스 선택
serviceButtonList.forEach((button) => {
    button.addEventListener("click", (e) => {
        const number = Number(button.firstElementChild.textContent);
        serviceCount = number - 1;

        servicePrevButton.classList.remove("swiper-button-disabled");
        serviceNextButton.classList.remove("swiper-button-disabled");

        if (serviceCount === 0) {
            serviceSwiperButtons[1].classList.add("swiper-button-disabled");
        } else if (serviceCount === 7) {
            serviceSwiperButtons[0].classList.add("swiper-button-disabled");
        }

        serviceSwiperWrapper.style.transform = `translate(-${serviceCount * 730}px)`;

        serviceModal.classList.add("active");
    });
});
