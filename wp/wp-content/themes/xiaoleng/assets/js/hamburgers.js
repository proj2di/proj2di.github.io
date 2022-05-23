// global menu
$(".menu_trigger").click(function(){
    $(".menu_trigger").toggleClass('active')
    $('.gnav').toggleClass('active')
    $('.gnav').attr('aria-expanded', $('.gnav').hasClass('active'))
});

function init() {
    // スクロールして何ピクセルでアニメーションさせるか
    var px_change   = 10;

    // スクロールのイベントハンドラを登録
    window.addEventListener('scroll', function(e){
        if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
            // 変化するポイントまでスクロールしたらクラスを追加
            if ( $(window).scrollTop() > px_change ) {
                $(".menu_trigger").addClass("menu-trigger_act");

            // 変化するポイント以前であればクラスを削除
        } else if ( $(".menu_trigger").hasClass("menu_trigger") ) {
                $(".menu_trigger").removeClass("menu-trigger_act");
            }
            if ( $(window).scrollTop() > px_change ) {
                $(".scroll_down_txt").addClass("scroll_down_txt_blue");
            } else if ( $(".scroll_down_txt").hasClass("scroll_down_txt") ) {
                    $(".scroll_down_txt").removeClass("scroll_down_txt_blue");
            }

            if ( $(window).scrollTop() > px_change ) {
                $(".scroll_down_pointer").addClass("scroll_down_pointer_blue");
            } else if ($(".scroll_down_pointer").hasClass("scroll_down_pointer_blue") ) {
                $(".scroll_down_pointer").removeClass("scroll_down_pointer_blue");
            }
        }
    });
}
window.onload = init();


var isIPhoneX = window.devicePixelRatio === 3 && (window.screen.width === 375 || window.screen.height === 375) && /iPhone/.test(window.navigator.userAgent);

$(function() {
    //翻訳した場合の処理(翻訳バーの高さだけ下にずらす)
    translateBarAttachment();
    //翻訳した場合の処理(翻訳バーの高さだけ下にずらす)
    $(".-translate").on("DOMSubtreeModified", function() {
        translateBarAttachment();
	});
});

//翻訳した場合の処理(翻訳バーの高さだけ下にずらす)
function translateBarAttachment() {
    var $navbar = $(".menu_trigger");
    var $shop = $(".official_shop_link");
    var $body = $("body");
    if($body.offset().top > 0){
        if(isIPhoneX){
            $navbar.css({
                "top": "80px"
            }); //翻訳バーの高さだけ下にずらす
            $shop.css({
                "top": "80px"
            }); //翻訳バーの高さだけ下にずらす
        }else{
            $navbar.css({
                "top": "50px"
            }); //翻訳バーの高さだけ下にずらす
            $shop.css({
                "top": "50px"
            }); //翻訳バーの高さだけ下にずらす
        }
    } else {
        $navbar.css({
            "top": "20px"
        }); //翻訳バーの高さだけ下にずらすのを元に戻す
        $shop.css({
            "top": "20px"
        }); //翻訳バーの高さだけ下にずらすのを元に戻す
    }
}
