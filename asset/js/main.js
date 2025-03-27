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

// リンククリック時にセクション五を開く
document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ `main.js` の実行開始");

    // `#sec_5` へのリンクをクリック時にアコーディオンを開く
    const sec5Link = document.querySelector('a[href="#sec_5"]');
    
    if (sec5Link) {
        sec5Link.addEventListener("click", function (event) {
            event.preventDefault(); // 通常のリンク動作を防ぐ

            const target = document.getElementById("sec_5"); // ターゲットのアコーディオン要素を取得

            if (target) {
                // スムーズスクロール
                window.scrollTo({
                    top: target.offsetTop - 100, // ヘッダー分調整
                    behavior: "smooth"
                });

                // アコーディオンのコンテンツを取得
                const content = target.querySelector(".accordion-content");
                const button = target.querySelector(".accordion-btn");

                // アコーディオンが閉じている場合は開く
                if (content && button && !content.style.maxHeight) {
                    button.classList.add("active"); // 「＋」→「−」に切り替え
                    content.style.maxHeight = content.scrollHeight + "px";

                    setTimeout(() => {
                        content.style.maxHeight = "none"; // 高さ制限を解除
                    }, 300);
                }
            }
        });
    }
});

// MST SVGアニメーション
document.addEventListener("DOMContentLoaded", () => {
    const isSP = window.innerWidth <= 768;
  
    // パスID一覧（SP or PC）
    const pathIds = isSP
      ? ["Path-Mst-1-sp", "Path-Mst-2-sp", "Path-Mst-3-sp", "Path-Mst-4-sp"]
      : ["Path-Mst-1", "Path-Mst-2", "Path-Mst-3", "Path-Mst-4", "Path-Mst-5", "Path-Mst-6"];
  
    // トリガーとなるSVG要素
    const triggerId = isSP ? "svg-sp" : "svg-pc";
    const triggerElement = document.getElementById(triggerId);
  
    if (!triggerElement) return;
  
    // GSAPプラグイン登録
    gsap.registerPlugin(ScrollTrigger);
  
    // タイムライン作成
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  
    // 各パスにアニメーション追加
    pathIds.forEach((id, index) => {
      const path = document.getElementById(id);
      if (!path) return;
  
      const length = path.getTotalLength();
  
      // 初期状態をセット
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length
      });
  
      // 順番にアニメーション追加
      tl.to(path, {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: "power2.out"
      }, index * 0.2);
    });
  
    // ✅ ボタンをふわっと出現させるアニメ
    gsap.from(".mst-button", {
      scrollTrigger: {
        trigger: ".mst-button",
        start: "top 90%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 20,
      duration: 1.8,
      ease: "power2.out"
    });
  });
  