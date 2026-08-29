function welcome() {
  Swal.fire({
    title: "مرحباً بك 👋",
    text: "يسعدني وجودك في موقعي 🌟",
    imageUrl: "imgs/image.png",
    imageWidth: 300,
    imageHeight: 200,
    imageAlt: "Welcome",
    confirmButtonText: "دخول إلى الموقع",
    footer: `
      <a dir="rtl" href="https://youtube.com/channel/UCvbXfC0LwUgtxDksR5hGgdA?si=Nlhn2KW5-YfjdGKM"
         target="_blank">
          اشترك في قناتي على YouTube
      </a>
    `
  });
}

const navbar = document.querySelector(".navbar");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const list = document.querySelector(".list");

list.addEventListener("click", () => {
  bars.classList.toggle("active");
  xmark.classList.toggle("active");
  navbar.classList.toggle("active");
});
