(() => {
    console.log("1");
})();
import Swiper, { Pagination } from "swiper";
import "swiper/swiper-bundle.css";




// configure Swiper to use modules
Swiper.use([Pagination]);

(function() {
    const mainBannerSlider = new Swiper(".swiper-container.main-banner__slider", {
        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
        },
    });
    console.log("1");
})();
