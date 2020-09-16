import Swiper from "swiper";

(function () {
    const mainBannerSlider = new Swiper(".swiper-container.main-banner__slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
        },
    });

    const recommendedSlider = new Swiper(".swiper-container.recommended-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
    });
})();