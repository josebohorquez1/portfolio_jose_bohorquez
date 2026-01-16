function initMenuToggle() {
        const navToggle = document.querySelector('.site-header-nav-toggle');
        const siteNav = document.getElementById('site-nav');
        if (!navToggle || !siteNav) return;
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', (!isExpanded).toString());
            siteNav.classList.toggle('active');
            const icon = navToggle.querySelector('i[data-lucide]');
            if (!isExpanded) {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }
            lucide.createIcons();
        });
}