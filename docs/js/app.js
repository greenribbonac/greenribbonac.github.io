(function($) {
    //global menu
    $('.gnav__toggle').on('click', function() {
        $(this).toggleClass('active');
        $('.gnav').toggleClass('open');
        $('.overlay').toggleClass('open');
    });
    $('.overlay').on('click', function() {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $('.gnav__toggle').removeClass('active');
            $('.gnav').removeClass('open');
        }
    });

    // scroll event
    const sideFixedBtns = $('.side__fixed_block');
    sideFixedBtns.hide();
    $(window).scroll(function() {
        const fixedmenu = $('#fixedmenu');
        $('header').addClass('fixedmenu');

        if ($(this).scrollTop() > 200) {
            fixedmenu.fadeIn();
        } else {
            $('header').removeClass('fixedmenu');
        }

        if ($(this).scrollTop() > 400) {
            sideFixedBtns.fadeIn();
        } else {
            sideFixedBtns.fadeOut();
        }
    });

    // in-page link smooth scroll
    const headerHight = 100;
    $('a[href^=#]').click(function() {
        const duration = 800;
        const href = $(this).attr("href");
        const target = $(href == "#" || href == "" ? 'html' : href);
        const position = target.offset().top - headerHight;
        $("html, body").animate({ scrollTop: position }, duration, "swing");
        return false;
    });

    //scroll animations
    const animItems = [
        { animName: '.animation-top', animClass: 'fadeInTop' },
        { animName: '.animation-bottom', animClass: 'fadeInBottom' },
        { animName: '.animation-left', animClass: 'fadeInLeft' },
        { animName: '.animation-right', animClass: 'fadeInRight' },
        { animName: '.animation-fade', animClass: 'fade_scale' }
    ];
    $.each(animItems,
        function(index, val) {
            $(val.animName).css('visibility', 'hidden');
            $(window).scroll(function() {
                const windowHeight = jQuery(window).height(),
                    topWindow = jQuery(window).scrollTop();
                const additionalValue = 100;
                $(val.animName).each(function() {
                    const targetPosition = jQuery(this).offset().top;
                    if (topWindow > targetPosition - windowHeight + additionalValue) {
                        jQuery(this).addClass(val.animClass);
                    }
                });
            });
        }
    );
})(jQuery);