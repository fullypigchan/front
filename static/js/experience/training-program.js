// 즉시지원 + 버튼
const plusButton = document.querySelectorAll(
    ".TooltipBox_tooltipBoxTrigger__117pni2",
);

plusButton.forEach((plusButton) => {
    plusButton.addEventListener("click", (e) => {
        const isExpanded = plusButton.getAttribute("aria-expanded") === "true";

        plusButton.setAttribute("aria-expanded", !isExpanded);
        plusButton.setAttribute("data-state", isExpanded ? "closed" : "open");

        // 항상 먼저 기존 chatBox 제거
        const lastChild = document.body.lastElementChild;
        if (lastChild && lastChild.tagName === "DIV") {
            lastChild.remove();
        }

        // 닫기면 여기서 종료
        if (isExpanded) return;

        // 열기
        const chatBox = document.createElement("div");
        chatBox.style = "position: fixed; ...";
        chatBox.innerHTML = `...`;
        document.body.appendChild(chatBox);
        // 이부분 서버에서 받아와서 동적으로 추가. 스타일 innerHTML둘다
        // 직무쪽 스타일
        chatBox.style =
            "position: fixed; left: 0px; top: 0px; transform: translate(1355px, 185px); min-width: max-content; --popper-transform-origin: 50% 0px; z-index: 10; --popper-available-width: 1845px; --popper-available-height: 696px; --popper-anchor-width: 16px; --popper-anchor-height: 22px;";
        // 근무지역쪽 스타일
        // chatBox.style =
        //     "position: fixed; left: 0px; top: 0px; transform: translate(1377px, 335px); min-width: max-content; --popper-transform-origin: 50% 0px; z-index: 10; --popper-available-width: 1845px; --popper-available-height: 546px; --popper-anchor-width: 16px; --popper-anchor-height: 22px;";
        // AD쪽 스타일
        // chatBox.style =
        //     "position: fixed; left: 0px; top: 0px; transform: translate(1008px, 486px); min-width: max-content; --popper-transform-origin: 100% 52px; z-index: 10; --popper-available-width: 1845px; --popper-available-height: 508px; --popper-anchor-width: 32.671875px; --popper-anchor-height: 18px;";

        chatBox.innerHTML =
            // 직무쪽 스타일
            `
            <div
                data-align="center"
                data-side="bottom"
                data-state="open"
                id="jk-_r_0_"
                role="dialog"
                tabindex="-1"
                style="
                    z-index: 10;
                    width: 240px;
                    --popover-content-transform-origin: var(--popper-transform-origin);
                    --popover-content-available-width: var(--popper-available-width);
                    --popover-content-available-height: var(--popper-available-height);
                    --popover-trigger-width: var(--popper-anchor-width);
                    --popover-trigger-height: var(--popper-anchor-height);
                "
            >
                <div
                    class="Flex_display_flex__i0l0hl2 TooltipBox_tooltipBoxContentContainer__117pni0"
                >
                    <button type="button">
                        <div
                            class="Flex_display_flex__i0l0hl2 TooltipBox_tooltipBoxContentCloseIcon__117pni6"
                        >
                            <i
                                class="jds-icon jds-icon--system_close Icon_root__1516qwb0 Icon_color_gray500__1516qwb6 Icon_size_14__1516qwbj"
                            ></i>
                        </div>
                    </button>
                    <div
                        class="Flex_display_flex__i0l0hl2 TooltipBox_tooltipBoxNoTitleContent__117pni4 TooltipBox_tooltipBoxContent__117pni3"
                    >
                        요리사, 조리사, 셰프·주방장, 주방보조, 매장관리자,
                        운영보조·매니저
                    </div>
                </div>
            </div>
        `;
        // 근무지역쪽 html
        // `
        //     <div
        //     data-align="center"
        //     data-side="bottom"
        //     data-state="open"
        //     id="jk-_r_1_"
        //     role="dialog"
        //     tabindex="-1"
        //     style="
        //         z-index: 10;
        //         width: 240px;
        //         --popover-content-transform-origin: var(--popper-transform-origin);
        //         --popover-content-available-width: var(--popper-available-width);
        //         --popover-content-available-height: var(--popper-available-height);
        //         --popover-trigger-width: var(--popper-anchor-width);
        //         --popover-trigger-height: var(--popper-anchor-height);
        //     "
        //     >
        //         <div
        //             class="Flex_display_flex__i0l0hl2 TooltipBox_tooltipBoxContentContainer__117pni0"
        //         >
        //             <button type="button">
        //                 <div
        //                     class="Flex_display_flex__i0l0hl2 TooltipBox_tooltipBoxContentCloseIcon__117pni6"
        //                 >
        //                     <i
        //                         class="jds-icon jds-icon--system_close Icon_root__1516qwb0 Icon_color_gray500__1516qwb6 Icon_size_14__1516qwbj"
        //                     ></i>
        //                 </div>
        //             </button>
        //             <div
        //                 class="Flex_display_flex__i0l0hl2 TooltipBox_tooltipBoxNoTitleContent__117pni4 TooltipBox_tooltipBoxContent__117pni3"
        //             >
        //                 부산 중구, 부산 전지역, 강서구, 남구, 동구, 동래구, 부산진구,
        //                 북구, 사상구, 사하구, 서구, 수영구, 연제구, 영도구, 해운대구
        //             </div>
        //         </div>
        //     </div>
        // `
        // AD쪽 HTML
        // `
        // <div
        // data-align="end"
        // data-side="top"
        // data-state="open"
        // id="jk-_R_iojkltiv5ubr9db_"
        // role="dialog"
        // data-sentry-element="TooltipBox"
        // data-sentry-source-file="index.tsx"
        // tabindex="-1"
        // style="
        //     z-index: 10;
        //     --popover-content-transform-origin: var(--popper-transform-origin);
        //     --popover-content-available-width: var(--popper-available-width);
        //     --popover-content-available-height: var(--popper-available-height);
        //     --popover-trigger-width: var(--popper-anchor-width);
        //     --popover-trigger-height: var(--popper-anchor-height);
        // "
        // >
        //     <div
        //         class="Flex_display_flex__i0l0hl2 TooltipBox_tooltipBoxContentContainer__117pni0"
        //     >
        //         <button type="button">
        //             <div
        //                 class="Flex_display_flex__i0l0hl2 TooltipBox_tooltipBoxContentCloseIcon__117pni6"
        //             >
        //                 <i
        //                     class="jds-icon jds-icon--system_close Icon_root__1516qwb0 Icon_color_gray500__1516qwb6 Icon_size_14__1516qwbj"
        //                 ></i>
        //             </div>
        //         </button>
        //         <div
        //             class="Flex_display_flex__i0l0hl2 TooltipBox_tooltipBoxNoTitleContent__117pni4 TooltipBox_tooltipBoxContent__117pni3"
        //         >
        //             성과형 상품을 구매한 공고로 우선 노출됩니다.
        //         </div>
        //     </div>
        // </div>
        // `

        document.body.appendChild(chatBox);
        const chatDeleteButton = document.querySelector(
            ".Flex_display_flex__i0l0hl2.TooltipBox_tooltipBoxContentCloseIcon__117pni6",
        );

        chatDeleteButton.addEventListener("click", (e) => {
            chatBox.remove();
            console.log("들어옴");

            plusButton.setAttribute("aria-expanded", "false");
            plusButton.setAttribute("data-state", "closed");
        });
    });
});

