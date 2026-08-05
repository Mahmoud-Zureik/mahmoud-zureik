function openMenu() {
  document.getElementById('side-menu').classList.add('open');
  document.getElementById('overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  document.getElementById('side-menu').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// Mark active nav link
document.addEventListener('DOMContentLoaded', function () {
  var path = window.location.pathname.split('/').pop() || 'index.html';
  var links = document.querySelectorAll('.side-menu nav a');
  links.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});

function no() {
  alert("عذرا هذه الصفحة غير متوفرة حاليا")
}
