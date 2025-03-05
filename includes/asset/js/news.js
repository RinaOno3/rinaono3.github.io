document.addEventListener("DOMContentLoaded", function () {
    const tabList = document.querySelector(".tab-list");
    const tabItems = document.querySelectorAll(".tab-item");
    const tabContents = document.querySelectorAll(".tab-content");

    tabItems.forEach(item => {
        item.addEventListener("click", function () {
            // タブの開閉をトグル
            tabList.classList.toggle("open");

            // すべてのタブから active を削除
            tabItems.forEach(tab => tab.classList.remove("active"));

            // クリックされたタブに active を付与
            this.classList.add("active");

            // 対応するコンテンツを取得
            const targetId = this.getAttribute("data-target");

            // すべてのコンテンツを非表示
            tabContents.forEach(content => content.classList.remove("active"));

            // クリックされたタブに対応するコンテンツを表示
            document.getElementById(targetId).classList.add("active");
        });
    });

    // タブ以外の場所をクリックしたらタブ一覧を閉じる
    document.addEventListener("click", function (event) {
        if (!tabList.contains(event.target)) {
            tabList.classList.remove("open");
        }
    });
});
