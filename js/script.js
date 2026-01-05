// Меню, дропдаун

const btn = document.getElementById("ddBtn");
const menu = document.getElementById("ddMenu");

let hoverTimeout;

function openMenu() {
  clearTimeout(hoverTimeout);
  menu.classList.remove("hidden");
  btn.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  hoverTimeout = setTimeout(() => {
    menu.classList.add("hidden");
    btn.setAttribute("aria-expanded", "false");
  }, 150); 
}

const isDesktop = window.matchMedia("(pointer: fine)").matches;

if (isDesktop) {
  btn.addEventListener("mouseenter", openMenu);
  btn.addEventListener("mouseleave", closeMenu);

  menu.addEventListener("mouseenter", openMenu);
  menu.addEventListener("mouseleave", closeMenu);
}


document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("menuOpen");
  const closeBtn = document.getElementById("menuClose");
  const overlay = document.getElementById("menuOverlay");
  const sideMenu = document.getElementById("sideMenu");

  if (!openBtn || !closeBtn || !overlay || !sideMenu) return;

  const BP = 980; 

  function openMenu() {
    sideMenu.classList.remove("translate-x-full");
    overlay.classList.remove("opacity-0", "pointer-events-none");
    overlay.classList.add("opacity-100");
    document.body.classList.add("overflow-hidden");
    openBtn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    sideMenu.classList.add("translate-x-full");
    overlay.classList.add("opacity-0", "pointer-events-none");
    overlay.classList.remove("opacity-100");
    document.body.classList.remove("overflow-hidden");
    openBtn.setAttribute("aria-expanded", "false");
  }

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  
  sideMenu.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link) closeMenu();
  });


  window.addEventListener("resize", () => {
    if (window.innerWidth >= BP) closeMenu();
  });
});


  const prevToggle = document.getElementById("prevToggle");
  const prevList = document.getElementById("prevList");
  const prevIcon = document.getElementById("prevIcon");

  if (prevToggle && prevList) {
    prevToggle.addEventListener("click", () => {
      const isOpen = !prevList.classList.contains("hidden");
      prevList.classList.toggle("hidden");
      prevList.classList.toggle("flex");

      if (prevIcon) prevIcon.classList.toggle("rotate-180", !isOpen);
    });
  }


