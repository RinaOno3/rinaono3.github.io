gsap.registerPlugin(ScrollTrigger);

const isSP = window.innerWidth < 768;
const vh = window.innerHeight;
let scrollEndValue;

if (vh <= 750) {
  scrollEndValue = '+=200%';
} else if (vh <= 900) {
  scrollEndValue = '+=500%';
} else {
  scrollEndValue = '+=410%';
}

// 共通関数: パスの初期セットアップ
function setupPaths(paths) {
  paths.forEach(path => {
    const length = path.getTotalLength();
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });
  });
}

// 共通関数: ダイヤの初期セットアップ
function setupDiamonds(diamonds) {
  gsap.set(diamonds, {
    opacity: 0,
    scale: 0.5,
    transformOrigin: "50% 50%",
  });
}

// 共通関数: アニメーション登録
function animatePaths(timeline, paths, diamonds) {
  paths.forEach((path, i) => {
    const id = path.id;
    let duration = 1;

    if (id.includes("sec2Path1") || id.includes("sec2Path2")) {
      duration = 1.2;
    }

    timeline.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      duration: duration
    }, ">");

    if (i === 0 && diamonds.length > 0) {
      timeline.to(diamonds, {
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        ease: "power2.out"
      }, "<");
    }
  });
}

const pageTitle = document.querySelector(".page-title");

if (!isSP) {
  const sec1Paths = [
    "#tree-Path",
    "#sec1Path1",
    "#sec1Path2",
    "#sec1Path3",
    "#sec1Path4",
    "#sec1Path5"
  ].map(sel => document.querySelector(sel)).filter(Boolean);

  const pcSec2Paths = [
    "#sec2Path1",
    "#sec2Path2",
    "#sec2Path3",
    "#sec2Path4",
    "#sec2Path5",
    "#sec2Path6",
    "#sec2Path7"
  ].map(sel => document.querySelector(sel)).filter(Boolean);

  const allPaths = sec1Paths.concat(pcSec2Paths);
  const diamonds = document.querySelectorAll("#tree-svg polygon");

  setupPaths(allPaths);
  setupDiamonds(diamonds);

  const mainTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: pageTitle,
      start: "top top",
      end: scrollEndValue,
      scrub: true,
      markers: false
    }
  });

  animatePaths(mainTimeline, allPaths, diamonds);

} else {
  const sec1Paths = [
    "#sp-tree-Path",
    "#sp-sec1Path2",
    "#sp-sec1Path3"
  ].map(sel => document.querySelector(sel)).filter(Boolean);

  const sec2Paths = [
    "#sp-sec2Path1",
    "#sp-sec2Path2",
    "#sp-sec2Path3",
    "#sp-sec2Path4",
    "#sp-sec2Path5",
    "#sp-sec2Path6",
    "#sp-sec2Path7",
    "#sp-sec2Path8"
  ].map(sel => document.querySelector(sel)).filter(Boolean);

  const allPaths = sec1Paths.concat(sec2Paths);

  const diamonds = [];
  for (let i = 1; i <= 10; i++) {
    const el = document.querySelector(`#sp-diamond${i}`);
    if (el) diamonds.push(el);
  }

  setupPaths(allPaths);
  setupDiamonds(diamonds);

  const spTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: pageTitle,
      start: "top top",
      end: () => {
        return document.body.scrollHeight - window.innerHeight;
      },
      scrub: true,
      markers: false
    }
    
  });

  animatePaths(spTimeline, allPaths, diamonds);
}


window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});

// 👇これを追加
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});