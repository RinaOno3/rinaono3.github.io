/* ================================

infoNet headFix.js   ver1.2.3

================================ */
;
(function($) {
	'use strict';
	$.fn.headFix = function(options) {
		var opt = $.extend({
			mode: 'pc',
			headerMargin: true,
			targetMargin: 'body',
			cssMargin: 'padding-top',
			fixMode: 'default',
			headScrollX: '#header > *',
			scrollBefore: function() {
				return;
			},
			scrollAfter: function() {
				return;
			}
		}, options);

		// internal variable
		var $this = $(this);
		var this_coordinate;
		var ini_pos_top = $this.position().top;
		var pos_now = $(window).scrollTop();
		var pos_log = $(window).scrollTop();
		var winScrollTop;

		if (!$('body').hasClass('editMode') && !$('body').hasClass('adminMode')) {
			// grant margin CSS
			if (opt.headerMargin) {
				$(opt.targetMargin).css(opt.cssMargin, $this.outerHeight());
			}
			// mode judgment
			switch (opt.fixMode) {
				case 'default':
					$this.addClass('headFixed').css({
						'position': 'fixed',
						'top': '0'
					});
					break;
				case 'scrollFix':
					this_coordinate = $this.position().top;
					$this.css({
						'position': 'absolute',
						'top': ''
					});
					break;
				case 'scrollActive':
					if (ini_pos_top > 0) {
						$this.css({
							'position': 'absolute'
						});
					} else {
						$this.addClass('headFixed').css({
							'position': 'fixed'
						});
					}
					break;
			}

			// header event that occurs when scrolling
			$(window).on('scroll load', function(event) {
				switch (opt.fixMode) {
					case 'default':
						if ($(window).scrollTop() > 0 && !$this.hasClass('scrolled')) {
							$this.addClass('scrolled');
							opt.scrollAfter();
						} else if ($(window).scrollTop() == 0 && $this.hasClass('scrolled')) {
							$this.removeClass('scrolled');
							opt.scrollBefore();
						}
						break;
					case 'scrollFix':
						if ($(window).scrollTop() >= this_coordinate && !$this.hasClass('scrolled')) {
							$this.addClass('scrolled headFixed').css({
								'position': 'fixed',
								'top': 0
							});
							opt.scrollAfter();
						} else if ($(window).scrollTop() <= this_coordinate && $this.hasClass('scrolled')) {
							$this.removeClass('scrolled headFixed').css({
								'position': 'absolute',
								'top': ''
							});
							opt.scrollBefore();
						}
						break;
					case 'scrollActive':
						if (event.type == 'scroll') {
							winScrollTop = $(this).scrollTop();
							if (winScrollTop >= $this.innerHeight() - ini_pos_top) {
								if (ini_pos_top >= winScrollTop) {
									$this.css({
										'position': 'absolute'
									}).removeClass('headFixed hide');
									opt.scrollBefore();
								} else {
									$this.css({
										'position': 'fixed'
									}).addClass('headFixed');
									opt.scrollAfter();
									pos_now = winScrollTop;
									if (pos_now > pos_log) {
										$this.removeClass('scrollUp').addClass('scrollDown');
									} else if (pos_now < pos_log) {
										$this.removeClass('scrollDown').addClass('scrollUp');
									} else {
										$this.removeClass('scrollDown scrollUp');
									}
									pos_log = pos_now;
								}
							} else {
								if (ini_pos_top > 0) {
									$this.css({
										'position': 'absolute'
									}).removeClass('headFixed scrollDown scrollUp');
									opt.scrollBefore();
								}
							}
						} else if (event.type == 'load') {
							$this.removeClass('scrollDown scrollUp');
						}
						break;
				}
				// header scroll x
				if (opt.headScrollX != false) {
					var position = $(opt.headScrollX).css('position') == 'fixed' || $(opt.headScrollX).css('position') == 'absolute' ? true : false;
					if (position) {
						if ($this.hasClass('headFixed') && opt.mode == 'pc') {
							$(opt.headScrollX).css({
								'left': -$(window).scrollLeft() + 'px'
							});
						} else {
							$(opt.headScrollX).css({
								'left': ''
							});
						}
					} else {
						if ($this.hasClass('headFixed') && opt.mode == 'pc') {
							$(opt.headScrollX).css({
								'position': 'relative',
								'left': -$(window).scrollLeft() + 'px'
							});
						} else {
							$(opt.headScrollX).css({
								'position': '',
								'left': ''
							});
						}
					}
				}
			});
		}

		// external event
		return {
			marginSetting: function(target, css, height) {
				if (target) {
					height = $(height);
				} else {
					target = opt.targetMargin;
					css = opt.cssMargin;
					height = $this;
				}
				$(target).css(css, height.outerHeight());
			},
			loadSetting_activeScroll: function(target, css, height) {
				$this.removeClass('hide');
			}
		};


	};
})(jQuery);