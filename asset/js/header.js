document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ ヘッダーのスクリプトを実行");

    // 🔹 PCメニュー（ホバーで開くサブメニュー）
    document.querySelectorAll('.menu-item').forEach(item => {
        const submenuWrapper = item.querySelector('.submenu-wrapper');

        item.addEventListener('mouseover', () => {
            if (submenuWrapper) {
                submenuWrapper.classList.add('active');
            }
        });

        item.addEventListener('mouseout', (event) => {
            if (submenuWrapper && !item.contains(event.relatedTarget)) {
                submenuWrapper.classList.remove('active');
            }
        });
    });

    // ✅ PCヘッダーのスクロール時の背景色変更処理
    window.addEventListener("scroll", function () {
        const pcHeader = document.querySelector(".header-top"); // ヘッダーを取得
        if (pcHeader) {
            if (window.scrollY > 50) { 
                pcHeader.classList.add("scrolled"); // スクロールしたら色を濃くする
            } else {
                pcHeader.classList.remove("scrolled"); // 上に戻ったら元の色に戻す
            }
        } else {
            console.error("⚠️ ヘッダーが見つかりません！クラス名を確認してください！");
        }
    });

    // 🔹 SPメニュー（ハンバーガーメニュー＋アコーディオン）
    function loadHeaderJS() {
        console.log("✅ SPメニュー処理を開始");

        // SP専用の要素を取得
        const hamburger = document.getElementById("hamburger");
        const nav = document.getElementById("sp-nav");
        const header = document.getElementById("header-top-sp") || document.getElementById("header-sub-sp");
        const headerContainer = header ? header.querySelector(".header-container") : null;
        const spMenuItems = document.querySelectorAll(".sp-menu-item");

        if (!hamburger || !nav || !header) {
            console.error("⚠️ SPメニューの要素が見つかりません！HTMLのIDやクラスを確認してください！");
            return;
        }

        // 🔹 SPハンバーガーメニューの開閉処理
        function toggleMenu(open) {
            nav.classList.toggle("open", open);
            document.body.style.overflow = open ? "hidden" : "";
            hamburger.classList.toggle("open", open);
            header.classList.toggle("open", open);
            if (headerContainer) headerContainer.classList.toggle("open", open);
        }

        // ハンバーガーメニュークリックで開閉
        hamburger.addEventListener("click", () => {
            const isOpen = nav.classList.contains("open");
            toggleMenu(!isOpen);
        });

        // 🔹 SPメニューのアコーディオン開閉
        spMenuItems.forEach((item) => {
            const menuLink = item.querySelector(".menu-link");
            if (menuLink) {
                menuLink.addEventListener("click", (e) => {
                    e.preventDefault();
                    item.classList.toggle("open");

                    // 他のメニューを閉じる（単一開閉仕様）
                    spMenuItems.forEach((otherItem) => {
                        if (otherItem !== item) {
                            otherItem.classList.remove("open");
                        }
                    });
                });
            }
        });

        console.log("✅ SPメニューの設定が完了しました！");
    }

    // ✅ `fetch` のヘッダー読み込み後に実行
    setTimeout(loadHeaderJS, 300);
});