// 태크 버튼
const arrowButton = document.querySelector(".sfb4yq3");

arrowButton.addEventListener("click", () => {
    const icon = arrowButton.querySelector("i");
    const tagContainer = arrowButton
        .closest(".sfb4yq0")
        .querySelector(".sfb4yq1");
    const isExpanded = icon.classList.contains("jds-icon--system_arrow_up");

    // 아이콘 토글
    icon.classList.toggle("jds-icon--system_arrow_up");
    icon.classList.toggle("jds-icon--system_arrow_down");

    // 그라데이션 div 찾기/생성/제거
    let gradientDiv = arrowButton.closest(".sfb4yq0").querySelector(".sfb4yq2");

    if (isExpanded) {
        // 접기
        tagContainer.style =
            "max-height: 42px; flex-wrap: nowrap; padding-right: 42px;";

        // gradientDiv가 없으면 생성
        if (!gradientDiv) {
            gradientDiv = document.createElement("div");
            gradientDiv.className = "sfb4yq2";
            tagContainer.after(gradientDiv);
        }
    } else {
        // 펼치기
        tagContainer.style =
            "max-height: 100vh; flex-wrap: wrap; padding-right: 42px;";

        // gradientDiv 제거
        if (gradientDiv) {
            gradientDiv.remove();
        }
    }
});

// 채험정보 화살표
const experienceInfo = document.querySelector(".Icon_size_14__1516qwbj");
const experienceInfoPlus = document.querySelector(
    ".styles_overflow_hidden__dk46ts9s.styles_mt_space8__dk46ts1n",
);
const grayBox = document.querySelector(
    ".Box_bgColor_white__1wwr54u0.Box_borderColor_gray100__1wwr54ua.Box_borderSize_1__1wwr54ud.styles_py_space16__dk46ts9.styles_px_space20__dk46ts2k.styles_radius_radius8__dk46ts9g",
);

