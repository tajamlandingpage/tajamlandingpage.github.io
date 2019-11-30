$(document).ready(function () {

    $('.single-item').slick({
        fade: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        prevArrow: '<button type="button" class="prev"></button>',
        nextArrow: '<button type="button" class="next"></button>',
    });


    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 700, 'linear');
    });

});