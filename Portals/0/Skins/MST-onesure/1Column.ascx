<%@ Control language="vb" CodeBehind="~/admin/Skins/skin.vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="dnn" TagName="HTML" Src="~/controls/HTMLSkinObject/HTMLSkinObject.ascx" %>
<script>jQuery.noConflict();</script>
<script src="/Portals/0/js/smoothScroll/smoothScroll.js"></script>
<script src="/Portals/0/js/headFix/headFix.js"></script>
<script type="text/javascript" src="/Portals/0/js/matchHeight/jquery.matchHeight.js"></script>
<script src="/Portals/0/js/common_onesure.js"></script>

<div id="skin">
    <div id="blockskip"><dnn:HTML runat="server" id="dnnHTML" Text="<a href=&quot;#main&quot;>本文へ</a>" /></div>
    <header id="header">
        <div class="headTop">
            <div class="inner">
                <div class="left">
                    <div class="LogoOnesurePane" id="LogoOnesurePane" runat="server"></div>
                </div>
                <div class="right">
                    <div class="HeadOnesurePane" id="HeadOnesurePane" runat="server"></div>
                </div>
            </div>
        </div>
    </header>
    <div id="main">
        <div class="contentTop">
            <div class="inner">
                <div class="TopPane" id="TopPane" runat="server"></div>
            </div>
        </div>
        <div class="contentMiddle">
            <main class="mainArea">
                <div class="pagetitleArea">
                    <div class="inner">
                        <header class="PagetitlePane" id="PagetitlePane" runat="server"></header>
                    </div>
                </div>
                <div class="inner">
                    <div class="ContentPane" id="ContentPane" runat="server"></div>
                </div>
            </main>
        </div>
        <div class="contentBottom">
            <div class="inner">
                <div class="ContentBottomPane" id="ContentBottomPane" runat="server"></div>
            </div>
        </div>
    </div>
    <footer id="footer">
            <div class="inner">
                <div class="FootOnesurePane" id="FootOnesurePane" runat="server"></div>
            </div>
    </footer>
</div>

