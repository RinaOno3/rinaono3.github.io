/*
スタイルシート ブラウザ判別
(c) T.C.I. 2005
xsmall.cssが基準CSS
*/

if (navigator.userAgent.indexOf("Win")!=-1) {
	if (navigator.appName.indexOf("Netscape")!=-1) {
		document.write('<link rel="alternate stylesheet" href="css/base_small_s.css" type="text/css" title="文字サイズ小"><link rel="stylesheet" href="css/base_small_m.css" type="text/css" title="文字サイズ中"><link rel="alternate stylesheet" href="css/base_small_l.css" type="text/css" title="文字サイズ大">');}
	else {document.write('<link rel="alternate stylesheet" href="css/base_xsmall_s.css" type="text/css" title="文字サイズ小"><link rel="stylesheet" href="css/base_xsmall_m.css" type="text/css" title="文字サイズ中"><link rel="alternate stylesheet" href="css/base_xsmall_l.css" type="text/css" title="文字サイズ大">');}
} else {
	if (navigator.appVersion.indexOf("Safari/")!=-1) {
		document.write('<link rel="alternate stylesheet" href="css/base_small_s.css" type="text/css" title="文字サイズ小"><link rel="stylesheet" href="css/base_small_m.css" type="text/css" title="文字サイズ中"><link rel="alternate stylesheet" href="css/base_small_l.css" type="text/css" title="文字サイズ大"><style type="text/css"><!--input{font-size:smaller;}--></style>');}
	else if (navigator.appName.indexOf("Netscape")!=-1) {
		document.write('<link rel="alternate stylesheet" href="css/base_medium_s.css" type="text/css" title="文字サイズ小"><link rel="stylesheet" href="css/base_medium_m.css" type="text/css" title="文字サイズ中"><link rel="alternate stylesheet" href="css/base_medium_l.css" type="text/css" title="文字サイズ大">');}
	else {document.write('<link rel="alternate stylesheet" href="css/base_xsmall_s.css" type="text/css" title="文字サイズ小"><link rel="stylesheet" href="css/base_xsmall_m.css" type="text/css" title="文字サイズ中"><link rel="alternate stylesheet" href="css/base_xsmall_l.css" type="text/css" title="文字サイズ大">');}
}

/* https window set */
function newwin(str) {
	x = screen.width;
	y = screen.height;
	if(x > 799)
	{y = screen.height * 0.7;x =940;}
	var alignment;
	if (document.layers) {
	alignment = 'screenX=0,screenY=0,';
	} else {
	alignment = 'left=0,top=0,';
	}
	popup=window.open(str,"pop0", alignment + "width=" +x+ ",height=" +y+ ",resizable=yes,scrollbars=yes,status=yes,menubar=yes,location=yes");
}

/* qab_static popup window set*/
/*
function popWinFixed(){
    window.open ("","pop","toolbar=no,locaton=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=470,height=400").focus();
}
function popWinFixed2(){
    window.open ("","pop3","toolbar=no,locaton=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=470,height=400").focus();
}

function popWinResizable(){
    if(window.self.name.valueOf() != "pop2"){
        window.open ("","pop2","toolbar=no,locaton=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=620,height=700").focus();
    }
}

function popWinResizable2(){
    if(window.self.name.valueOf() != "pop4"){
        window.open ("","pop4","toolbar=no,locaton=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=620,height=700").focus();
    }
}
*/
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
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