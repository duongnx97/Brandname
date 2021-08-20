$(window).on("scroll", function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
        $("#site-header").addClass("nav-fixed");
    } else {
        $("#site-header").removeClass("nav-fixed");
    }
});