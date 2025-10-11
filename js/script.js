  // Toggle class active
  const navbarNav = document.querySelector('.navbar-nav');

  // Scroll halus ke About
function scrollToAbout() {
  const aboutSection = document.getElementById("about");
  aboutSection.scrollIntoView({ behavior: "smooth" });
}

// Ambil semua gambar zoomable
const zoomImages = document.querySelectorAll('.zoomable');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');

zoomImages.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Klik di luar gambar juga tutup modal
modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
 
document.addEventListener("DOMContentLoaded", () => {
  // animasi bintang
  const starContainer = document.querySelector('.falling-stars');
  const totalStars = 50;
  for (let i = 0; i < totalStars; i++) {
    const star = document.createElement('span');
    star.style.left = Math.random() * 100 + 'vw';
    const size = Math.random() * 2 + 1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.animationDuration = (3 + Math.random() * 5) + 's';
    star.style.animationDelay = Math.random() * 5 + 's';
    starContainer.appendChild(star);
  }

  // toggle kompetisi
  document.querySelectorAll('.competition-header').forEach(header => {
    header.addEventListener('click', () => {
      const competition = header.parentElement;
      competition.classList.toggle('active');

      // ganti icon ▼ ↕
      const btn = header.querySelector('.toggle-btn');
      btn.textContent = competition.classList.contains('active') ? '▲' : '▼';
    });
  });
});
