gsap.registerPlugin(ScrollTrigger);

const isSP = window.innerWidth < 768;

// ** トリガー共通 **
const pageTitle = document.querySelector(".page-title");

// === 🌳 Sec1（PC/SP） ===
if (isSP) {
    // 🌱 SP用の要素
    const treePath = document.querySelector("#sp-tree-Path");
    const diamonds = document.querySelectorAll("#sp-tree-svg polygon");
    const sec1Paths = [
        document.querySelector("#sp-tree-Path"),
        document.querySelector("#sp-sec1Path2"),
        document.querySelector("#sp-sec1Path3"),
        document.querySelector("#sp-sec1Path4"),
        document.querySelector("#sp-sec1Path5"),
    ];

    const treeLength = treePath.getTotalLength();
    gsap.set(treePath, { strokeDasharray: treeLength, strokeDashoffset: treeLength * 0.99 });
    gsap.set(diamonds, { opacity: 0, scale: 0.5, transformOrigin: "50% 50%" });
    sec1Paths.forEach(path => {
        if (!path) return;
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    });

    let sec1Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: pageTitle,
            start: "top top",
            end: "+=50%",
            scrub: 8,
        }
    });

    sec1Timeline.to(treePath, { strokeDashoffset: 0, ease: "none", duration: 3 });
    sec1Timeline.to(diamonds, { opacity: 1, scale: 1, stagger: 0.3, ease: "power2.out" }, "-=2");
    sec1Paths.forEach(path => {
        if (!path) return;
        sec1Timeline.to(path, { strokeDashoffset: 0, ease: "none", duration: 2 });
    });

    // === 🌟 Sec2（SP専用） ===
    const spSection2 = document.querySelector("#sec2 .sp-only svg");
    const spSec2Paths = [
        document.querySelector("#sp-sec2Path1"),
        document.querySelector("#sp-sec2Path2"),
        document.querySelector("#sp-sec2Path3"),
        document.querySelector("#sp-sec2Path4"),
        document.querySelector("#sp-sec2Path5"),
        document.querySelector("#sp-sec2Path6"),
    ];

    spSec2Paths.forEach(path => {
        if (!path) return;
        const length = path.getTotalLength();
        gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
        });
    });

    const spSec2Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: spSection2,
            start: "top top",
            end: "+=50%",
            scrub: 8,
        }
    });

    spSec2Paths.forEach(path => {
        if (!path) return;
        spSec2Timeline.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            duration: 2,
        });
    });

} else {
    // 🌳 PC用の Sec1
    const treePath = document.querySelector("#tree-Path");
    const diamonds = document.querySelectorAll("#tree-svg polygon");
    const sec1Paths = [
        document.querySelector("#sec1Path1"),
        document.querySelector("#sec1Path2"),
        document.querySelector("#sec1Path3"),
        document.querySelector("#sec1Path4"),
        document.querySelector("#sec1Path5"),
    ];

    const treeLength = treePath.getTotalLength();
    gsap.set(treePath, { strokeDasharray: treeLength, strokeDashoffset: treeLength * 0.99 });
    gsap.set(diamonds, { opacity: 0, scale: 0.5, transformOrigin: "50% 50%" });
    sec1Paths.forEach(path => {
        if (!path) return;
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    });

    let sec1Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: pageTitle,
            start: "top top",
            end: "+=50%",
            scrub: 8,
        }
    });

    sec1Timeline.to(treePath, { strokeDashoffset: 0, ease: "none", duration: 3 });
    sec1Timeline.to(diamonds, { opacity: 1, scale: 1, stagger: 0.3, ease: "power2.out" }, "-=2");
    sec1Paths.forEach(path => {
        if (!path) return;
        sec1Timeline.to(path, { strokeDashoffset: 0, ease: "none", duration: 2 });
    });

    // === 🌲 Sec2（PC専用） ===
    const pcSection2 = document.querySelector("#sec2 .pc-only svg");
    const pcSec2Paths = [
        document.querySelector("#sec2Path1"),
        document.querySelector("#sec2Path2"),
        document.querySelector("#sec2Path3"),
        document.querySelector("#sec2Path4"),
        document.querySelector("#sec2Path5"),
        document.querySelector("#sec2Path6"),
    ];

    pcSec2Paths.forEach(path => {
        if (!path) return;
        const length = path.getTotalLength();
        gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
        });
    });

    const pcSec2Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: pcSection2,
            start: "top top",
            end: "+=50%",
            scrub: 8,
        }
    });

    pcSec2Paths.forEach(path => {
        if (!path) return;
        pcSec2Timeline.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            duration: 2,
        });
    });
}
