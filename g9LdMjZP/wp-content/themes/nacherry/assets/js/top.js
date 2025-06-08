const swiper = new Swiper('#js-movie-slide', {
  loop: true,
  pagination: {
    el: '.js-movie-pagination',
		clickable: true,
  },
  navigation: {
    nextEl: '.js-movie-next',
    prevEl: '.js-movie-prev',
  },
});

// モーダル
jQuery(".js-movie-open").on("click", function () {
	jQuery( jQuery(this).data("target") ).addClass("is-active");
});

jQuery(".js-movie-close").on("click", function () {
	console.log( jQuery(this).data("target") );
	jQuery( jQuery(this).data("target") ).removeClass("is-active");
});

jQuery(function () {
	jQuery(".js-movie-close").on("click", function () {
		const id = jQuery(this).data("id");
		videoControl("pauseVideo", id);
	});

	function videoControl(action, id) {
		var playerWindow = jQuery('.js-top-movie' + id)[0].contentWindow;
		playerWindow.postMessage('{"event":"command","func":"' + action + '","args":""}', '*');
	}
});
