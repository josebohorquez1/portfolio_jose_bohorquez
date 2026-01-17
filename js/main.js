function initMenuToggle() {
    const navToggle = document.querySelector('.site-header-nav-toggle');
    const siteNav = document.querySelector('.site-nav');
        if (!navToggle || !siteNav) return;
        navToggle.addEventListener('click', () => {
            const isActive = siteNav.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isActive.toString());
            siteNav.setAttribute('aria-hidden', (!isActive).toString());
            document.body.classList.toggle("nav-active", isActive);
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.dataset.lucide = isActive ? 'x' : 'menu';
                lucide.createIcons();
            }
        });
}
