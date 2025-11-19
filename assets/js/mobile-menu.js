(function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn   = document.querySelector('.mobile-menu-close');

  if (!menuToggle || !mobileMenu || !closeBtn) return;

  function openMenu() {
    mobileMenu.classList.add('is-open');
    document.body.classList.add('menu-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
  }

  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  }

  menuToggle.addEventListener('click', function () {
    if (mobileMenu.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  closeBtn.addEventListener('click', closeMenu);

  // Aizver, ja klikšķina uz kādas saites mobilajā izvēlnē
  mobileMenu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      closeMenu();
    }
  });
})();