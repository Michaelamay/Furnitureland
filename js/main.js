
$('.slider-one')

.not(".slick-intialized")
.slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    prevArrow : ".site-slider .slider-btn .prev",
    nextArrow : ".site-slider .slider-btn .next",
});

// slider two
$('.slider-two')

.not(".slick-intialized")
.slick({

    prevArrow : ".site-slider-two .prev",
    nextArrow : ".site-slider-two .next",
    slidesToShow:5,
    slidesToScroll:1,
    autoplaySpeed:3000
});

// slider three
$('.slider-three')

.not(".slick-intialized")
.slick({

    prevArrow : ".site-slider-three .prev",
    nextArrow : ".site-slider-three .next",
    slidesToShow:4,
    slidesToScroll:1,
    autoplaySpeed:3000,
    infinite: false
});

// Four three
$('.slider-four')

.not(".slick-intialized")
.slick({

    prevArrow : ".site-slider-four .prev",
    nextArrow : ".site-slider-four .next",
    slidesToShow:4,
    slidesToScroll:1,
    autoplaySpeed:3000,
    infinite: false
});
