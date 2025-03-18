(function($){
	$(document).ready(function(){
		
		var pageTopLink = $('.pagetop a');
							 
		pageTopLink.hide();
		
		$(function(){
							 
			$(window).scroll(function(){
				if ($(this).scrollTop() > 100) {
					pageTopLink.stop().fadeIn();
				} else {
					pageTopLink.stop().fadeOut();
				}
			});
			
			$(window).bind("scroll", function(){
				// ドキュメントの高さ
				scrollHeight = $(document).height();
				// ウィンドウの高さ + スクロールした高さ = 現在のトップからの位置
				scrollPosition = $(window).height() + $(window).scrollTop();
				// フッターの高さ
				footHeight = $("#footBody").innerHeight();
				footHeight = footHeight + 10;
				
				// 現在の下からの位置が、フッターの高さに入った場合
				if( scrollHeight - scrollPosition <= footHeight ){
					
					pageTopLink.css({
						"position":"absolute",
						"bottom": "30px"
					});
					
				} else {
					
					pageTopLink.css({
						"position":"fixed",
						"bottom": "20px"
					});
					
				}				
			});			
		});			
	});	
})(jQuery);