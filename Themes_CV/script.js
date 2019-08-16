$("#scroll-me").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#scroll_here").offset().top
    }, 2000);
});
