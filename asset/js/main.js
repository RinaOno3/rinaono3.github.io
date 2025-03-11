document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ `main.js` の実行開始");

    const isTopPage = window.location.pathname === "/" || window.location.pathname === "/index.html";

    // ✅ ヘッダーの読み込み
    const headerContainerId = isTopPage ? "header-top" : "header-sub";
    const headerContainer = document.getElementById(headerContainerId);

    if (headerContainer) {
        fetch(`/includes/${isTopPage ? "header-top.html" : "header-sub.html"}?v=${Date.now()}`)
            .then(response => response.text())
            .then(data => {
                headerContainer.innerHTML = data;
                console.log(`✅ ${headerContainerId} のヘッダーを読み込みました！`);
                setTimeout(loadHeaderJS, 300); // ヘッダー適用後に `header.js` を実行
            })
            .catch(error => console.error(`❌ ${headerContainerId} のヘッダー読み込みエラー:`, error));
    } else {
        console.error(`❌ ${headerContainerId} の挿入先が見つかりません！`);
    }

    // ✅ フッターの読み込み
    const footerContainerId = isTopPage ? "footer-top" : "footer-sub";
    const footerContainer = document.getElementById(footerContainerId);

    if (footerContainer) {
        fetch(`/includes/${isTopPage ? "footer-top.html" : "footer-sub.html"}?v=${Date.now()}`)
            .then(response => response.text())
            .then(data => {
                footerContainer.innerHTML = data;
                console.log(`✅ ${footerContainerId} のフッターを読み込みました！`);
                toggleFooterVisibility(); // フッター読み込み後に適用
            })
            .catch(error => console.error(`❌ ${footerContainerId} のフッター読み込みエラー:`, error));
    } else {
        console.error(`❌ ${footerContainerId} の挿入先が見つかりません！`);
    }

    // 🔹 `scrollTop` の処理
    const scrollTopBtn = document.getElementById("scroll-top");

    if (scrollTopBtn) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add("show-scroll");
            } else {
                scrollTopBtn.classList.remove("show-scroll");
            }
        });

        scrollTopBtn.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // ✅ SP時に `footer-top` を非表示にする処理
    function toggleFooterVisibility() {
        const footerTop = document.querySelector('.footer-top');
        if (!footerTop) return;

        if (window.innerWidth < 768) {
            footerTop.style.display = "none";
            console.log("✅ SP時に footer-top を非表示にしました");
        } else {
            footerTop.style.display = ""; // PC時はデフォルトの表示
        }
    }

    // 初回実行
    toggleFooterVisibility();

    // ウィンドウリサイズ時にも適用
    window.addEventListener("resize", toggleFooterVisibility);

    // 画像拡大モーダル
    const expandButtons = document.querySelectorAll(".expand-button");
    const closeButtons = document.querySelectorAll(".close-modal");

    expandButtons.forEach(button => {
        button.addEventListener("click", function () {
            const modalId = this.getAttribute("data-modal");
            document.getElementById(modalId).style.display = "flex";
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", function () {
            this.closest(".image-modal").style.display = "none";
        });
    });

    document.querySelectorAll(".image-modal").forEach(modal => {
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });

    // MAPリンクを新しいタブで開く
    document.querySelectorAll(".map-link").forEach(link => {
        link.setAttribute("target", "_blank");
    });

    // アコーディオン
    const buttons = document.querySelectorAll(".accordion-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("active"); // 「＋」→「−」を切り替え

            const content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null; // 閉じる
            } else {
                content.style.maxHeight = content.scrollHeight + "px"; // 開く
                setTimeout(() => {
                    content.style.maxHeight = "none"; // 高さ制限を解除
                }, 300);
            }
        });
    });

});
