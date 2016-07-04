// tabs
$(function() {
    $( "#tabs" ).tabs({
        active: 0
    });
});

// swipper

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    effect: 'cube',
    grabCursor: true,
    speed: 300,
    cube: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
    }
});