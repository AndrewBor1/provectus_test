'use strict';
$(window).load(function() {
    
    /* --------- */
    /* FUNCTIONS */
    /* --------- */
    
    // INITIALIZE HEADER SLIDER
    function initHeadSlider() {
        if ($(window).width() < 992) {
            $('#HeadSlider').owlCarousel({
                // items: 3,
                loop: true,
                autoplay: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 3
                    }
                }
            });
        }
    }
    
    // SHOW/HIDE TOP MENU ON DIFFERENT RESOLUTIONS
    function showHideMenu() {
        var $mobileMenu = $('#Navigation', '#Header');
        if ($(window).width() > 767) {
            if ($mobileMenu.css("display") === "none") {
                $mobileMenu.fadeIn('slow');
            }
        } else {
            if ($mobileMenu.css("display") !== "none") {
                $mobileMenu.hide();
            }
        }
    }
    
    
    /* --------------- */
    /* CLASS NAMESPACE */
    /* --------------- */
    var classNamespace = {
        
        // OPEN/CLOSE MOBILE MENU
        openCloseMenu: function() {
            var $mobileMenu = $('#Navigation', '#Header');
            if ($mobileMenu.css('display') === 'none') {
                $mobileMenu.slideDown();
            }
            else {
                $mobileMenu.slideUp();
            }
        }
    };
    
    /* ------ */
    /* EVENTS */
    /* ------ */
    
    // MOBILE MENU BTN
    $('a', '#Header .mobile-menu-btn').on('click', classNamespace.openCloseMenu);
    
    // INITIALIZE HEADER SLIDER
    initHeadSlider();
    
    // SHOW/HIDE TOP MENU ON DIFFERENT RESOLUTIONS
    showHideMenu();
    
    // IN CASE OF RESIZE VIEWPORT
    $(window).resize(function() {
        
        // INITIALIZE HEADER SLIDER
        initHeadSlider();
        
        // SHOW/HIDE TOP MENU ON DIFFERENT RESOLUTIONS
        showHideMenu();
    });
});