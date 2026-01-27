// 충전하기 버튼
const chargeButton = document.querySelector(
    ".header_button__9mwzc.header_highlight__3hMnE",
);
const body = document.querySelector("body");
const modal = document.createElement("div");

chargeButton.addEventListener("click", (e) => {
    body.style.overflow = body.style.overflow === "hidden" ? "" : "hidden";
    modal.innerHTML = `
        <div class="profile_popup_dimmed__3axER">
            <div
                class="profile_popup_container__1Ekcl"
                role="alertdialog"
                aria-modal="true"
                style="width: 405px"
            >
                <div class="profile_popup_header__1c0EQ">
                    <strong class="profile_popup_title__3YiOY">별 충전하기</strong>
                </div>
                <div class="profile_popup_content__mAIU7">
                    <div class="profile_popup_inner__22tcx">
                        <div class="profile_popup_area__1WUHf" style="margin-top: 0px">
                            <div class="charge_box__djnS1">
                                <label class="charge_area__1Ks2V" for="charge-coin">
                                    <div class="charge_text__3bWer">충전할 별</div>
                                    <div class="charge_text_area__H1YKl">
                                        <input
                                            type="text"
                                            class="charge_input__HK4uG"
                                            id="charge-coin"
                                            value="1,000"
                                        />
                                        <button
                                            class="charge_delete_button__3xtE1"
                                            type="button"
                                        >
                                            <span class="blind">금액 초기화</span>
                                        </button>
                                    </div>
                                </label>
                                <div class="charge_area__1Ks2V">
                                    <button type="button" class="charge_button__3OgjR">
                                        +1천
                                    </button>
                                    <button type="button" class="charge_button__3OgjR">
                                        +5천
                                    </button>
                                    <button type="button" class="charge_button__3OgjR">
                                        +1만
                                    </button>
                                    <button type="button" class="charge_button__3OgjR">
                                        +10만
                                    </button>
                                    <button type="button" class="charge_button__3OgjR">
                                        +100만
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="profile_popup_area__1WUHf">
                            <div class="charge_total_box__zi9C8">
                                <div class="charge_text__3bWer">최종 결제금액</div>
                                <strong class="charge_price__1_H_P">1,100원</strong>
                            </div>
                        </div>
                        <div class="charge_information_area__3bRd0">
                            내용을 확인했으며 별 충전에 동의합니다.
                            <button
                                type="button"
                                aria-expanded="false"
                                class="charge_information_area_button__D0_jh"
                            >
                                안내보기
                            </button>
                        </div>
                    </div>
                </div>
                <div class="profile_popup_footer__1KIrx profile_popup_medium__sN54E">
                    <div class="profile_popup_box__1h-lT profile_popup_full_button__HtTtv">
                        <button
                            type="button"
                            class="profile_popup_button__1QWel profile_popup_is_highlight__37n_J"
                        >
                            별 충전하기
                        </button>
                    </div>
                </div>
                <button
                    type="button"
                    class="profile_popup_top_button__CbyxM profile_popup_close__1tv6R"
                >
                    <span class="blind">팝업 닫기</span>
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    modal.addEventListener("click", (e) => {
        if (e.target.classList.contains("profile_popup_is_highlight__37n_J")) {
            console.log("들어옴");
        }
    });

    // 충전 모달
    const popupDimmed = document.querySelector(".profile_popup_dimmed__3axER");
    const popupContainer = document.querySelector(
        ".profile_popup_container__1Ekcl",
    );
    const chargeInput = document.getElementById("charge-coin");
    const deleteButton = document.querySelector(".charge_delete_button__3xtE1");
    const chargeButtons = document.querySelectorAll(".charge_button__3OgjR");
    const totalPrice = document.querySelector(".charge_price__1_H_P");
    const submitButton = document.querySelector(".profile_popup_button__1QWel");
    const closeButton = document.querySelector(".profile_popup_close__1tv6R");
    const infoButton = document.querySelector(
        ".charge_information_area_button__D0_jh",
    );

    // 숫자만 추출
    function parseNumber(str) {
        return parseInt(str.replace(/[^0-9]/g, ""), 10) || 0;
    }

    // 천 단위 콤마 포맷
    function formatNumber(num) {
        return num.toLocaleString("ko-KR");
    }

    // 총액 계산 (부가세 10% 포함)
    function calculateTotal(stars) {
        return Math.floor(stars * 1.1);
    }

    // 총액 업데이트
    function updateTotal() {
        const stars = parseNumber(chargeInput.value);
        const total = calculateTotal(stars);
        totalPrice.textContent = formatNumber(total) + "원";
    }

    // 금액 추가 버튼 클릭
    chargeButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const text = e.target.textContent.trim();
            let result = 0;

            if (text === "+1천") result = 1000;
            else if (text === "+5천") result = 5000;
            else if (text === "+1만") result = 10000;
            else if (text === "+10만") result = 100000;
            else if (text === "+100만") result = 1000000;

            const current = parseNumber(chargeInput.value);
            chargeInput.value = formatNumber(current + result);
            updateTotal();
        });
    });

    // 10의자리 다 떨구기
    chargeInput.addEventListener("input", (e) => {
        // 콤마 제거하고 숫자만 추출
        let inputValue =
            parseInt(chargeInput.value.replace(/[^0-9]/, ""), 10) || 0;

        if (inputValue) {
            // 100 단위로 내림 (10의자리 버림)
            let rounded = Math.floor(inputValue / 100) * 100;
            chargeInput.value = rounded.toLocaleString("ko-KR");
        } else {
            const chargeBox = document.querySelector(".charge_box__djnS1");
            // 이미 경고가 있으면 추가 안함
            if (!chargeBox.querySelector(".charge_warning__WXx4e")) {
                const div = document.createElement("div");
                div.classList.add("charge_warning__WXx4e");
                div.innerHTML = `충전할 치즈를 입력해주세요`;
                chargeBox.appendChild(div);
            }
        }
    });

    // 입력 초기화
    deleteButton.addEventListener("click", (e) => {
        chargeInput.value = "";
        updateTotal();
        chargeInput.focus();
    });

    // 입력 이벤트 처리
    chargeInput.addEventListener("input", (e) => {
        const num = parseNumber(e.target.value);
        if (num > 0) {
            e.target.value = formatNumber(num);
        } else {
            e.target.value = "";
        }
        updateTotal();
    });

    // 팝업 닫기
    closeButton.addEventListener("click", (e) => {
        popupDimmed.style.display = "none";
        document.body.style.overflow = "";
    });

    // 딤드 영역 클릭 시 닫기
    popupDimmed.addEventListener("click", (e) => {
        if (e.target === popupDimmed) {
            popupDimmed.style.display = "none";
            document.body.style.overflow = "";
        }
    });

    // 안내보기 토글
    infoButton.addEventListener("click", (e) => {
        const isExpanded = e.target.getAttribute("aria-expanded") === "true";
        e.target.setAttribute("aria-expanded", !isExpanded);
        // 안내 상세 내용 토글 로직 추가 가능
    });

    const pay = async () => {
        const price = parseInt(
            totalPrice.textContent.replace(/[^0-9]/g, ""),
            10,
        );

        // NaN 체크
        if (isNaN(price) || price <= 0) {
            alert("금액을 입력해주세요");
            return;
        }

        try {
            const response = await Bootpay.requestPayment({
                application_id: "697868f4fc55d934885c2420",
                price: price,
                order_name: "별",
                order_id: "TEST_ORDER_ID",
                pg: "라이트페이",
                // method: "계좌이체",
                tax_free: 0,
                user: {
                    id: "회원아이디",
                    username: "회원이름",
                    phone: "01000000000",
                    email: "test@test.com",
                },
                items: [
                    {
                        id: "item_id",
                        name: "테스트아이템",
                        qty: 1,
                        price: price,
                    },
                ],
                extra: {
                    open_type: "iframe",
                    card_quota: "0,2,3",
                    escrow: false,
                },
            });
            switch (response.event) {
                case "issued":
                    // 가상계좌 입금 완료 처리
                    break;
                case "done":
                    // 결제 완료 처리
                    console.log(response);
                    break;
                case "confirm": //payload.extra.separately_confirmed = true; 일 경우 승인 전 해당 이벤트가 호출됨
                    console.log(response.receipt_id);
                    /**
                     * 1. 클라이언트 승인을 하고자 할때
                     * // validationQuantityFromServer(); //예시) 재고확인과 같은 내부 로직을 처리하기 한다.
                     */
                    const confirmedData = await Bootpay.confirm(); //결제를 승인한다
                    if (confirmedData.event === "done") {
                        //결제 성공
                    }

                    /**
                     * 2. 서버 승인을 하고자 할때
                     * // requestServerConfirm(); //예시) 서버 승인을 할 수 있도록  API를 호출한다. 서버에서는 재고확인과 로직 검증 후 서버승인을 요청한다.
                     * Bootpay.destroy(); //결제창을 닫는다.
                     */
                    break;
            }
        } catch (e) {
            // 결제 진행중 오류 발생
            // e.error_code - 부트페이 오류 코드
            // e.pg_error_code - PG 오류 코드
            // e.message - 오류 내용
            console.log(e.message);
            switch (e.event) {
                case "cancel":
                    // 사용자가 결제창을 닫을때 호출
                    console.log(e.message);
                    break;
                case "error":
                    // 결제 승인 중 오류 발생시 호출
                    console.log(e.error_code);
                    break;
            }
        }
    };

    // 별 충전하기 버튼
    submitButton.addEventListener("click", (e) => {
        pay();
    });

    // 초기 총액 계산
    updateTotal();
});
