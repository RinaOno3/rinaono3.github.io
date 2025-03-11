new Splide(".splide01", {
    type: "loop", // ループあり
    arrows: false, // 矢印非表示
    pagination: false, // ページネーション非表示
    drag: false,
    autoScroll: {
      speed: 1, // スクロール速度
      pauseOnHover: false, // ホバー時もスクロールを継続
    },
  }).mount(window.splide.Extensions);
  
  
  // スプライダー2番目の設定（DOMContentLoadedイベントを利用）
  document.addEventListener("DOMContentLoaded", function () {
    const splide02 = new Splide(".splide02", {
      type: "loop", // ループあり
      arrows: false, // 矢印非表示
      pagination: false, // ページネーション非表示
      drag: false,
      gap: 20, // スライド間の余白
      perPage: 4, // 表示するスライドの数
      direction: "rtl", // スライドの方向を左から右
      autoScroll: {
        speed: 1, // スクロール速度
        pauseOnHover: false, // ホバー時もスクロールを継続
      },
    });
  
    // AutoScrollプラグインの読み込みとマウント
    splide02.mount({ AutoScroll: window.splide.Extensions.AutoScroll });
  });
  
  
  const splide = new Splide(".splide03", {
    autoplay: false, // 自動再生を無効化
    type: "loop", // ループさせる
    perPage: 4, // デフォルト表示数
    perMove: 1, // 1枚ずつ移動
    pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
    pauseOnFocus: false, // フォーカスしてもスクロールを停止させない
    pagination: false, // ページネーションを非表示
    gap: 30, // 各スライド間のスペース
    clones: 10, // クローンを増やしてスムーズなループを実現
    speed: 2000, // スライダーの移動時間
    // focus: "center", 
    breakpoints: {
      1024: {
        perPage: 1, // 1枚表示
        gap: 20, // 各スライドの間隔を調整
        focus: "center", // 中央寄せ
      },
    },
  }).mount();
  
  
  