// ============================================
// GANTI nomor WhatsApp Anda di bawah ini
// Format: kode negara + nomor TANPA tanda + atau 0
// Contoh Indonesia: 628123456789
// ============================================
const WHATSAPP_NUMBER = "6287740637895";

// Tombol Buy → buka WhatsApp dengan pesan otomatis
document.querySelectorAll('.btn-buy').forEach(btn => {
  btn.addEventListener('click', () => {
    const productName = btn.getAttribute('data-product');
    const message = `Halo, saya tertarik untuk membeli *${productName}*. Apakah masih tersedia?`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  });
});

// Contact form
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! I will get back to you soon.');
    e.target.reset();
  });
}

// Auto-highlight nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
