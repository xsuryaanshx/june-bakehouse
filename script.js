/* ════════════════════════════════════════════════════════════
   JUNE BAKEHOUSE — JavaScript
   Handles: nav scroll behaviour, mobile menu, scroll reveals
════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── 1. Nav: add .scrolled class after user scrolls past hero ── */
  const header = document.querySelector('.site-header');

  function onScroll() {
    const heroEl = document.getElementById('hero');
    const heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;
    if (window.scrollY > heroHeight - 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load


  /* ── 2. Mobile nav toggle ─────────────────────────────── */
  const toggle   = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    navLinks.querySelectorAll('.nav__link').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        toggle.focus();
      }
    });
  }


  /* ── 3. Scroll-reveal: fade/rise on intersection ─────── */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    // Fallback: show everything immediately (no JS/IO support)
    revealEls.forEach((el) => el.classList.add('in-view'));
  }


  /* ── 4. Active nav link highlighting on scroll ────────── */
  const sections  = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav__link[href^="#"]');

  if ('IntersectionObserver' in window && sections.length) {
    let activeId = null;

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeId = entry.target.id;
            navAnchors.forEach((a) => {
              const isActive = a.getAttribute('href') === `#${activeId}`;
              a.setAttribute('aria-current', isActive ? 'true' : 'false');
              a.style.opacity = isActive ? '1' : '';
            });
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((s) => sectionObserver.observe(s));
  }

})();
