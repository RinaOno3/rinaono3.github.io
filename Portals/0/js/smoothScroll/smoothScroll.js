// ver1.1

;(function($){

	$.isEnabled = function(){
	    var o = this, callee = arguments.callee;
		if(!(o instanceof callee)) return new callee(o,arguments);
		var body  = $('body'),isHide = body.is(':hidden');
		!isHide || body.show();
		for(var i in o) if(typeof o[i] == 'function') callee[i] = o[i]();
		!isHide || body.hide();
	};

	$.isEnabled.prototype.htmlScroll = function(){
		var html = $('html'), top = html.scrollTop();
		var el = $('<div/>').height(10000).prependTo('body');
		html.scrollTop(10000);
		var rs = !!html.scrollTop();
		html.scrollTop(top);
		el.remove();
		return rs;
	};
	
	
	$.isEnabled();
	
	$(function() {
		// 要素指定
		$('a[href^="#"]:not([href="#"])').click(function() {
			// スピード設定
			var speed = 400;
			var href = $(this).attr('href');
			var target = $(href == '#' || href == '' ? 'html' : href);
			if (!target[0]) {
				if($('a[name="' + href.substr(1) + '"]')[0]) {
					target = $('a[name="' + href.substr(1) + '"]');
				}
				else {
					return false;
				}
			}
			
			var position = target.offset().top;
			// easing swing or linear
			$($.isEnabled.htmlScroll ? 'html' : 'body').animate({
				scrollTop:position
			}, speed, 'linear');
	
			return false;
		});
	});

})(jQuery);
