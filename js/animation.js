(function () {
  function start(el) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.classList.add("animate-started");
      });
    });
  }

  function init() {
    const els = document.querySelectorAll(".animate-fadeinup, .animate-fadein");
    els.forEach(el => start(el));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();





// info@rks.global
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); 
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  document.querySelectorAll('.animate-up').forEach(el => {
    observer.observe(el);
  });







  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      if (!el) return;

      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', id);
    });
  });





(function () {
  function init() {
    const items = document.querySelectorAll("#organizations .org-item");
    console.log("org items found:", items.length);

    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(el => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log("visible:", entry.target);
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.20,
        rootMargin: "0px 0px -7% 0px"
      }
    );

    items.forEach(el => observer.observe(el));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();