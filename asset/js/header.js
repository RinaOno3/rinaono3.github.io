document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ ヘッダーのスクリプトを実行");

    // 🔹 PCメニュー（ホバーで開くサブメニュー）
    document.querySelectorAll('.menu-item').forEach(item => {
        const submenuWrapper = item.querySelector('.submenu-wrapper');

        item.addEventListener('mouseover', () => {
            if (submenuWrapper) submenuWrapper.classList.add('active');
        });

        item.addEventListener('mouseout', (event) => {
            if (submenuWrapper && !item.contains(event.relatedTarget)) {
                submenuWrapper.classList.remove('active');
            }
        });
    });

    // ✅ PCヘッダーのスクロールで背景色変更
    window.addEventListener("scroll", function () {
        const pcHeader = document.querySelector(".header-top");
        if (pcHeader) {
            pcHeader.classList.toggle("scrolled", window.scrollY > 50);
        } else {
            console.error("⚠️ ヘッダーが見つかりません！");
        }
    });

    // 🔹 SPメニュー処理
    function loadHeaderJS() {
        console.log("✅ SPメニュー処理を開始");

        const hamburger = document.getElementById("hamburger");
        const nav = document.getElementById("sp-nav");
        const header = document.getElementById("header-top-sp") || document.getElementById("header-sub-sp");
        const headerContainer = header?.querySelector(".header-container");

        if (!hamburger || !nav || !header) {
            console.error("⚠️ SPメニュー要素が見つかりません！");
            return;
        }

        // ハンバーガー開閉
        hamburger.addEventListener("click", () => {
            const isOpen = nav.classList.contains("open");
            nav.classList.toggle("open", !isOpen);
            hamburger.classList.toggle("open", !isOpen);
            header.classList.toggle("open", !isOpen);
            if (headerContainer) headerContainer.classList.toggle("open", !isOpen);
            document.body.style.overflow = !isOpen ? "hidden" : "";
        });

        // ▶ のみで開閉（.accordion-toggle を対象）
        document.querySelectorAll(".accordion-toggle").forEach(toggle => {
            toggle.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();

                const item = toggle.closest(".sp-menu-item");
                item.classList.toggle("open");

                // 他を閉じる
                document.querySelectorAll(".sp-menu-item").forEach(other => {
                    if (other !== item) {
                        other.classList.remove("open");
                        const otherToggle = other.querySelector(".accordion-toggle");
                        if (otherToggle) otherToggle.textContent = "▶";
                    }
                });

                toggle.textContent = item.classList.contains("open") ? "▼" : "▶";
            });
        });

        console.log("✅ SPメニューの設定が完了しました！");
    }

    // ヘッダー読み込み後にJS実行
    setTimeout(loadHeaderJS, 300);
});
