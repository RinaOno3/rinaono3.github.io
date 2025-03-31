gsap.registerPlugin(ScrollTrigger);

const isSP = window.innerWidth < 768;

// ** トリガー共通 **
const pageTitle = document.querySelector(".page-title");

if (isSP) {
  // === 🌱 SP用 Sec1（順番に1本ずつ描画） ===
  const treePath = document.querySelector("#sp-tree-Path");
  const diamonds = document.querySelectorAll("#sp-tree-svg polygon");
  const sec1Paths = [
    document.querySelector("#sp-tree-Path"),
    document.querySelector("#sp-sec1Path2"),
    document.querySelector("#sp-sec1Path3"),
   
  ];

  const treeLength = treePath.getTotalLength();
  gsap.set(treePath, {
    strokeDasharray: treeLength,
    strokeDashoffset: treeLength * 0.99
  });
  gsap.set(diamonds, {
    opacity: 0,
    scale: 0.5,
    transformOrigin: "50% 50%"
  });

  sec1Paths.forEach((path) => {
    if (!path) return;
    const length = path.getTotalLength();
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length
    });
  });

  const sec1Timeline = gsap.timeline({
    scrollTrigger: {
      trigger: pageTitle,
      start: "top top",
      end: "+=150%",
      scrub: 1.5,
    },
  });

  sec1Timeline.to(treePath, {
    strokeDashoffset: 0,
    ease: "none",
    duration: 3,
  });

  sec1Timeline.to(diamonds, {
    opacity: 1,
    scale: 1,
    stagger: 0.3,
    ease: "power2.out"
  }, "-=2");

  sec1Paths.slice(1).forEach((path, index) => {
    if (!path) return;
    sec1Timeline.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      duration: 3.5,
    }, 3.5 + index * 3.6);
  });

  // === 🌟 SP用 Sec2（順番に描画） ===
  const spSection2 = document.querySelector("#sec2 .sp-only svg");
  const spSec2Paths = [
    document.querySelector("#sp-sec2Path1"),
    document.querySelector("#sp-sec2Path2"),
    document.querySelector("#sp-sec2Path3"),
    document.querySelector("#sp-sec2Path4"),
    document.querySelector("#sp-sec2Path5"),
    document.querySelector("#sp-sec2Path6"),
    document.querySelector("#sp-sec2Path7"),
    document.querySelector("#sp-sec2Path8"),
  ];


  spSec2Paths.forEach((path, index) => {
    if (!path) {
      console.warn(`SP Sec2: path ${index + 1} が見つかりませんでした`);
      return;
    }
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
      scrub: 5,
    },
  });

  spSec2Paths.forEach((path, index) => {
    if (!path) return;
    spSec2Timeline.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      duration: 3.2,
    }, index * 3.2);
  });

} else {
  // === 🌲 PC用 Sec1（順番に描画） ===
  const treePath = document.querySelector("#tree-Path");
  const diamonds = document.querySelectorAll("#tree-svg polygon");
  const sec1Paths = [
    document.querySelector("#tree-Path"),
    document.querySelector("#sec1Path1"),
    document.querySelector("#sec1Path2"),
    document.querySelector("#sec1Path3"),
    document.querySelector("#sec1Path4"),
    document.querySelector("#sec1Path5"),
  ];

  const treeLength = treePath.getTotalLength();
  gsap.set(treePath, {
    strokeDasharray: treeLength,
    strokeDashoffset: treeLength * 0.99
  });
  gsap.set(diamonds, {
    opacity: 0,
    scale: 0.5,
    transformOrigin: "50% 50%"
  });

  sec1Paths.forEach((path) => {
    if (!path) return;
    const length = path.getTotalLength();
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length
    });
  });

  const sec1Timeline = gsap.timeline({
    scrollTrigger: {
      trigger: pageTitle,
      start: "top top",
      end: "+=150%",
      scrub: 2,
    },
  });

  sec1Timeline.to(treePath, {
    strokeDashoffset: 0,
    ease: "none",
    duration: 3,
  });

  sec1Timeline.to(diamonds, {
    opacity: 1,
    scale: 1,
    stagger: 0.3,
    ease: "power2.out"
  }, "-=2");

  sec1Paths.slice(1).forEach((path, index) => {
    if (!path) return;
    sec1Timeline.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      duration: 3,
    }, 3 + index * 3.4);
  });

  // === ✨ PC用 Sec2（順番に描画） ===
  const pcSection2 = document.querySelector("#sec2 .pc-only svg");
  const pcSec2Paths = [
    document.querySelector("#sec2Path1"),
    document.querySelector("#sec2Path2"),
    document.querySelector("#sec2Path3"),
    document.querySelector("#sec2Path4"),
    document.querySelector("#sec2Path5"),
    document.querySelector("#sec2Path6"),
    document.querySelector("#sec2Path7"),
  ];

  pcSec2Paths.forEach((path, index) => {
    if (!path) {
      console.warn(`PC Sec2: path ${index + 1} が見つかりませんでした`);
      return;
    }
    const length = path.getTotalLength();
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });
  });

  const pcSec2Timeline = gsap.timeline({
    scrollTrigger: {
      trigger: pcSection2,
      start: "top 15%",
      end: "+=150%",
      scrub: true,
    },
  });

  pcSec2Paths.forEach((path, index) => {
    if (!path) return;
    pcSec2Timeline.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      duration: 4,
    }, index * 4.0);
  });
}
