$('.brands-wrap').slick({
    infinite: true,
    arrows: false,
    speed: 300,
    dots: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"><img src="theme/img/icon/prew.png"></div>',
    nextArrow: '<div class="slick-next"><img src="theme/img/icon/Next.png"></div>',
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
                infinite: true,
                dots: true,
                autoplay: true,
                autoplaySpeed: 4000,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true
            }
        }
    ]
});

$('.slider-popular-card').slick({
    infinite: true,
    arrows: true,
    speed: 600,
    dots: false,
    // autoplay: true,
    // autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"><img src="./img/icon/prew.svg"></div>',
    nextArrow: '<div class="slick-next"><img src="./img/icon/next.svg"></div>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});

$(document).ready(function () {
    $(".right-part, .header").removeClass("preload");
});


$(function () {
    (function cropTitle() {
        $(".popular-card-title").each(function () {
            var $title = $(this).find("a");

            while ($title.height() > $(this).height()) {
                $title.text($title.text().split(" ").slice(0, $title.text().split(" ").length - 1).join(" ") + "...");
            }
        });
    })();
});


let $animation_elements = $('.brands-wrap .item, .about-us, .main-sport-card, .contact-and-map, .contact-form');
let $window = $(window);
$window.on('scroll', check_if_in_view);
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

function check_if_in_view() {
    let window_height = $window.height();
    let window_top_position = $window.scrollTop();
    let window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
        let $element = $(this);
        let element_height = $element.outerHeight();
        let element_top_position = $element.offset().top + 60;
        let element_bottom_position = ((element_top_position - 140) + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}


if($('.slider-full .item').length > 1) {
    $('.slider-full').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.slider-nav',
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    });
} else {
    $('.slider-full').addClass('one-item');
}

if($('.slider-nav .item').length > 1) {
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-full',
        dots: false,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    verticalSwiping: true,
                    focusOnSelect: true,
                    focusOnSelect: true
                }
            }
        ]
    });
} else {
    $('.slider-nav').remove();
}

$(".burger-menu").on('click', function () {
    $(this).toggleClass("open");
    $("body").toggleClass("menu-on");
});


$(window).on('scroll', function () {
    let top = $(window).scrollTop();
    if (top < 50) {
        $('.bg-header').removeClass('fixed');
    } else {
        $('.bg-header').addClass('fixed');
    }
});

function delivery() {
    $('.check-block label').on('click', function () {
        $('.check-block .input-text').removeClass('open');
        let block = $(this).parent();
        let content = block.find('.input-text');
        content.addClass('open');
    });
}

delivery();

function payment() {
    $('.payment-block label').on('click', function () {
        $('.payment-block .input-text').removeClass('open');
        let block = $(this).parent();
        let content = block.find('.input-text');
        content.addClass('open');
    });
}

payment();

function delayedAlert() {
    let timeoutID = window.setTimeout(expandLogo, 1000);
}

function expandLogo() {
    $('.main-banner .title, .main-banner .description, .main-banner .banner-button').addClass('is-move');
}

delayedAlert();

function addtoFavorite() {
    $('.add_to_card,.add-to-favorite').on('click', function () {
        $(this).toggleClass('added');
    });
}

addtoFavorite();

function openFilter() {
    $('.btn-filter').on('click', function () {
        $('.filter-left').toggleClass('open-filter');
    });
}

openFilter();

function closeFilter() {
    $('.close-filter').on('click', function () {
        $('.filter-left').toggleClass('open-filter');
    });
}

closeFilter();

function spoiler() {
    $('.__header').on('click', function () {

        let spoiler = $(this).parent();
        let status = $(this).attr('hide-content');

        if (status === 'true') {
            $(this).attr('hide-content', 'false').addClass('mb-0');
            let content = spoiler.find('.__content');

            content.addClass('__hidden');
            let icon = spoiler.find('.toggler');
            icon.addClass('icon-plus').removeClass('icon-minus');

        } else {
            $(this).attr('hide-content', 'true').removeClass('mb-0');
            let content = spoiler.find('.__content');
            content.removeClass('__hidden');

            let icon = spoiler.find('.toggler');
            icon.addClass('icon-minus').removeClass('icon-plus');
        }

    });
}

spoiler();

$(document).ready(function () {

    let $wrapper = $('.tab-wrapper'),
        $allTabs = $wrapper.find('.tab-content > .tab'),
        $tabMenu = $wrapper.find('.tab-menu li');

    $allTabs.not(':first-of-type').hide();
    $tabMenu.filter(':first-of-type').find(':first').width('100%');

    $tabMenu.each(function (i) {
        $(this).attr('data-tab', 'tab' + i);
    });

    $allTabs.each(function (i) {
        $(this).attr('data-tab', 'tab' + i);
    });

    $tabMenu.on('click', function () {

        let dataTab = $(this).data('tab'),
            $getWrapper = $(this).closest($wrapper);

        $getWrapper.find($tabMenu).removeClass('active');
        $(this).addClass('active');
        $getWrapper.find($allTabs).hide();
        $getWrapper.find($allTabs).filter('[data-tab=' + dataTab + ']').show();
    });

});

// MODAL WINDOW
let modal = $('.modal');
modal.css('display', '');

// Open Modal
$('.open-modal').on('click', function () {
    let target = "#" + $(this).data("target");
    $("body").addClass("open-modal");
    $(target).addClass('active');
});

// Close Modal
function close_modal() {
    $(".modal").removeClass('active');
    $("body").removeClass("open-modal");
}

$('.close,.close-window, .modal, .modal-wrap,.overlay').on('click', function (e) {
    if (e.target === this) {
        close_modal();
    }
});



