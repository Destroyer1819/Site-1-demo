// ===============================
// Reveal-on-scroll animation
// ===============================
const reveals = document.querySelectorAll(".reveal");

const io = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                io.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12 }
);

reveals.forEach((el) => io.observe(el));

// ===============================
// Active nav highlight (optional)
// ===============================
const current = (location.pathname.split("/").pop() || "").toLowerCase();
document.querySelectorAll(".nav-links a").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === current) a.classList.add("active");
});

// ===============================
// Mobile hamburger menu
// uses: .nav-links.open
// ===============================
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        navLinks.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", navLinks.classList.contains("open") ? "true" : "false");
    });

    // Close when a link is clicked
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });

    // Close when clicking outside navbar
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".navbar")) {
            navLinks.classList.remove("open");
            navToggle.setAttribute("aria-expanded", "false");
        }
    });
}

// ===============================
// Modals for "View" buttons
// uses: .modal.show
// ===============================
function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeModal(modal) {
    modal.classList.remove("show");
    document.body.style.overflow = "";
}

// Open correct modal
document.querySelectorAll(".view-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const id = btn.dataset.modal;
        openModal(id);
    });
});

// Close button
document.querySelectorAll(".modal .modal-close").forEach((btn) => {
    btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        if (modal) closeModal(modal);
    });
});

// Click backdrop to close
document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal(modal);
    });
});

// ESC to close
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.querySelectorAll(".modal.show").forEach((modal) => closeModal(modal));
    }
});

// ===============================
// GALLERY LIGHTBOX
// ===============================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

document.querySelectorAll(".gallery-click").forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.classList.add("open"); // IMPORTANT: matches your CSS
    });
});

function closeLightbox() {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
}

closeBtn.addEventListener("click", closeLightbox);

// close when clicking outside the image
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
});

// close with ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("open")) closeLightbox();
});
//contact form
document.getElementById("contactForm").addEventListener("submit", e => {
    const robot = document.getElementById("notRobot");
    const error = document.getElementById("robotError");

    if (!robot.checked) {
        e.preventDefault();
        error.style.display = "block";
        return;
    }

    error.style.display = "none";

    e.preventDefault(); // remove later when you add backend
    alert("Message sent! (Front-end demo)");
});