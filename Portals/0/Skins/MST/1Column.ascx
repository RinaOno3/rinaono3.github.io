<%@ Control language="vb" CodeBehind="~/admin/Skins/skin.vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="dnn" TagName="LOGO" Src="~/Admin/Skins/Logo.ascx" %>
<%@ Register TagPrefix="dnn" TagName="SEOMENUV2" Src="~/DesktopModules/SEOMenuV2SkinObject/SEOMenuV2SkinObject.ascx" %>
<%@ Register TagPrefix="dnn" TagName="BREADCRUMB" Src="~/Admin/Skins/BreadCrumb.ascx" %>
<%@ Register TagPrefix="dnn" TagName="PAGETOP" Src="~/controls/PageTopSkinObject/PageTopSkinObject.ascx" %>
<%@ Register TagPrefix="dnn" TagName="COPYRIGHT" Src="~/Admin/Skins/Copyright.ascx" %>
<script>jQuery.noConflict();</script>
<script type="text/javascript" src="/Portals/0/js/fontsize/fontsize.js"></script>
<script type="text/javascript" src="/Portals/0/js/to-top/to-top.js"></script>
<script type="text/javascript" src="/Portals/0/js/smoothScroll/smoothScroll.js"></script>
<script type="text/javascript" src="/Portals/0/js/matchHeight/jquery.matchHeight.js"></script>
<script type="text/javascript" src="/Portals/0/js/matchHeight/matchHeight_common.js"></script>
<script type="text/javascript" src="/Portals/0/js/bxslider/jquery.bxslider.min.js"></script>
<script type="text/javascript" src="/Portals/0/js/common/accordion.js"></script>
<script type="text/javascript" src="/Portals/0/js/common/sp_Nav.js"></script>
<script type="text/javascript"><!--
(function($){
	$(document).ready( function(){

		$(".hMenuBtn").click(function(event){
			event.stopPropagation();
			$(".HeadSmtNavPane").slideToggle(150);
			$(".hMenuBtn").toggleClass("menuOpen");
		});
	});
})(jQuery)
//--></script>

<div id="skin1Column" class="skinWrapper skinSub">
    <header id="headBody">
        <div class="headLogo">
            <p class="logo"><dnn:LOGO runat="server" id="dnnLOGO" /></p>
        </div>
        <div class="headWrap">
            <div class="headTopArea">
                <ul id="fontSizer">
                    <li class="fontsizeS defaultFont">標準</li>
                    <li class="fontsizeM">大きく</li>
                </ul>
                <div class="HeadTopPane" id="HeadTopPane" runat="server"></div>
            </div>
            <div class="headArea">
                <div class="HeadPane" id="HeadPane" runat="server"></div>
                <p class="hMenuBtn spArea">MENU</p>
                <div class="HeadSmtNavPane" id="HeadSmtNavPane" runat="server"></div>
            </div>
        </div>
    </header>
    <nav id="gNav"><dnn:SEOMENUV2 runat="server" id="dnnSEOMENUV2" Range="-1" SubPageDepth="1" ClassName="tokenMenu" PageName="P" /></nav>
    <div id="breadcrumbBody">
        <div class="breadcrumb"><dnn:BREADCRUMB runat="server" id="dnnBREADCRUMB" Separator=" > " CssClass="breadcrumbItem" RootLevel="-2" UseTitle="True" /></div>
    </div>
    <div class="TopPane" id="TopPane" runat="server"></div>
    <main id="mainBody">
        <div id="contentBody">
            <div id="contentWrap">
                <header class="PagetitlePane" id="PagetitlePane" runat="server"></header>
                <div class="ContentPane" id="ContentPane" runat="server"></div>
            </div>
        </div>
        <div class="BottomTopPane" id="BottomTopPane" runat="server"></div>
        <div class="BottomPane" id="BottomPane" runat="server"></div>
        <p class="pagetop"><dnn:PAGETOP runat="server" id="dnnPAGETOP" Text="ページトップへ" Anchor="headBody" /></p>
    </main>
    <footer id="footBody">
        <div class="FootTopPane" id="FootTopPane" runat="server"></div>
        <div class="footWrap">
            <div class="FootPane" id="FootPane" runat="server"></div>
        </div>
        <div class="FootSmtNavPane" id="FootSmtNavPane" runat="server"></div>
        <div class="FootBottomPane" id="FootBottomPane" runat="server"></div>
        <p class="copyright"><dnn:COPYRIGHT runat="server" id="dnnCOPYRIGHT" CssClass="copyrightCss" /></p>
    </footer>
</div>

