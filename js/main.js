function initMenuToggle() {
        const navToggle = document.querySelector('.site-header-nav-toggle');
        const siteNav = document.getElementById('site-nav');
        if (!navToggle || !siteNav) return;
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', (!isExpanded).toString());
            const navHidden = siteNav.getAttribute("aria-hidden") === 'true';
            siteNav.setAttribute("aria-hidden", (!navHidden).toString());
            siteNav.classList.toggle('active');
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.dataset.lucide = isExpanded ? 'menu' : 'x';
                lucide.createIcons();
            }
        });
}
