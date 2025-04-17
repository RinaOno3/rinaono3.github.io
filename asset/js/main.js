document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ `main.js` の実行開始");

    const isTopPage = window.location.pathname === "/" || window.location.pathname === "/index.html";

    // ✅ ヘッダーの読み込み
    const headerContainerId = isTopPage ? "header-top" : "header-sub";
    const headerContainer = document.getElementById(headerContainerId);

    if (headerContainer) {
        document.body.classList.add("loading"); // ✅ 追加：ハンバーガー操作無効化

        fetch(`/includes/${isTopPage ? "header-top.html" : "header-sub.html"}?v=${Date.now()}`)
            .then(response => response.text())
            .then(data => {
                headerContainer.innerHTML = data;
                console.log(`✅ ${headerContainerId} のヘッダーを読み込みました！`);

                // ✅ 2重 rAFで初期化後に有効化
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        loadHeaderJS();
                        document.body.classList.remove("loading"); // ✅ 追加：有効化
                    });
                });
            })
            .catch(error => console.error(`❌ ${headerContainerId} のヘッダー読み込みエラー:`, error));
    }

    // ✅ フッターの読み込み
    const footerContainerId = isTopPage ? "footer-top" : "footer-sub";
    const footerContainer = document.getElementById(footerContainerId);

    if (footerContainer) {
        const topScrollDiv = document.createElement("div");
        topScrollDiv.className = "top_scroll";
        topScrollDiv.innerHTML = `<a href="#" class="button_top">TOP</a>`;
        footerContainer.parentNode.insertBefore(topScrollDiv, footerContainer);

        fetch(`/includes/${isTopPage ? "footer-top.html" : "footer-sub.html"}?v=${Date.now()}`)
            .then(response => response.text())
            .then(data => {
                footerContainer.innerHTML = data;
                console.log(`✅ ${footerContainerId} のフッターを読み込みました！`);
                toggleFooterVisibility();
            })
            .catch(error => console.error(`❌ ${footerContainerId} のフッター読み込みエラー:`, error));
    } else {
        console.error(`❌ ${footerContainerId} の挿入先が見つかりません！`);
    }

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

    function toggleFooterVisibility() {
        const footerTop = document.querySelector('.footer-top');
        if (!footerTop) return;

        if (window.innerWidth < 768) {
            footerTop.style.display = "none";
            console.log("✅ SP時に footer-top を非表示にしました");
        } else {
            footerTop.style.display = "";
        }
    }

    toggleFooterVisibility();
    window.addEventListener("resize", toggleFooterVisibility);

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

    document.querySelectorAll(".map-link").forEach(link => {
        link.setAttribute("target", "_blank");
    });

    const buttons = document.querySelectorAll(".accordion-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("active");

            const content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                setTimeout(() => {
                    content.style.maxHeight = "none";
                }, 300);
            }
        });
    });

});

// `#sec_5` をクリックして開く処理
document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ `main.js` の実行開始");

    const sec5Link = document.querySelector('a[href="#sec_5"]');

    if (sec5Link) {
        sec5Link.addEventListener("click", function (event) {
            event.preventDefault();

            const target = document.getElementById("sec_5");

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: "smooth"
                });

                const content = target.querySelector(".accordion-content");
                const button = target.querySelector(".accordion-btn");

                if (content && button && !content.style.maxHeight) {
                    button.classList.add("active");
                    content.style.maxHeight = content.scrollHeight + "px";

                    setTimeout(() => {
                        content.style.maxHeight = "none";
                    }, 300);
                }
            }
        });
    }
});

// MST SVGアニメーション
document.addEventListener("DOMContentLoaded", () => {
    const isSP = window.innerWidth <= 768;

    const pathIds = isSP
        ? ["Path-Mst-1-sp", "Path-Mst-2-sp", "Path-Mst-3-sp", "Path-Mst-4-sp"]
        : ["Path-Mst-1", "Path-Mst-2", "Path-Mst-3", "Path-Mst-4", "Path-Mst-5"];

    const triggerId = isSP ? "svg-sp" : "svg-pc";
    const triggerElement = document.getElementById(triggerId);
    if (!triggerElement) return;

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            start: "top 80%",
            toggleActions: "play none none none",
        }
    });

    const baseSpeed = 500;
    const maxDuration = 3;
    const delayStep = 0.5;

    let startTime = 0;

    pathIds.forEach((id, index) => {
        const path = document.getElementById(id);
        if (!path) return;

        const length = path.getTotalLength();
        let duration = length / baseSpeed;
        if (duration > maxDuration) duration = maxDuration;

        gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
        });

        tl.to(path, {
            strokeDashoffset: 0,
            duration: duration,
            ease: "none"
        }, startTime);

        startTime += delayStep;
    });

    tl.from(".mst-button", {
        opacity: 0,
        y: 20,
        duration: 1.5,
        ease: "power2.out",
        onStart: () => {
            const button = document.querySelector(".mst-button");
            if (button) {
                button.classList.add("glow-on");
            }
        }
    }, startTime + 0.6);

    gsap.from(".fv-img", {
        opacity: 0,
        scale: 1.05,
        duration: 1.3,
        ease: "power2.out"
    });

    gsap.from(".fv-content h1", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out",
        delay: 0.4
    });
});
