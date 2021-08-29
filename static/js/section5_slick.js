$(document).ready(function() {
    $(function() {
        $('.centerl').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 2000,
            // dots: true,
            centerMode: true,
            focusOnSelect: true,
            centerPadding: '0px',
            asNavFor: '.centerz',
        })
    })
});
$(document).ready(function() {
    $(function() {
        $('.center2').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 2000,
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            centerPadding: '0px',
            asNavFor: '.centerz',
        })
    })
});
$(document).ready(function() {
    $(function() {
        $('.center3').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 2000,
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            centerPadding: '0px',
            asNavFor: '.centerz',


        })
    })
});