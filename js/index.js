$(function() {
    var slider;

    function initSize() {
        $('.slider div').css({
            'height': $(window).height() + 'px',
            'width': $(window).width() + 'px'
        })
    }
    initSize();
    slider = $('.slider').unslider({
        autoplay: true,
        speed: 2000,
        delay: 5000,
        animation: 'fade',
        nav: false,
        arrows: false
    });
    $(window).resize(function() {
        initSize();
    });

});