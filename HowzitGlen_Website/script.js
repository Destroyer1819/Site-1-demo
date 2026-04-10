// Jondec-style image modal for Howzit Glen
(() => {
  const modal = document.getElementById("hgModal");
  const modalImg = document.getElementById("hgModalImg");
  const closeBtn = document.getElementById("hgModalClose");

  if (!modal || !modalImg || !closeBtn) return;

  document.querySelectorAll(".hg-photo-card").forEach(card => {
    card.addEventListener("click", (e) => {
      e.preventDefault(); // stop opening the image as a page
      const img = card.querySelector("img");
      modalImg.src = card.getAttribute("href");
      modalImg.alt = img?.alt || "Image preview";
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  const close = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    modalImg.src = "";
    document.body.style.overflow = "";
  };

  closeBtn.addEventListener("click", close);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) close();
  });
})();
// ===============================
// GALLERY LIGHTBOX
// ===============================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

if (lightbox && lightboxImg && closeBtn) {

  document.querySelectorAll(".gallery-click").forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("open");
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
  }

  closeBtn.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("open")) {
      closeLightbox();
    }
  });
}
// ===============================
// HOWZIT GLEN HOME LIGHTBOX
// ===============================
const hgLightbox = document.getElementById("hgLightbox");
const hgLightboxImg = hgLightbox?.querySelector(".lightbox-img");
const hgCloseBtn = hgLightbox?.querySelector(".lightbox-close");

document.querySelectorAll(".hg-gallery-click").forEach(img => {
  img.addEventListener("click", () => {
    hgLightboxImg.src = img.src;
    hgLightbox.classList.add("open");
  });
});

function closeHgLightbox() {
  hgLightbox.classList.remove("open");
  hgLightboxImg.src = "";
}

hgCloseBtn?.addEventListener("click", closeHgLightbox);

hgLightbox?.addEventListener("click", (e) => {
  if (e.target === hgLightbox) closeHgLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && hgLightbox?.classList.contains("open")) closeHgLightbox();
});
// ===== Mobile nav toggle =====
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-links");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}