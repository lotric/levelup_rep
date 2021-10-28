$(document).ready(function(){
    $('.carousel__inner').slick({
        arrows: false,
        autoplay: true,
        speed: 1200,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false
                }
            }
        ]
    });
});