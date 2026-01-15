document.addEventListener('DOMContentLoaded', async () => {
    const searchInput = document.getElementById('wiki-search-input');
    const resultsContainer = document.getElementById('search-results');
    const searchButton = document.getElementById('search-button');

    let searchDatabase = [];

    // 1. data.jsonから記事リストを読み込む
    try {
        const response = await fetch('data.json');
        searchDatabase = await response.json();
    } catch (error) {
        console.error("検索データの読み込みに失敗しました:", error);
    }

    // 2. 検索・表示処理
    const performSearch = (query) => {
        resultsContainer.innerHTML = '';
        if (!query) {
            resultsContainer.style.display = 'none';
            return;
        }

        const matches = searchDatabase.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.keywords.toLowerCase().includes(query.toLowerCase())
        );

        if (matches.length > 0) {
            matches.forEach(match => {
                const div = document.createElement('div');
                div.innerHTML = `
                    <span class="result-title">${match.title}</span>
                    <span class="result-url">${match.url}</span>
                `;
                div.addEventListener('click', () => {
                    window.location.href = match.url; // そのページへジャンプ
                });
                resultsContainer.appendChild(div);
            });
            resultsContainer.style.display = 'block';
        } else {
            resultsContainer.style.display = 'none';
        }
    };

    // 入力時のリアルタイム検索
    searchInput.addEventListener('input', (e) => performSearch(e.target.value.trim()));

    // エンターキーまたは検索ボタンで一番上の候補に飛ぶ
    const goToFirstResult = () => {
        const firstResult = resultsContainer.querySelector('div');
        if (firstResult) {
            firstResult.click();
        } else {
            alert("一致する記事が見つかりません");
        }
    };

    searchButton.addEventListener('click', goToFirstResult);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') goToFirstResult();
    });

    // 枠外クリックで閉じる
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            resultsContainer.style.display = 'none';
        }
    });
});