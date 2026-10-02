//رسالة ترحيبية
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

//التحكم في اظهار واخفاء القائمة
$(document).ready(function() {
  $("#menu-open").click(function() {
    $(".navbar").slideDown(200);
    $("#menu-open").removeClass("active");
    $("#menu-close").addClass("active");
  });

  $("#menu-close").click(function() {
    $(".navbar").slideUp(200);
    $("#menu-close").removeClass("active");
    $("#menu-open").addClass("active");
  });
});