document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".door", { scale: 1, opacity: 1 });
    gsap.set(".fv-text", { 
        opacity: 0,
        scale: 0.5,
        y: 0,
        zIndex: 1,
        pointerEvents: "auto" // 🔹 透明でもクリックできるように最初から auto
    });

    gsap.set(".fv-textbox-btn .c-btn", { 
        pointerEvents: "auto", // 🔹 ボタンだけ強制的に有効にする
        opacity: 0 // 最初は透明に
    });

    gsap.set(".page_top_fv", { opacity: 0.3 });

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".page_top_fv",
            start: "top top",
            end: "+=200%",
            pin: true,
            pinSpacing: false,
            scrub: true,
            onUpdate: (self) => {
                if (self.progress > 0.3) { // 🔹 30% 以上スクロールしたらボタンが少し見える
                    gsap.to(".fv-textbox-btn .c-btn", {
                        opacity: 0.5, // 半透明で少し見える
                        duration: 0.3
                    });
                }
                if (self.progress > 0.5) { // 🔹 50% 以上スクロールで完全表示
                    gsap.to(".fv-textbox-btn .c-btn", {
                        opacity: 1, // ボタンを完全に表示
                        duration: 0.3
                    });
                }
            }
        },
    });

    tl.to(".door", {
        scale: 2,
        opacity: 0,
        duration: 3,
        ease: "power2.inOut",
    })
    .to(".page_top_fv", {
        opacity: 1,
        ease: "power2.inOut",
    }, "<")
    .to(".fv-text", {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 3,
        ease: "power2.out",
    }, "-=1.5")
    .to(".fv-text", {
        zIndex: 10,
    }, "-=0.5");

    ScrollTrigger.create({
        trigger: ".page_top_fv",
        start: "top top",
        end: "+=200%",
        pin: ".sections",
        pinSpacing: true,
    });
});

  
// **ハンバーガー**
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const menuClose = document.getElementById("menuClose");

    if (hamburger && mobileMenu) {
        const toggleMenu = () => {
            mobileMenu.classList.toggle("open");
            hamburger.classList.toggle("active");
        };

        hamburger.addEventListener("click", toggleMenu);

        if (menuClose) {
            menuClose.addEventListener("click", () => {
                mobileMenu.classList.remove("open");
                hamburger.classList.remove("active");
            });
        }
    }
});

// **FAQの開閉トグル**
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        const toggle = item.querySelector(".faq-toggle");

        question?.addEventListener("click", () => {
            item.classList.toggle("open");
            if (item.classList.contains("open")) {
                toggle.textContent = "－"; // 開いているとき
            } else {
                toggle.textContent = "＋"; // 閉じているとき
            }
        });
    });
});



// **横スライド**
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.slide-map-container');
    const barFill = document.querySelector('.slide-bar-fill');
    const bar = document.querySelector('.slide-bar'); // スライドバーの親要素

    const updateSlideBar = () => {
        if (container && barFill) {
            const scrollWidth = container.scrollWidth - container.clientWidth;
            const scrollLeft = container.scrollLeft;
            const scrollPercentage = (scrollLeft / scrollWidth) * 100;
            
            barFill.style.width = `${scrollPercentage}%`;

            // もしスクロールが0%でもバーを表示させる
            if (scrollPercentage > 0) {
                bar.style.opacity = 1; // 表示
            } else {
                bar.style.opacity = 1; // 透明にしない（常に表示）
            }
        }
    };

    // スクロールイベントを監視
    container?.addEventListener('scroll', updateSlideBar);
    
    // 初期状態のバーを表示
    updateSlideBar();
});


// TOPスクロールアニメ
document.addEventListener("DOMContentLoaded", function () {
    const scrollIndicator = document.querySelector(".scroll-indicator");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { // 50px以上スクロールしたら消える
            scrollIndicator.style.opacity = "0";
            scrollIndicator.style.pointerEvents = "none";
        } else {
            scrollIndicator.style.opacity = "1";
            scrollIndicator.style.pointerEvents = "auto";
        }
    });
});

// 画像拡大モーダル
document.addEventListener("DOMContentLoaded", function () {
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
});


