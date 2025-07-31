
const questions = document.querySelectorAll('.faq-question');

  questions.forEach((btn) => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      btn.classList.toggle('active');

      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        answer.style.paddingBottom = 0;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.paddingBottom = "15px";
      }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.diferencial-item');
    items.forEach((item, index) => {
      item.style.opacity = 0;
      item.style.transform = 'translateY(20px)';
      setTimeout(() => {
        item.style.transition = 'all 0.5s ease';
        item.style.opacity = 1;
        item.style.transform = 'translateY(0)';
      }, 150 * index);
    });
});


const fotos = document.querySelectorAll('.foto-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

 fotos.forEach(img => {
   img.addEventListener('click', () => {
   lightboxImg.src = img.src;
   lightbox.style.display = 'flex';
   });
  });

function closeLightbox() {
lightbox.style.display = 'none';
lightboxImg.src = '';
}


function scrollGaleria(direction) {
  const slider = document.getElementById('galeria-slider');
  const scrollAmount = 260;
  slider.scrollLeft += direction * scrollAmount;
}
