// --- フッターの共通文言をここで定義 ---
const headerContent = `<header class="wiki-header"><div class="search-container"><div class="search-row"><input type="text" id="wiki-search-input" placeholder="格子Wiki内を検索" autocomplete="off"><button id="search-button">検索</button></div><div id="search-results" class="search-results-dropdown"></div></div></header>`;

// 画面が読み込まれたら、footerタグを探して中身を流し込む
window.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('header');
    headers.forEach(h => {
        h.innerHTML = headerContent;
    });
});