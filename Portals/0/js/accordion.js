(function($) {
	$(window).load(function() {
		$(".accordion-content").hide();
		$(".accordion-head").click(function () {
			$(this).toggleClass("accordion-open").next(".accordion-content").slideToggle();
		});
	});
})(jQuery);
