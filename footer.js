const footerContent = `<p>Copyright ©2026 さとしん All Rights Reserved.</p>`;

window.addEventListener('DOMContentLoaded', () => {
    const footers = document.querySelectorAll('footer');
    footers.forEach(f => {
        f.innerHTML = footerContent;
    });
});