// $(document).ready(function() {
//     $(function() {
//         $('.centerk').slick({
//             centerMode: true,
//             centerPadding: '60px',
//             slidesToShow: 3,
//             responsive: [{
//                 breakpoint: 768,
//                 settings: {
//                     arrows: true,
//                     centerMode: true,
//                     centerPadding: '40px',
//                     slidesToShow: 3
//                 }
//             }, {
//                 breakpoint: 480,
//                 settings: {
//                     arrows: true,
//                     centerMode: true,
//                     centerPadding: '40px',
//                     slidesToShow: 1
//                 }
//             }]
//         });

//     })
// })   





$(document).ready(function() {
$(function() {
    $('.centerk').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        centerMode: true,
        centerPadding: '0,'
    })
})
});






// focusOnSelect: true,