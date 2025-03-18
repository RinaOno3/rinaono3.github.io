// JavaScript Document

jQuery(function($) {
	/* index_お知らせ */
	$(".acoSwitch").on('click', function(){
		$('.acoContents').stop().slideToggle('fast');
		$(this).toggleClass("active");
	});
	
	/* 204_リスク・ニーズから選ぶ */
	$(".riskBtn").on('click', function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass("active").next('.acoContents').stop().slideUp('fast');
		}
		else{
			$('.acoContents').stop().slideUp('fast');
			$(".riskBtn").removeClass("active");
			$(this).addClass("active").next('.acoContents').stop().slideDown('fast');
		}
	});
	/* common（205_商品から選ぶ、209_Webでお手続き） */
	$(".acoTitle").on('click', function(){
		$(this).toggleClass("active").next('.acoContents').stop().slideToggle('fast');
	});
	
	/* 223_営業拠点（PC） */
	$(".pcMode .mapList h4").on('click', function(){
		$(this).toggleClass("active").next('.pcMode .mapContent').stop().slideToggle('fast');
	});
	/* 223_営業拠点（SP） */
	$(".spMode .mapList h3").on('click', function(){
		$(this).toggleClass("active").next('.spMode .spContent').stop().slideToggle('fast');
	});
	
	/* 262_保険詳細のご案内 - 2（SP） */
	$(".spMode .compensationWrap.insuranceDetail .contBoxWrap .contBox .ttlArea").on('click', function(){
		$(this).toggleClass("active").next('.spMode .compensationWrap.insuranceDetail .contBoxWrap .contBox .contBoxInner').stop().slideToggle('fast');
	});
	
	/* 276_事故時の連絡先・保険金（給付金）の請求流れ */
	$(".stepContentsWrap .stepTitle").on('click', function(){
		$(this).toggleClass("active").next('.stepContentsWrap .stepContents').stop().slideToggle('fast');
	});
});