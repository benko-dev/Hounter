$(document).ready(function(){
    $('.find__slider').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        arrows: false,
        dots: true,
        autoplay: true,
        speed: 1100,
        autoplaySpeed: 2800,
    });

    $('#house').slick({
        appendArrows: $('.btn-house'),
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                    
                }
            },
        ]
    });
    $('#villa').slick({
        appendArrows: $('.btn-villa'),
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                    
                }
            },
        ]
    });
    $('#appartment').slick({
        appendArrows: $('.btn-appartment'),
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                    
                }
            },
        ]
    });


    $('.about-us__slider').slick({
        infinite: true,
        centerMode: true,
        arrows: false,
        dots: true,
        initialSlide: 1,
        speed: 1100,
    });
});