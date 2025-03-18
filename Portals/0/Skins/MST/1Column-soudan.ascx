<%@ Control language="vb" CodeBehind="~/admin/Skins/skin.vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="dnn" TagName="LOGO" Src="~/Admin/Skins/Logo.ascx" %>
<script>jQuery.noConflict();</script>

<div id="skin1ColumnSoudan">
    <header id="headBody">
        <div class="headLogo">
            <p class="logo"><dnn:LOGO runat="server" id="dnnLOGO" /></p>
        </div>
    </header>
    <main id="mainBody">
        <div id="contentBody">
            <div id="contentWrap">
                <div class="ContentPane" id="ContentPane" runat="server"></div>
            </div>
        </div>
    </main>
</div>

