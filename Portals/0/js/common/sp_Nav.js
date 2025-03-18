jQuery(function($) {
		var animSpd = 300;
	// バーガーメニュー内の開閉
	function toggleUnderLink (obj) {
		obj.next('ul').slideToggle(animSpd);
        obj.toggleClass('active');
		return false;
	}	
	// 下層を持つ親階層のみ、開閉イベントバインド
	$('.sp_Nav > ul > li a').each(function() {
		if ( $('+ul', this).length > 0 ) {
			$(this).on('click', function(e){
				toggleUnderLink($(this));				
				e.preventDefault();
			}).addClass('toggleSwitch');
		}
	});	
});