// 광고 배너

// ============================================
// 탭 메뉴 (MY, 체험공고, 기술블로그, QnA)
// ============================================
const secondBannerSections = document.querySelectorAll(".personal-tab-item a");
const secondBannerDiv = document.querySelectorAll(
    ".tab-cont.personal-contents-item",
);

secondBannerSections.forEach((secondBannerSection, i) => {
    const li = secondBannerSection.closest("li");

    secondBannerSection.addEventListener("click", (e) => {
        e.preventDefault();

        // 1. 모든 li에서 active 제거
        secondBannerSections.forEach((btn) => {
            btn.closest("li").classList.remove("active");
        });

        // 2. 모든 콘텐츠에서 active 제거
        secondBannerDiv.forEach((div) => {
            div.classList.remove("active");
        });

        // 3. 클릭한 li에 active 추가
        li.classList.add("active");

        // 4. 같은 인덱스의 콘텐츠에 active 추가
        secondBannerDiv[i].classList.add("active");

        // 5. 슬라이더가 있으면 업데이트
        setTimeout(() => {
            const activeSwiper =
                secondBannerDiv[i].querySelector(".swiper-container");
            if (activeSwiper && activeSwiper.swiper) {
                activeSwiper.swiper.update();
            }
        }, 100);
    });
});

// MY 슬라이더 (my-list-wrap)

const mySwiper = new Swiper(".my-list-wrap", {
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 16,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

// 체험공고 슬라이더 (instance-swipwe-6)

const smartfitSwiper = new Swiper(".instance-swipwe-6", {
    slidesPerView: 3,
    spaceBetween: 16,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".instance-next6",
        prevEl: ".instance-prev6",
    },
});

// 기술블로그 슬라이더 (instance-swipwe-3)

const blogSwiper = new Swiper(".instance-swipwe-3", {
    slidesPerView: 3,
    spaceBetween: 16,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".instance-next3",
        prevEl: ".instance-prev3",
    },
});

// QnA 슬라이더 (instance-swipwe-5)
const qnaSwiper = new Swiper(".instance-swipwe-5", {
    slidesPerView: 3,
    spaceBetween: 16,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".instance-next5",
        prevEl: ".instance-prev5",
    },
});

// 기업 체험 공채 슬라이더 (1000대 기업)

const top1000Swiper = new Swiper(".top1000-swiper", {
    slidesPerView: 8,
    slidesPerGroup: 1,
    spaceBetween: 0,
    loop: true,
    loopAdditionalSlides: 8,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    speed: 500,
    navigation: {
        nextEl: ".top1000-next",
        prevEl: ".top1000-prev",
    },
});

// 채용 바로가기 버튼

const expGoButtons = document.querySelectorAll(".button-recruit");

expGoButtons.forEach((expGoButton) => {
    expGoButton.addEventListener("click", (e) => {
        location.href = "";
    });
});
