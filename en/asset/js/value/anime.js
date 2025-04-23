gsap.registerPlugin(ScrollTrigger);

const isSP = window.innerWidth < 768;
const vh = window.innerHeight;
const footer = document.querySelector(".footer");
const footerTop = footer.offsetTop;
let scrollEndValuePx;

if (vh <= 750) {
  scrollEndValuePx = vh * 14;
} else if (vh <= 900) {
  scrollEndValuePx = vh * 12;
} else {
  scrollEndValuePx = vh * 10;
}

if (!isSP) {
  if (vh <= 670) {
    scrollEndValuePx = Math.min(scrollEndValuePx, footerTop - 800);
  } else if (vh <= 750) {
    scrollEndValuePx = Math.min(scrollEndValuePx, footerTop - 700);
  } else if (vh <= 900) {
    scrollEndValuePx = Math.min(scrollEndValuePx, footerTop - 550);
  } else {
    scrollEndValuePx = Math.min(scrollEndValuePx, footerTop - 700);
  }
} else {
  if (vh <= 670) {
    scrollEndValuePx = Math.min(scrollEndValuePx, footerTop - 430);
  } else if (vh <= 600) {
    scrollEndValuePx = Math.min(scrollEndValuePx, footerTop - 700);
  } else {
    scrollEndValuePx = Math.min(scrollEndValuePx, footerTop - 800);
  }
}

function setupPaths(paths) {
  paths.forEach(path => {
    const length = path.getTotalLength();
    const safeLength = length === 0 ? 1000 : length;
    gsap.set(path, {
      strokeDasharray: safeLength,
      strokeDashoffset: safeLength,
    });
  });
}

function setupDiamonds(diamonds) {
  gsap.set(diamonds, {
    opacity: 0,
    scale: 0.5,
    transformOrigin: "50% 50%",
  });
}

function animatePaths(timeline, paths, diamonds) {
  let startTime = 0;
  const duration = isSP ? 14.0 : 12.0;

  paths.forEach((path, i) => {
    timeline.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      duration: duration
    }, startTime);

    startTime += duration;

    if (i === 0 && diamonds.length > 0) {
      timeline.to(diamonds, {
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        ease: "power2.out"
      }, 0);
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
    "#sec2Path7",
    "#sec2Path8"
  ].map(sel => document.querySelector(sel)).filter(Boolean);

  const allPaths = sec1Paths.concat(pcSec2Paths);
  const diamonds = document.querySelectorAll("#tree-svg polygon");

  setupPaths(allPaths);
  setupDiamonds(diamonds);

  const mainTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: pageTitle,
      start: "top top",
      end: `${scrollEndValuePx}px`,
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
    "#sp-sec2Path8",
    "#sp-sec2Path9"
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
      end: `${scrollEndValuePx}px`,
      scrub: true,
      markers: false
    }
  });

  animatePaths(spTimeline, allPaths, diamonds);
}

window.addEventListener("DOMContentLoaded", () => {
  ScrollTrigger.refresh();
});

window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});