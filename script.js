/*
 * このファイルの全てはAIによって生成されたものです．
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. セクションが画面に入ったらふわっと表示させる (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    // 全てのh2とその直後の要素をグループとして監視
    document.querySelectorAll('h2, p, blockquote').forEach(el => {
        el.classList.add('fade-in-section');
        observer.observe(el);
    });

    // 2. Wikipedia特有の「ページトップへ戻る」リンクの動的生成
    const backToTop = document.createElement('div');
    backToTop.innerHTML = '↑ Top';
    backToTop.style.cssText = `
        position: fixed; bottom: 20px; right: 20px;
        background: #fff; border: 1px solid #a2a9b1;
        padding: 5px 10px; cursor: pointer; display: none;
        font-size: 12px; transition: opacity 0.3s;
    `;
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});