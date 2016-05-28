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
        speed: 5000,
        delay: 8000,
        animation: 'fade',
        nav: false,
        arrows: false
    });
    $(window).resize(function() {
        initSize();
    });

    $.getJSON('http://open.iciba.com/dsapi/?callback=?', function(msg) {
        $('.main-content').parents('section').before('<section class="container animated fadeIn"><div class="row"><div class="alert alert-info" role="alert">' + msg.content +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+ msg.note + '</div></div></section>');
    });
});