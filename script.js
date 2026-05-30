//اظهار القائمة
function show() {
  var n = document.getElementById("div2");
  n.style = "right:0%;";
}

//إخفاء القائمة
function hide() {
  var n = document.getElementById("div2");
  n.style = "right:-60%;";
}

//اظهار واخفاء تواصل معنا
function contact_us() {
  var g = document.getElementById("div4");

  if (g.style.display == "block") {
    g.style.display = "none";
  } else {
    g.style.display = "block";
  }
}
