
//////////////// �u���E�U�`�F�b�N�i���C���[�p�j ////////////////


// Mac��Win�EIE��Netscape��Netscape6 �̃`�F�b�N
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



//////////////// �ʃE�B���h�E����n ////////////////
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
// ��ʂ����
function gohome() {
    if (confirm("�{��ʂ���A�u����ۂQ�S�z�[���y�[�W�v�ɖ߂�܂��B��낵���ł����H")) {
        location.href = "gohome.html";
    }
}

// ���E�B���h�E����A�e�E�B���h�E�Ƀt�H�[�J�X���Z�b�g
function goBack() {
	// �u����v����
    qabWindowClose();
    // �e��ʂ�����ꍇ�A������Ƀt�H�[�J�X���Z�b�g�B
    if (opener != null) {
      opener.focus();
    }
}


//////////////// ��ʑ���n ////////////////

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

// �u�����N

var errblinkstat = 0;

var blinkflg;
var blinkstat;


// �\���^��\���̐؂�ւ��i��Ƀu�����N���g�p�j
// �u���E�U�ʂɊ֐���p�ӂ���JSP�Ő؂�ւ��ɁH
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

// �u�����N�i�\���^��\���̘A���؂�ւ��j
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

// �u�����N�Ԋu�̃Z�b�g
function setBlink(){
    window.setInterval("blink()",700);
}

// �G���[���b�Z�[�W�̃u�����N
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


// �G���[���b�Z�[�W�̃u�����N�Ԋu�Z�b�g
function setErrBlink(){
        window.setInterval("errBlink()",500);
}

// �{�^���̉B���i��x�����h�~�j
function hideButton(){
        changeVis("buttonformgo",false);
        changeVis("buttonformback",false);
    blinkflg=true;
}

//////////////// ���̑� ////////////////

//�󃊃��N
function doNothing(){}

// �w�肳�ꂽ�I�u�W�F�N�g�Ƀt�H�[�J�X���Z�b�g����B
function setFocus(obj) {
    obj.focus();
}

// �}�b�N�h�d�ł͒��ڈ�������J���Ȃ��̂ł�������g��
function printOnMacIE() {
    alert("Command + P �L�[�������Ă�������");
}

//////////////// ���C���[�֘A ////////////////

// ���C���� HTML������ // Opera 7�ȏ�
function writeDivHTML(div,html){ 
	if (document.layers) { // NN4
		div.document.open();
		div.document.write(html);
		div.document.close();
	} else if (typeof div.innerHTML!="undefined") { // IE, Mozilla, Opera
		div.innerHTML=html;
	}
}

//���C�������烌�C���I�u�W�F�N�g�𓾂� 
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
 * QAB�ł́u����v�{�^���p�t�@���N�V�����ł��B
 * �g�p�u���E�U�ɂ�蓮���؂�ւ��܂��B
 *------------------------------------------*/
function qabWindowClose() {
	// �u���E�U�ɂ�蓮���ς���
	var userAgent = navigator.userAgent;
	if (userAgent.indexOf("Safari") > -1) {
		// Safari�̏ꍇ
		if (top.name == "") {
			// �E�B���h�E�ɖ��O��ݒ�
			top.name = "closeWindow";
			window.open('', 'closeWindow');
		}
	} else {
		// ���̑��̃u���E�U
		// (���ɏ����͍s��Ȃ�)
	}
	top.close();
}

/*
���[���I�[�o�[
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