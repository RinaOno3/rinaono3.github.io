<%@ Control language="vb" CodeBehind="~/admin/Skins/skin.vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="dnn" TagName="PAGETOP" Src="~/controls/PageTopSkinObject/PageTopSkinObject.ascx" %>
<%@ Register TagPrefix="dnn" TagName="COPYRIGHT" Src="~/Admin/Skins/Copyright.ascx" %>
<script>jQuery.noConflict();</script>
<script type="text/javascript" src="/Portals/0/js/to-top/to-top_btmu.js"></script>
<script type="text/javascript" src="/Portals/0/js/smoothScroll/smoothScroll.js"></script>
<script type="text/javascript" src="/Portals/0/js/matchHeight/jquery.matchHeight.js"></script>
<script type="text/javascript" src="/Portals/0/js/common/accordion.js"></script>
<script type="text/javascript"><!--
(function($){
	$(document).ready( function(){
		$(".hMenuBtn").click(function(event){
			event.stopPropagation();
			$(".NavBtmuPane").slideToggle(150);
			$(".hMenuBtn").toggleClass("menuOpen");
		});
	});
})(jQuery)
//--></script>

<div id="skinIndex" class="skinWrapper">
    <div id="skinWrapBody">
        <header id="headBody">
            <h1 class="logo"><img src="/Portals/0/Skins/MST-btmu/images/logo.png" alt="エムエスティ保険サービス株式会社 損害保険・生命保険代理店" /></h1>
            <div class="symbolPane" id="symbolPane" runat="server"></div>
            <p class="hMenuBtn spArea">MENU</p>
            <nav class="NavBtmuPane" id="NavBtmuPane" runat="server"></nav>
            <aside class="SideBtmuPane" id="SideBtmuPane" runat="server"></aside>
            <aside class="SideBottomBtmuPane" id="SideBottomBtmuPane" runat="server"></aside>
        </header>
        <main id="mainBody">
            <div id="contentTopWrap">
                <div class="TopLeftPane" id="TopLeftPane" runat="server"></div>
                <div class="TopRightPane" id="TopRightPane" runat="server"></div>
                <div class="TopBottomPane" id="TopBottomPane" runat="server"></div>
            </div>
            <div id="contentWrap">
                <div class="ContentPane" id="ContentPane" runat="server"></div>
                <div class="NavSmtBtmuPane" id="NavSmtBtmuPane" runat="server"></div>
                <div class="FootSmtBtmuPane" id="FootSmtBtmuPane" runat="server"></div>
            </div>
        </main>
    </div>
    <footer id="footBody">
        <p class="pagetop"><dnn:PAGETOP runat="server" id="dnnPAGETOP" Text="ページトップへ" Anchor="headBody" /></p>
        <div class="FootBtmuPane" id="FootBtmuPane" runat="server"></div>
        <p class="copyright"><dnn:COPYRIGHT runat="server" id="dnnCOPYRIGHT" CssClass="copyrightCss" /></p>
    </footer>
</div>

