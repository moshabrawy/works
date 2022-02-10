$(document).ready(function() {
    "use strict";
    /*======================================
     JQuery Nice Scroll
     ======================================*/
    if (screen.width > 750) {
        $("body").niceScroll({
            cursorcolor: "#0099CC",
            background: "#DDD",
            cursorwidth: "6",
            autohidemode: false,
            cursorborder: "none",
            cursorborderradius: "4px",
            cursorminheight: 60,
            cursorminheight: 85,
            zindex: '99999999',
        });
    } else { console.log('niceScroll is not working in this screen'); };

    //Collapse List
    $(".close").click(function() {
        $(".list").toggle("left", "0");
        $(".scale-cont").toggleClass("col-md-12");
        $(".openlist").css("display", "block");
    });
    $(".openlist").click(function() {
        $(".list").toggle("left", "0");
        $(".scale-cont").toggleClass("col-md-12");
        $(".openlist").css("display", "none");
    });

    // Open Sub Front List
    $(".op-front").click(function() {
        $("#sub_back").css("display", "none");
        $("#sub_graphic").css("display", "none");
        $("#sub_front").toggle("display", "none");
    });
    // Open Sub back List
    $(".op-back").click(function() {
        $("#sub_front").css("display", "none");
        $("#sub_graphic").css("display", "none");
        $("#sub_back").toggle("display", "block");
    });
    // Open Sub graphic List
    $(".op-graphic").click(function() {
        $("#sub_back").css("display", "none");
        $("#sub_front").css("display", "none");
        $("#sub_graphic").toggle("display", "block");
    });
});