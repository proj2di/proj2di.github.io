// ローディング処理
$(window).on('load', function () {
	$("#loading").removeClass("is-active");
	$(".p-main-visual-image").addClass("is-animation");
})

// ハンバーガメニュー
$(".p-header__button,.p-drawer-content__button").on('click', function () {
	if ($(".p-drawer-content").hasClass("is-active")) {
		$(".p-drawer-content").removeClass("is-active");
	} else {
		$(".p-drawer-content").addClass("is-active");
	}
})

// モーダル
$(".js-movie-open").on("click", function () {
	$(".p-movie-pop").addClass("is-active");
});
$(".js-movie-close").on("click", function () {
	$(".p-movie-pop").removeClass("is-active");
});

// 背景処理
var rellax = new Rellax(".rellax", {
	breakpoints: [576, 768, 1201]
});

// スクロールイン
$(window).scroll(function () {
	$(".c-section-heading").each(function () {
		var imgPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll > imgPos - windowHeight + windowHeight / 5) {
			$(this).addClass("is-animation");
		}
	});
});

jQuery(function () {
	$('#js-youtube').YTPlayer();
});

jQuery(function () {
	jQuery(".js-movie-close").on("click", function () {
		videoControl("pauseVideo");
	});

	function videoControl(action) {
		var playerWindow = jQuery('#js-top-movie')[0].contentWindow;
		playerWindow.postMessage('{"event":"command","func":"' + action + '","args":""}', '*');
	}
});

// ホバー処理
$('.p-header__link a').on({
	'mouseenter': function () {
		if (!$(this).hasClass("is-current")) {
			$(".p-header__link a.is-current").addClass("current-disable");
			$(this).addClass("current-show")
			$(this).addClass("current-anime")
			setTimeout(() => {
				$(this).removeClass("current-anime")
			}, 100);
		}
	},
	'mouseleave': function () {
		$(".p-header__link a.is-current").removeClass("current-disable");
		$(this).removeClass("current-show")
	}
});
