$(window).scroll(function() {
    if ($(this).scrollTop()>0) {
        $("img-top").fadeOut();
        }
    else {
    $("img-top").fadeIn();
    }
});