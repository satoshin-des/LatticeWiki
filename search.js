document.addEventListener('DOMContentLoaded', async () => {
    const searchInput = document.getElementById('wiki-search-input');
    const searchButton = document.getElementById('wiki-search-button'); // ボタン取得
    const resultsContainer = document.getElementById('search-results-container');
    
    let pagesData = [];

    // 1. data.json の読み込み
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error(response.status);
        pagesData = await response.json();
    } catch (error) {
        console.error("データ読み込みエラー:", error);
        return;
    }

    // 2. 検索ロジック（共通関数）
    const getFilteredData = (query) => {
        if (!query) return [];
        return pagesData.filter(page => {
            return page.title.toLowerCase().includes(query) || 
                   (page.keywords && page.keywords.toLowerCase().includes(query));
        });
    };

    // 3. 結果リストの表示更新
    const updateResults = () => {
        const query = searchInput.value.toLowerCase().trim();
        resultsContainer.innerHTML = '';
        const results = getFilteredData(query);

        if (results.length > 0) {
            results.forEach(page => {
                const item = document.createElement('div');
                item.className = 'search-result-item';
                item.innerHTML = `<strong>${page.title}</strong><div style="font-size:11px;color:#666">${page.url}</div>`;
                item.addEventListener('click', () => { window.location.href = page.url; });
                resultsContainer.appendChild(item);
            });
            resultsContainer.style.display = 'block';
        } else {
            resultsContainer.style.display = 'none';
        }
        return results;
    };

    // 4. 「検索ボタン」または「エンターキー」でトップ候補へジャンプ
    const jumpToTopResult = () => {
        const query = searchInput.value.toLowerCase().trim();
        const results = getFilteredData(query);

        if (results.length > 0) {
            // 一番上の結果に遷移
            window.location.href = results[0].url;
        } else {
            alert('一致するページが見つかりません');
        }
    };

    // イベント設定
    searchInput.addEventListener('input', updateResults); // 入力中にリスト更新
    
    searchButton.addEventListener('click', jumpToTopResult); // ボタンクリック
    
    searchInput.addEventListener('keypress', (e) => { // エンターキー
        if (e.key === 'Enter') {
            jumpToTopResult();
        }
    });

    // 枠外クリックで閉じる
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-wrapper')) {
            resultsContainer.style.display = 'none';
        }
    });
});