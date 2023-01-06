$(function () {
  $('a[href^=#]' + 'a:not(.non-scroll)').click(function () {
    var href = $(this).attr("href"),
        target = $(href === "#" || href === "" ? 'html' : href);
    target.velocity("scroll",
    {
        duration: 1200,
        easing: "easeOutCirc"
    })

    .promise().done(function () {
        // run after animation
        // bounce in menu
        if ($(".gnav").hasClass("bounceInRight")){
            hamburger.classList.toggle("active");
            $(".gnav").addClass("bounceOutLeft");
            $(".gnav").removeClass("bounceInRight");
        }
    });;
    return false;
  });
});

function init() {
    // how many pixels are animated upon scroll
    var px_change   = 10;

    // register scroll event handle
    window.addEventListener('scroll', function(e){
        // add class upon scroll reached changepoint
        if ( $(window).scrollTop() > px_change ) {
            $(".scroll_down_pointer").addClass("scroll_up_pointer");

        // minor (delete) class upon scroll reached changepoint
    } else if ( $(".scroll_down_pointer").hasClass("scroll_up_pointer") ) {
            $(".scroll_down_pointer").removeClass("scroll_up_pointer");
        }
    });
}
window.onload = init();
