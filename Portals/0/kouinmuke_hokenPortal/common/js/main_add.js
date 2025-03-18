//スクロールした際の動きを関数でまとめる
function PageTopAnime() {

    var scroll = $(window).scrollTop(); //スクロール値を取得
    if (scroll >= 200){//200pxスクロールしたら
      $('#floating-area').removeClass('DownMove');   // DownMoveというクラス名を除去して
      $('#floating-area').addClass('UpMove');      // UpMoveというクラス名を追加して出現
    }else{//それ以外は
      if($('#floating-area').hasClass('UpMove')){//UpMoveというクラス名が既に付与されていたら
        $('#floating-area').removeClass('UpMove'); //  UpMoveというクラス名を除去し
        $('#floating-area').addClass('DownMove');  // DownMoveというクラス名を追加して非表示
      }
    }

    var wH = window.innerHeight; //画面の高さを取得
    var footerPos =  $('footer').offset().top; //footerの位置を取得
    if(scroll+wH >= (footerPos+10)) {
      var pos = (scroll+wH) - footerPos+10 //スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
      $('#floating-area').css('bottom',pos); //#floating-areaに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
    }else{//それ以外は
      if($('#floating-area').hasClass('UpMove')){//UpMoveというクラス名がついていたら
        $('#floating-area').css('bottom','10px');// 下から10pxの位置にページリンクを指定
      }
    }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    if(!$('#floating-area').hasClass('isClosed')){
        PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
    }
  });

  // ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
    $('#floating-area .close').on('click',function(){
      $('#floating-area').removeClass();
      $('#floating-area').addClass(['isClosed']);
    })
  });