experienceInfo.addEventListener("click", (e) => {
    experienceInfo.classList.toggle("jds-icon--system_arrow_down");
    experienceInfo.classList.toggle("jds-icon--system_arrow_up");
    if (experienceInfo.classList.contains("jds-icon--system_arrow_up")) {
        experienceInfoPlus.style =
            "opacity: 1; visibility: visible; flex-wrap: wrap;";
        grayBox.style =
            "height: auto; width: 100%; background-color: var(--jds-color-bluegray-bluegray100);";
    } else {
        experienceInfoPlus.style =
            "opacity: 0; visibility: hidden; flex-wrap: nowrap;";
        grayBox.style =
            "height: 60px; width: 100%; background-color: var(--jds-color-bluegray-bluegray100);";
    }
});

// 공유하기
const share = document.querySelector(
    "div.Flex_display_flex__i0l0hl2 div div div button",
);
const div = document.createElement("div");
div.style =
    "position: fixed; left: 0px; top: 0px; transform: translate(1524px, 78px); min-width: max-content; --popper-transform-origin: 44.5px -8px; z-index: 10; --popper-available-width: 1905px; --popper-available-height: 833px; --popper-anchor-width: 48px; --popper-anchor-height: 48px;";

share.addEventListener("mouseenter", (e) => {
    share.dataset.state = "delayed-open";

    div.className = "share-tooltip";

    div.innerHTML = `
        <div data-popper-content-wrapper="" style="position: fixed; left: 0px; top: 0px; transform: translate(1524px, 78px); min-width: max-content; --popper-transform-origin: 44.5px -8px; z-index: 10; --popper-available-width: 1905px; --popper-available-height: 833px; --popper-anchor-width: 48px; --popper-anchor-height: 48px;">
            <div
                data-align="center"
                data-side="bottom"
                data-state="delayed-open"
                data-sentry-element="TooltipJds.Content"
                data-sentry-source-file="index.tsx"
                style="
                    z-index: 10;
                    --tooltip-content-transform-origin: var(
                        --popper-transform-origin
                    );
                    --tooltip-content-available-width: var(
                        --popper-available-width
                    );
                    --tooltip-content-available-height: var(
                        --popper-available-height
                    );
                    --tooltip-trigger-width: var(--popper-anchor-width);
                    --tooltip-trigger-height: var(--popper-anchor-height);
                "
            >
                <div
                    class="Box_bgColor_white__1wwr54u0 Box_borderColor_default__1wwr54u5 Box_borderSize_1__1wwr54ud styles_m_space0__dk46ts5u styles_pl_space16__dk46tsd styles_pb_space8__dk46ts1w styles_pr_space16__dk46tsb styles_pt_space8__dk46ts1u styles_radius_radius4__dk46ts9h g1vplf0"
                    data-sentry-element="Box"
                    data-sentry-source-file="index.tsx"
                >
                    <span
                        data-accent-color="white"
                        class="Typography_variant_size16__344nw26 Typography_weight_regular__344nw2e Typography_color_white__344nw2q"
                        >공유하기</span
                    >
                </div>
                <span
                    style="
                        position: fixed;
                        transform: rotate(180deg);
                        left: 38.5px;
                        top: 1px;
                        transform-origin: center 0px;
                    "
                    ><svg
                        data-sentry-element="TooltipJds.Arrow"
                        data-sentry-source-file="index.tsx"
                        height="8"
                        preserveAspectRatio="none"
                        viewBox="0 0 30 10"
                        width="12"
                        style="display: block"
                    >
                        <polygon points="0,0 30,0 15,10"></polygon></svg></span
                ><span
                    id="jk-_R_2sbkltiv5ubr9db_"
                    role="tooltip"
                    style="
                        position: absolute;
                        border: 0px;
                        width: 1px;
                        height: 1px;
                        padding: 0px;
                        margin: -1px;
                        overflow: hidden;
                        clip: rect(0px, 0px, 0px, 0px);
                        white-space: nowrap;
                        overflow-wrap: normal;
                    "
                    ><div
                        class="Box_bgColor_white__1wwr54u0 Box_borderColor_default__1wwr54u5 Box_borderSize_1__1wwr54ud styles_m_space0__dk46ts5u styles_pl_space16__dk46tsd styles_pb_space8__dk46ts1w styles_pr_space16__dk46tsb styles_pt_space8__dk46ts1u styles_radius_radius4__dk46ts9h g1vplf0"
                        data-sentry-element="Box"
                        data-sentry-source-file="index.tsx"
                    >
                        <span
                            data-accent-color="white"
                            class="Typography_variant_size16__344nw26 Typography_weight_regular__344nw2e Typography_color_white__344nw2q"
                            >공유하기</span
                        >
                    </div></span
                >
            </div>
        </div>
    `;

    document.body.appendChild(div);
});

share.addEventListener("mouseleave", (e) => {
    share.dataset.state = "closed";
    const tooltip = document.querySelector(".share-tooltip");
    if (tooltip) {
        tooltip.remove();
    }
});
share.addEventListener("click", (e) => {});
