$(function() {
    $('a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

$(".about-carousel").owlCarousel({
    items: 3,
    navigation: true,
    pagination: false,
    navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
});

$(".hangout-carousel").owlCarousel({
    singleItem: true,
    navigation: true,
    pagination: false,
    navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    autoHeight: true,
    mouseDrag: false,
    touchDrag: false,
    transitionStyle: "fadeUp"
});

$(".testimonials-carousel").owlCarousel({
    singleItem: true,
    navigation: true,
    pagination: true,
    autoHeight: true,
    navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    transitionStyle: "backSlide"
});

$(".hangout-gallery").owlCarousel({
    items: 3,
});

$('.gallery-link').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    },
    image: {
        titleSrc: 'title'
    }
});

$("header.video").wallpaper({
    source: {
        poster: "assets/img/bg-mobile-fallback.jpg",
        mp4: "assets/mp4/camera.mp4"
    }
});

$(window).on("load resize",function(e){
    (function(e) {
        var $winWidth = e(window).width();
        e(document).on('show.bs.modal', function() {
            if ($winWidth < e(window).width()) {
                e('body.modal-open,.navbar-fixed-top,.navbar-fixed-bottom').css('marginRight', e(window).width() - $winWidth)
            }
        });
        e(document).on('hidden.bs.modal', function() {
            e('body,.navbar-fixed-top,.navbar-fixed-bottom').css('marginRight', 0)
        });
    })(jQuery);
});

$('body').scrollspy({
    target: '.navbar-fixed-top'
})
