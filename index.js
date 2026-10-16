// Scroll progress
const progressBar = document.getElementById("scroll-progress");

window.addEventListener(
    "scroll",
    () => {
        const pageHeight =
            document.documentElement.scrollHeight - window.innerHeight;
        const progress =
            pageHeight > 0 ? (window.scrollY / pageHeight) * 100 : 0;
        progressBar.style.width = `${progress}%`;
    },
    { passive: true },
);

// Mobile navigation
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "إغلاق القائمة" : "فتح القائمة",
    );
    menuToggle.innerHTML = `<i class="fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}"></i>`;
});

navbar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navbar.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "فتح القائمة");
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

// Current year
document.getElementById("year").textContent = new Date().getFullYear();
