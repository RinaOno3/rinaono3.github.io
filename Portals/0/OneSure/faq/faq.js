
let faqData = [];
let currentPage = 1;
const itemsPerPage = 15;

window.onload = async () => {
  const res = await fetch("faq_data.json");
  faqData = await res.json();

  populateCategoryOptions();
  filterFaq();
};

function populateCategoryOptions() {
  const categorySet = new Set(faqData.map(faq => faq.category));
  const categoryFilter = document.getElementById("categoryFilter");

  categorySet.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categoryFilter.appendChild(option);
  });
}

function filterFaq(page = 1) {
  const keyword = document.getElementById("keywordInput").value.toLowerCase();
  const selectedCategory = document.getElementById("categoryFilter").value;

  const filtered = faqData.filter(faq => {
    const matchKeyword =
      faq.question.toLowerCase().includes(keyword) ||
      faq.answer.toLowerCase().includes(keyword);
    const matchCategory =
      selectedCategory === "" || faq.category === selectedCategory;
    return matchKeyword && matchCategory;
  });

  currentPage = page;
  displayFaqList(filtered);
  displayPagination(filtered.length);
}

function clearFaq(page = 1) {
  // 入力初期化
  document.getElementById("categoryFilter").value = "";
  document.getElementById("keywordInput").value = "";

  // ページを1に戻して全件表示
  filterFaq(1);
}

function displayFaqList(data) {
  const list = document.getElementById("faqList");
  list.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageData = data.slice(start, end);

  if (pageData.length === 0) {
    list.innerHTML = "<p>該当するFAQは見つかりませんでした。</p>";
    return;
  }

  // カテゴリごとにグループ化
  const grouped = {};
  pageData.forEach(faq => {
    if (!grouped[faq.category]) {
      grouped[faq.category] = [];
    }
    grouped[faq.category].push(faq);
  });

  let index = start;
  for (const [category, faqs] of Object.entries(grouped)) {
    // === カテゴリヘッダー部分 ===
    const wrapper = document.createElement("div");
    wrapper.classList.add("faq-category-wrapper");

    const title = document.createElement("h2");
    title.textContent = category;
    title.classList.add("faq-category-title");
    wrapper.appendChild(title);

    // 開閉ボタン追加
    const buttonArea = document.createElement("div");
    buttonArea.classList.add("faq-button-area");

    const openBtn = document.createElement("a");
    openBtn.textContent = "開く";
    openBtn.classList.add("lnkOpen");

    const closeBtn = document.createElement("a");
    closeBtn.textContent = "閉じる";
    closeBtn.classList.add("lnkClose");

    buttonArea.appendChild(openBtn);
    buttonArea.appendChild(closeBtn);
    wrapper.appendChild(buttonArea);

    // QAリスト
    const qaContainer = document.createElement("div");
    qaContainer.classList.add("qa-list");

    const ddElements = [];

    faqs.forEach(faq => {
      index++;
      const dl = document.createElement("dl");

      const dt = document.createElement("dt");
      dt.innerHTML = `<span class='faq-number'>${index}</span> ${faq.question}`;

      const dd = document.createElement("dd");
      dd.textContent = `${faq.answer}`;
      dd.style.display = "none";

      // 開閉
      dt.addEventListener("click", () => {
        const currentDisplay = window.getComputedStyle(dd).display;
        dd.style.display = currentDisplay === "none" ? "block" : "none";
      });

      ddElements.push(dd);

      dl.appendChild(dt);
      dl.appendChild(dd);
      qaContainer.appendChild(dl);
    });

    // ボタン挙動
    openBtn.addEventListener("click", () => {
      ddElements.forEach(dd => dd.style.display = "block");
    });
    closeBtn.addEventListener("click", () => {
      ddElements.forEach(dd => dd.style.display = "none");
    });

    wrapper.appendChild(qaContainer);
    list.appendChild(wrapper);
  }
  
  // すべて開く／閉じるボタンがあれば、イベントを再登録
  const globalOpen = document.querySelector(".lnkOpenAll");
  const globalClose = document.querySelector(".lnkCloseAll");

  if (globalOpen) {
    globalOpen.onclick = (e) => {
      e.preventDefault();
      document.querySelectorAll("#faqList dd").forEach(dd => {
        dd.style.display = "block";
      });
    };
  }

  if (globalClose) {
    globalClose.onclick = (e) => {
      e.preventDefault();
      document.querySelectorAll("#faqList dd").forEach(dd => {
        dd.style.display = "none";
      });
    };
  }  
}

function displayPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  if (totalPages <= 1) return;

  const ul = document.createElement("ul");
  ul.classList.add("ulList_vertical", "ulPaging");

  // 「前へ」
  if (currentPage > 1) {
    const liPrev = document.createElement("li");
    liPrev.classList.add("Prev");

    const aPrev = document.createElement("a");
    aPrev.href = "#";
    aPrev.textContent = "前へ";
    aPrev.addEventListener("click", (e) => {
      e.preventDefault();
      filterFaq(currentPage - 1);
    });

    liPrev.appendChild(aPrev);
    ul.appendChild(liPrev);
  }

  // ページ番号
  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");

    if (i === currentPage) {
      li.classList.add("Current");
      li.textContent = i;
    } else {
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = i;
      a.addEventListener("click", (e) => {
        e.preventDefault();
        filterFaq(i);
      });
      li.appendChild(a);
    }

    ul.appendChild(li);
  }

  // 「次へ」
  if (currentPage < totalPages) {
    const liNext = document.createElement("li");
    liNext.classList.add("Next");

    const aNext = document.createElement("a");
    aNext.href = "#";
    aNext.textContent = "次へ";
    aNext.addEventListener("click", (e) => {
      e.preventDefault();
      filterFaq(currentPage + 1);
    });

    liNext.appendChild(aNext);
    ul.appendChild(liNext);
  }

  pagination.appendChild(ul);
}

