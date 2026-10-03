//scroll-progress
window.onscroll = function () {
    let scroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let progress = (scroll / height) * 100;

    document.getElementById("scroll-progress").style.width = progress + "%";
};

//Control the menu visibility
$(document).ready(function () {
  $("#menu-open").click(function () {
    $(".navbar").slideDown(200);
    $("#menu-open").removeClass("active");
    $("#menu-close").addClass("active");
  });

  $("#menu-close").click(function () {
    $(".navbar").slideUp(200);
    $("#menu-close").removeClass("active");
    $("#menu-open").addClass("active");
  });
});

// Tippy.js - Tooltips
tippy(".menu-toggle", {
  content: "القائمة",
  placement: "bottom",
  duration: 500,
  onShow(instance) {
    setTimeout(() => {
      instance.hide();
    }, 1000);
  },
});
tippy("#whatsapp", {
  content: "واتساب",
  duration: 500,
});
tippy("#telegram", {
  content: "تيليجرام",
  duration: 500,
});
tippy("#facebook", {
  content: "فيسبوك",
  duration: 500,
});
tippy("#instagram", {
  content: "انستغرام",
  duration: 500,
});
tippy("#github", {
  content: "غيت هاب",
  duration: 500,
});
tippy("#email", {
  content: "البريد الإلكتروني",
  duration: 500,
});
