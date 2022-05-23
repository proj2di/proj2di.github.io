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
        // アニメーション完了後に実行される
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
    // スクロールして何ピクセルでアニメーションさせるか
    var px_change   = 10;

    // スクロールのイベントハンドラを登録
    window.addEventListener('scroll', function(e){
        // 変化するポイントまでスクロールしたらクラスを追加
        if ( $(window).scrollTop() > px_change ) {
            $(".scroll_down_pointer").addClass("scroll_up_pointer");

        // 変化するポイント以前であればクラスを削除
    } else if ( $(".scroll_down_pointer").hasClass("scroll_up_pointer") ) {
            $(".scroll_down_pointer").removeClass("scroll_up_pointer");
        }
    });
}
window.onload = init();
