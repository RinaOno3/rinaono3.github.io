(function($){

	$(function(){
		fontsizeChange();
	});

	function fontsizeChange(){

		// 初期フォントサイズ設定
		//（HTMLと同じ並び順で0から数値を設定。
		//  スキン内の ul.Fontsizer li で"defaultFont"クラスを指定していた場合、そちらを優先）
		var defaultSize = 0;

		// 変更不要
		var changeArea = $("body");					//フォントサイズ変更エリア
		var btnArea = $("#fontSizer");				//フォントサイズ変更ボタンエリア
		var changeBtn = btnArea.find("li");			//フォントサイズ変更ボタン
		var fontSize = [];							//フォントサイズ定義名（スキンで用意したliの個数分作成）
		var activeClass = "active";					//フォントサイズ変更ボタンのアクティブ時のクラス名
		var defaultClass = "defaultFont";			//フォントサイズ変更ボタンのデフォルト要素のクラス名
		var cookieExpires = 30;						//cookie保存期間
		var sizeLen = $("#fontSizer li").length;

		//liの数だけ配列用意
		for(var i=0; i<sizeLen; i++){
			fontSize.push(i+1);
		}

		//初期表示、判定１
		var findIdx = -1;
		if(nowCookie()){
			// cookieにより設定
			for(var i=0; i<sizeLen; i++){
				if(nowCookie()==fontSize[i]){
					// index確定
					findIdx = i;
					break;
				}
			}
		}

		// 初期表示、判定２
		if(findIdx==-1){
			// defaultFontクラスにより設定
			for(var i=0; i<sizeLen; i++){
				var elm = changeBtn.eq(i);
				if(elm.hasClass(defaultClass)){
					// index確定
					findIdx = i;
					break;
				}
			}
		}

		// 初期表示、判定３
		if(findIdx==-1){
			// 13行目のdefaultSizeを反映
			if(isFinite(defaultSize)){
				findIdx = defaultSize;
			} else {
				// 設定がおかしかったら左端にする
				findIdx = 0;
			}
		}

		// 表示反映
		cookieSet(findIdx);
		sizeChange();
		var elm = changeBtn.eq(findIdx);
		elm.addClass(activeClass);

		// 表示後、defaultFontクラス削除
		changeBtn.not(this).removeClass(defaultClass);

		//現在cookie確認
		function nowCookie(){
			return $.cookie("fontsize");
		}

		//フォントサイズ設定
		function sizeChange(){
			var nCookie = $.cookie("fontsize");
			var nClass = "fontSize"+nCookie;

			// Bodyのクラス変更
			changeArea.attr('class', nClass);
		}

		//cookie設定
		function cookieSet(index){
			$.cookie("fontsize",fontSize[index],{path:'/',expires:cookieExpires});
		}

		//クリック時
		changeBtn.click(function(){
			var index = changeBtn.index(this);
			var self = $(this);
			cookieSet(index);
			sizeChange();
			if(!self.hasClass(activeClass)){
				changeBtn.not(this).removeClass(activeClass);
				self.addClass(activeClass);
			}
			//matchHeightを実行
			if ($('.list_2line li,.list_3line li')[0]) {
				$('.list_2line li,.list_3line li').matchHeight();
			}
			if ($('.strongList li')[0]) {
				$('.strongList li').matchHeight();
			}
		});

	}

})(jQuery);