// MDCODES | Main JavaScript

const progressBar = document.getElementById("scroll-progress");
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const yearElement = document.getElementById("year");

// Scroll progress
function updateScrollProgress() {
    const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = pageHeight > 0 ? (window.scrollY / pageHeight) * 100 : 0;

    progressBar.style.width = `${progress}%`;
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();

// Mobile navigation
function setMenuState(isOpen) {
    navbar.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "إغلاق القائمة" : "فتح القائمة",
    );

    menuToggle.innerHTML = `
        <i class="fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}"
           aria-hidden="true"></i>
    `;
}

menuToggle.addEventListener("click", () => {
    const isOpen = navbar.classList.contains("open");
    setMenuState(!isOpen);
});

navbar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        setMenuState(false);
    }
});

// Current year
yearElement.textContent = new Date().getFullYear();

// Animated cyber background: subtle particles and connecting lines.
(() => {
    const canvas = document.getElementById("cyber-canvas");
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isSmallScreen = window.matchMedia("(max-width: 700px)");
    const pointer = { x: null, y: null };
    let particles = [];
    let width = 0;
    let height = 0;
    let animationFrame = null;
    let isVisible = true;

    const random = (min, max) => Math.random() * (max - min) + min;

    function resizeCanvas() {
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.6);
        width = window.innerWidth;
        height = window.innerHeight;

        canvas.width = Math.floor(width * pixelRatio);
        canvas.height = Math.floor(height * pixelRatio);
        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

        const particleCount = Math.min(
            isSmallScreen.matches ? 34 : 62,
            Math.floor(
                (width * height) / (isSmallScreen.matches ? 19000 : 15000),
            ),
        );

        particles = Array.from({ length: Math.max(18, particleCount) }, () => ({
            x: random(0, width),
            y: random(0, height),
            vx: random(-0.22, 0.22),
            vy: random(-0.18, 0.18),
            radius: random(0.8, 1.8),
        }));

        drawFrame(false);
    }

    function drawFrame(move = true) {
        context.clearRect(0, 0, width, height);

        for (const particle of particles) {
            if (move) {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < -10 || particle.x > width + 10)
                    particle.vx *= -1;
                if (particle.y < -10 || particle.y > height + 10)
                    particle.vy *= -1;

                if (pointer.x !== null && pointer.y !== null) {
                    const dx = particle.x - pointer.x;
                    const dy = particle.y - pointer.y;
                    const distance = Math.hypot(dx, dy);

                    if (distance < 115 && distance > 0) {
                        particle.x += (dx / distance) * 0.22;
                        particle.y += (dy / distance) * 0.22;
                    }
                }
            }

            context.beginPath();
            context.arc(
                particle.x,
                particle.y,
                particle.radius,
                0,
                Math.PI * 2,
            );
            context.fillStyle = "rgba(91, 239, 208, 0.72)";
            context.fill();
        }

        const connectionDistance = isSmallScreen.matches ? 105 : 135;

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const first = particles[i];
                const second = particles[j];
                const distance = Math.hypot(
                    first.x - second.x,
                    first.y - second.y,
                );

                if (distance < connectionDistance) {
                    const opacity = (1 - distance / connectionDistance) * 0.2;
                    context.beginPath();
                    context.moveTo(first.x, first.y);
                    context.lineTo(second.x, second.y);
                    context.strokeStyle = `rgba(67, 230, 194, ${opacity})`;
                    context.lineWidth = 0.7;
                    context.stroke();
                }
            }
        }
    }

    function animate() {
        if (!isVisible || reducedMotion.matches) {
            animationFrame = null;
            return;
        }

        drawFrame(true);
        animationFrame = window.requestAnimationFrame(animate);
    }

    function startAnimation() {
        if (!isVisible || reducedMotion.matches || animationFrame !== null)
            return;
        animationFrame = window.requestAnimationFrame(animate);
    }

    function stopAnimation() {
        if (animationFrame !== null) {
            window.cancelAnimationFrame(animationFrame);
            animationFrame = null;
        }
    }

    window.addEventListener("resize", resizeCanvas, { passive: true });

    window.addEventListener(
        "pointermove",
        (event) => {
            pointer.x = event.clientX;
            pointer.y = event.clientY;
        },
        { passive: true },
    );

    window.addEventListener(
        "pointerleave",
        () => {
            pointer.x = null;
            pointer.y = null;
        },
        { passive: true },
    );

    document.addEventListener("visibilitychange", () => {
        isVisible = !document.hidden;
        if (isVisible) startAnimation();
        else stopAnimation();
    });

    reducedMotion.addEventListener?.("change", () => {
        if (reducedMotion.matches) {
            stopAnimation();
            drawFrame(false);
        } else {
            startAnimation();
        }
    });

    resizeCanvas();
    startAnimation();
})();
