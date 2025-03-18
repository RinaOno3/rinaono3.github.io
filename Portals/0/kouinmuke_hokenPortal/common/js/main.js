;(function () {
	
	'use strict';



	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};

	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var burgerMenu = function() {

		$('.js-fh5co-nav-toggle').on('click', function(event){
			event.preventDefault();
			var $this = $(this);

			if ($('body').hasClass('offcanvas')) {
				$this.removeClass('active');
				$('body').removeClass('offcanvas');	
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');	
			}
		});



	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-aside, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
			
	    	}
	    	
	    }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
			
	    	}
		});

	};



}());







// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){

	// ふわっ

	$('.fadeInTrigger').each(function(){ //fadeInTriggerというクラス名が
		var elemPos = $(this).offset().top-60;//要素より、60px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('animate__animated animate__fadeIn');
		}else{
		$(this).removeClass('animate__animated animate__fadeIn');// 画面外に出たらanimate__animated animate__fadeInというクラス名を外す
		}
		});	
		
	//違う動きパターン
		
	$('.fadeInUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
		var elemPos = $(this).offset().top-60;//要素より、60px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('animate__animated animate__fadeInUp');
		}// 一回だけ処理 //else{  /* ちらつく為コメントアウト */
		//$(this).removeClass('animate__animated animate__fadeInDown');// 画面外に出たらanimate__animated animate__fadeInDownというクラス名を外す
		//}
		});	
	
	//違う動きパターン

	$('.fadeInDownTrigger').each(function(){ //fadeInDownTriggerというクラス名が
		var elemPos = $(this).offset().top-60;//要素より、60px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('animate__animated animate__fadeInDown');
		}// 一回だけ処理 //else{
		//$(this).removeClass('animate__animated animate__fadeInDown');// 画面外に出たらanimate__animated animate__fadeInDownというクラス名を外す
		//}
		});	

	//違う動きパターン

	$('.fadeInLeftTrigger').each(function(){ //fadeInLeftTriggerというクラス名が
		var elemPos = $(this).offset().top-60;//要素より、60px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('animate__animated animate__fadeInLeft');
		}// 一回だけ処理 //else{
		//$(this).removeClass('animate__animated animate__fadeInLeft');// 画面外に出たらanimate__animated animate__fadeInLeftというクラス名を外す
		//}
		});	

	//違う動きパターン

	$('.fadeInRightTrigger').each(function(){ //fadeInRightTriggerというクラス名が
		var elemPos = $(this).offset().top-60;//要素より、60px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('animate__animated animate__fadeInRight');
		}// 一回だけ処理 //else{
		//$(this).removeClass('animate__animated animate__fadeInRight');// 画面外に出たらanimate__animated animate__fadeInRightというクラス名を外す
		//}
		});	
				
	//違う動きパターン

	$('.fadeInBottomLeftTrigger').each(function(){ //fadeInBottomLeftTriggerというクラス名が
		var elemPos = $(this).offset().top-60;//要素より、60px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('animate__animated animate__fadeInBottomLeft');
		}// 一回だけ処理 //else{
		//$(this).removeClass('animate__animated animate__fadeInBottomLeft');// 画面外に出たらanimate__animated animate__fadeInBottomLeftというクラス名を外す
		//}
		});	

	//違う動きパターン

	$('.fadeInBottomRightTrigger').each(function(){ //fadeInBottomRightTriggerというクラス名が
		var elemPos = $(this).offset().top-60;//要素より、60px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('animate__animated animate__fadeInBottomRight');
		}// 一回だけ処理 //else{
		//$(this).removeClass('animate__animated animate__fadeInBottomRight');// 画面外に出たらanimate__animated animate__fadeInBottomRightというクラス名を外す
		//}
		});			
		
	//違う動きパターン
		
	$('.tadaTrigger').each(function(){ //tadaTriggerというクラス名が
		var elemPos = $(this).offset().top-60;//要素より、60px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('animate__animated animate__tada');
		}else{
		$(this).removeClass('animate__animated animate__tada');// 画面外に出たらanimate__animated animate__tadaというクラス名を外す
		}
		});	
										
}

// 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function (){
		fadeAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面をスクロールをしたら動かしたい場合の記述

// ページが読み込まれたらすぐに動かしたい場合の記述
	$(window).on('load', function(){
		fadeAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまでページが読み込まれたらすぐに動かしたい場合の記述




// //スクロールした際の動きを関数でまとめる
// function PageTopAnime() {

//     var scroll = $(window).scrollTop(); //スクロール値を取得
//     if (scroll >= 200){//200pxスクロールしたら
//       $('#page-top').removeClass('DownMove');   // DownMoveというクラス名を除去して
//       $('#page-top').addClass('UpMove');      // UpMoveというクラス名を追加して出現
//     }else{//それ以外は
//       if($('#page-top').hasClass('UpMove')){//UpMoveというクラス名が既に付与されていたら
//         $('#page-top').removeClass('UpMove'); //  UpMoveというクラス名を除去し
//         $('#page-top').addClass('DownMove');  // DownMoveというクラス名を追加して非表示
//       }
//     }
    
//     var wH = window.innerHeight; //画面の高さを取得
//     var footerPos =  $('footer').offset().top; //footerの位置を取得
//     if(scroll+wH >= (footerPos+10)) {
//       var pos = (scroll+wH) - footerPos+10 //スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
//       $('#page-top').css('bottom',pos); //#page-topに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
//     }else{//それ以外は
//       if($('#page-top').hasClass('UpMove')){//UpMoveというクラス名がついていたら
//         $('#page-top').css('bottom','10px');// 下から10pxの位置にページリンクを指定
//       }
//     }
// }

// // 画面をスクロールをしたら動かしたい場合の記述
// $(window).scroll(function () {
//   PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
// });

// // ページが読み込まれたらすぐに動かしたい場合の記述
// $(window).on('load', function () {
//   PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
// });

// // #page-topをクリックした際の設定
// $('#page-top').click(function () {
//     $('body,html').animate({
//         scrollTop: 0//ページトップまでスクロール
//     }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
//     return false;//リンク自体の無効化
// });


