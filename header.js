// --- フッターの共通文言をここで定義 ---
const headerContent = `<div class="search-wrapper">
        <div class="search-input-group">
            <input type="text" id="wiki-search-input" placeholder="ページを検索..." autocomplete="off">
            <button id="wiki-search-button">検索</button>
        </div>

        <div id="search-results-container"></div>
    </div>`;

// 画面が読み込まれたら、footerタグを探して中身を流し込む
window.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('header');
    headers.forEach(h => {
        h.innerHTML = headerContent;
    });
});