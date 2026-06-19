//اظهار واخفاء تواصل معنا
function contact_us() {
	var g = document.getElementById("contact-us-button");

	if (g.style.display == "block") {
		g.style.display = "none";
  } else {
		g.style.display = "block";
  }
}

//رسالة عند الدخول الى الصفحة
window.onload = function() {
	alert("أهلا وسهلا بكم في موقعنا");
}