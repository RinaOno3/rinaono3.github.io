<%@ Control language="vb" CodeBehind="~/admin/Skins/skin.vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="dnn" TagName="BREADCRUMB" Src="~/Admin/Skins/BreadCrumb.ascx" %>
<%@ Register TagPrefix="dnn" TagName="PAGETOP" Src="~/controls/PageTopSkinObject/PageTopSkinObject.ascx" %>
<%@ Register TagPrefix="dnn" TagName="COPYRIGHT" Src="~/Admin/Skins/Copyright.ascx" %>
<script>jQuery.noConflict();</script>
<script type="text/javascript" src="/Portals/0/js/to-top/to-top.js"></script>
<script type="text/javascript" src="/Portals/0/js/smoothScroll/smoothScroll.js"></script>
<script type="text/javascript" src="/Portals/0/js/common/accordion.js"></script>
<script type="text/javascript"><!--
(function($){
	$(document).ready( function(){

		$(".hMenuBtn").click(function(event){
			event.stopPropagation();
			$(".HeadSmtNavEnPane").slideToggle(150);
			$(".hMenuBtn").toggleClass("menuOpen");
		});
	});
})(jQuery)
//--></script>

<div id="skin1Column" class="skinWrapper skinSub en">
    <header id="headBody">
        <div class="headLogo">
            <p class="logo"><a href="/english/tabid/246/Default.aspx"><img src="<%= SkinPath %>images/logo.png" alt="MST Insurance Service Co.,Ltd."/></a></p>
        </div>
        <div class="headWrap">
            <div class="HeadEnPane" id="HeadEnPane" runat="server"></div>
            <p class="hMenuBtn spArea">MENU</p>
            <div class="HeadSmtNavEnPane" id="HeadSmtNavEnPane" runat="server"></div>
        </div>
    </header>
    <nav class="NavPane" id="NavPane" runat="server"></nav>
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
            <div id="sideWrap">
                <aside class="SidePane" id="SidePane" runat="server"></aside>
                <aside class="SideBottomPane" id="SideBottomPane" runat="server"></aside>
            </div>
        </div>
        <p class="pagetop"><dnn:PAGETOP runat="server" id="dnnPAGETOP" Text="ページトップへ" Anchor="headBody" /></p>
    </main>
    <footer id="footBody">
        <div class="FootEnPane" id="FootEnPane" runat="server"></div>
        <p class="copyright"><dnn:COPYRIGHT runat="server" id="dnnCOPYRIGHT" CssClass="copyrightCss" /></p>
    </footer>
</div>

