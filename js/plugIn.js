/*global console, alert, prompt, $, jQuery*/
/*jslint plusplus: true, evil: true */



// adjust header height
$(document).ready(function () {
    
    "use strict";
        
    var myHeadr = $(".header");
    
    myHeadr.height($(window).height());
    
    $(window).resize(function () {
        
        myHeadr.height($(window).height());
        
    });
    
});






// bx slider
$(document).ready(function () {
    
    
    "use strict";
    
     // run the bxslider
    
    $('.bxslider').bxSlider({
        
        pager: false,
        controls: false,
        auto: true,
        speed: 800,
        pause: 4000
        
    });
    
    
});







// soomth scroll to the section

$(document).ready(function () {

    "use strict";
    
    $(".links li a").click(function () {
        
        $("html, body").animate({
          
            scrollTop : $("#" + $(this).data('value')).offset().top
          
        }, 1000);
        
        
    });
    
});









// trigger MixItUp
$(document).ready(function () {

    "use strict";
    
    $("#Container").mixItUp();
    
});

// switch between bottom in MixItUp trigger
$(document).ready(function () {
    
    "use strict";
    
    $(".services .controls button").click(function () {
        
        $(this).addClass('selective').siblings().removeClass('selective');
        
    });
    
    
});








// scroll top button

$(document).ready(function () {
    
    "use strict";
    
    // show the button after 3000px
    
    $(window).on("scroll", function () {
    
        var sc = $(window).scrollTop(),
            scrBut = $("#scroll-top");
        
        if (sc >= 2000) {
            
            scrBut.fadeIn(1000);
            
        } else {
            
            scrBut.fadeOut(1000);
            
        }
        
    });
    
    
    // click on the button to scroll top
    
    $("#scroll-top").on("click", function () {
        
        $("html, body").animate({ scrollTop: 0}, 1500);
        
        
    });
    
});







// nice scroll

$(document).ready(function () {
    
    "use strict";
    
    $("html").niceScroll();
    
});






// fade in for about us section
$(document).ready(function () {
    
    "use strict";
    
    $(window).on("scroll", function () {
        
        var sc = $(window).scrollTop();
        
        if (sc >= 300) {
            
            $(".a-1").fadeIn(1000);
            $(".a-2").fadeIn(3000);
            $(".a-3, hr").fadeIn(5000);
        }
        
    });
    
    
});














