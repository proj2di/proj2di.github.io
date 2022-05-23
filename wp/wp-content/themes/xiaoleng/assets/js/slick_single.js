$(window).load(function() {
    $(".single-item").slick({
      autoplay: true,
      autoplaySpeed: 15000, // 最初のスライドの秒数
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      speed: 5000
    })
    $(".single-item").on('beforeChange',function(event, slick, currentSlide, nextSlide){
      if(nextSlide > 0 ) {
        $(".single-item").slick('slickSetOption', 'autoplaySpeed', 500, true)
      }
    })

    $(".bio-item").slick({
      autoplay: true,
      autoplaySpeed: 7000, // 最初のスライドの秒数
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      dots: true,
      speed: 500
    })
    .on("afterChange", function(event, slick, currentSlide, nextSlide) {
      switch (currentSlide){
        case 0:
          // 1枚目のスライド
          $(this).slick("slickSetOption", "autoplaySpeed", 10000);
          break;
        default:
          // その他のスライド
          $(this).slick("slickSetOption", "autoplaySpeed", 7000);
          break;
      }
    });
});
