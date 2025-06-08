// ローディング処理
jQuery(window).on('load', function () {
	jQuery("#loading").removeClass("is-active");
	jQuery(".p-main-visual-image").addClass("is-animation");
})

// ハンバーガメニュー
jQuery(".p-header__button,.p-drawer-content__button").on('click', function () {
	if (jQuery(".p-drawer-content").hasClass("is-active")) {
		jQuery(".p-drawer-content").removeClass("is-active");
	} else {
		jQuery(".p-drawer-content").addClass("is-active");
	}
})

// 背景処理
if (!DEVICE.isSafariPc) {
	var rellax = new Rellax(".rellax", {
		breakpoints: [576, 768, 1201]
	});
}


// スクロールイン
jQuery(window).scroll(function () {
	jQuery(".c-section-heading").each(function () {
		var imgPos = jQuery(this).offset().top;
		var scroll = jQuery(window).scrollTop();
		var windowHeight = jQuery(window).height();
		if (scroll > imgPos - windowHeight + windowHeight / 5) {
			jQuery(this).addClass("is-animation");
		}
	});
});

// ホバー処理
jQuery('.p-header__link a').on({
	'mouseenter': function () {
		if (!jQuery(this).hasClass("is-current")) {
			jQuery(".p-header__link a.is-current").addClass("current-disable");
			jQuery(this).addClass("current-show")
			jQuery(this).addClass("current-anime")
			setTimeout(() => {
				jQuery(this).removeClass("current-anime")
			}, 100);
		}
	},
	'mouseleave': function () {
		jQuery(".p-header__link a.is-current").removeClass("current-disable");
		jQuery(this).removeClass("current-show")
	}
});
