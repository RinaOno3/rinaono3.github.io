
//////////////// ブラウザチェック（レイヤー用） ////////////////


// Mac＆Win・IE＆Netscape＆Netscape6 のチェック
var br_name;
var Browser=navigator.appName;

if(Browser=="Microsoft Internet Explorer"){
    br_name = "ie";
}else{
    br_name = "nn";
}
if(navigator.userAgent.indexOf("Netscape6")!=-1){
    br_name = "nn6";
}
var ie=!!document.all
var nn=!!document.layers
var gk=(navigator.userAgent.match(/Gecko/i)!=null)



//////////////// 別ウィンドウ操作系 ////////////////
/*
function popWinFixed(){
    window.open ("","pop","toolbar=no,locaton=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=470,height=400").focus();
}

function popWinResizable(){
    if(window.self.name.valueOf() != "pop2"){
        window.open ("","pop2","toolbar=no,locaton=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=740,height=700").focus();
    }
}

function popWinResizable2(width, height){
    if(window.self.name.valueOf() != "pop2"){
        window.open ("","pop2","toolbar=no,locaton=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=" + width + ",height=" + height).focus();
    }
}

function popWinResizable3(){
    if(window.self.name.valueOf() != "pop2"){
        window.open ("","pop2","toolbar=no,locaton=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=620,height=700").focus();
    }
}
*/
// 画面を閉じる
function gohome() {
    if (confirm("本画面を閉じ、「そんぽ２４ホームページ」に戻ります。よろしいですか？")) {
        location.href = "gohome.html";
    }
}

// 自ウィンドウを閉じ、親ウィンドウにフォーカスをセット
function goBack() {
	// 「閉じる」処理
    qabWindowClose();
    // 親画面がある場合、そちらにフォーカスをセット。
    if (opener != null) {
      opener.focus();
    }
}


//////////////// 画面操作系 ////////////////

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

var hideFlag = 'true';
function hideMenu(id){
    if(hideFlag == 'true'){
        if(br_name == "ie"){
            document.all[id].style.visibility = "hidden";
        }else if(br_name == "nn"){
            document[id].visibility = 'hidden';
        }else if(br_name == "nn6"){
            document.getElementById(id).style.visibility = "hidden";
        }
    }
}

// ブリンク

var errblinkstat = 0;

var blinkflg;
var blinkstat;


// 表示／非表示の切り替え（主にブリンク時使用）
// ブラウザ別に関数を用意してJSPで切り替えに？
function changeVis(id,visible){
  if(ie){
    if ( document.all(id) ){
        document.all(id).style.visibility=(visible?"visible":"hidden")
    }
  }
  if(nn){
    if ( document.layers[id] ){
        document.layers[id].visibility=(visible?"show":"hide")
    }
  }
  if(gk){
    if (document.getElementById(id)) {
      document.getElementById(id).style.visibility=(visible?"visible":"hidden")
    }
  }
}

// ブリンク（表示／非表示の連続切り替え）
function blink(){
        if (blinkflg){
        if (blinkstat){
                changeVis("waitmsg",false);
        blinkstat=false;
        }else{
                changeVis("waitmsg",true);
        blinkstat="true";
        }
        }
}

// ブリンク間隔のセット
function setBlink(){
    window.setInterval("blink()",700);
}

// エラーメッセージのブリンク
function errBlink(){
    switch (errblinkstat){
        case 0:
            changeVis("errmsg", true);
            errblinkstat++;
            break;
        case 1:
        case 2:
            errblinkstat++;
            break;
        default:
            changeVis("errmsg", false);
            errblinkstat=0;
            break;
    }
}


// エラーメッセージのブリンク間隔セット
function setErrBlink(){
        window.setInterval("errBlink()",500);
}

// ボタンの隠蔽（二度押し防止）
function hideButton(){
        changeVis("buttonformgo",false);
        changeVis("buttonformback",false);
    blinkflg=true;
}

//////////////// その他 ////////////////

//空リンク
function doNothing(){}

// 指定されたオブジェクトにフォーカスをセットする。
function setFocus(obj) {
    obj.focus();
}

// マックＩＥでは直接印刷窓が開けないのでこちらを使う
function printOnMacIE() {
    alert("Command + P キーを押してください");
}

//////////////// レイヤー関連 ////////////////

// レイヤに HTMLを書く // Opera 7以上
function writeDivHTML(div,html){ 
	if (document.layers) { // NN4
		div.document.open();
		div.document.write(html);
		div.document.close();
	} else if (typeof div.innerHTML!="undefined") { // IE, Mozilla, Opera
		div.innerHTML=html;
	}
}

//レイヤ名からレイヤオブジェクトを得る 
function getDivFromName(nm) {
	// IE5+, Mozilla, Opera
	if (document.getElementById) {
		return document.getElementById(nm);
	}
	if (document.all) {
		return document.all(nm); // IE4
	}
	if (document.layers) { // NN4
		var s='';
		for (var i=1; i<arguments.length; i++) {
			s+='document.layers.'+arguments[i]+'.';
		}
		return eval(s+'document.layers.'+nm);
	}
	return null;
}

/*------------------------------------------
 * QABでの「閉じる」ボタン用ファンクションです。
 * 使用ブラウザにより動作を切り替えます。
 *------------------------------------------*/
function qabWindowClose() {
	// ブラウザにより動作を変える
	var userAgent = navigator.userAgent;
	if (userAgent.indexOf("Safari") > -1) {
		// Safariの場合
		if (top.name == "") {
			// ウィンドウに名前を設定
			top.name = "closeWindow";
			window.open('', 'closeWindow');
		}
	} else {
		// その他のブラウザ
		// (特に処理は行わない)
	}
	top.close();
}

/*
ロールオーバー
*/
function smartRollover() {
	if(document.getElementsByTagName) {
		var images = document.getElementsByTagName("img");
		for(var i=0; i < images.length; i++) {
			if(images[i].getAttribute("src").match("_off."))
			{
				images[i].onmouseover = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
				}
				images[i].onmouseout = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
				}
			}
		}
	}
}