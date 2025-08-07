const toggleButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.menu-overlay');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  navLinks.classList.remove('active');
  overlay.classList.remove('active');
});




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


// Inicializa o EmailJS
(function() {
    emailjs.init("VdZa4xr64wGqCfBmg"); // substitua por sua Public Key (User ID)
})();

// Lida com o envio do formulário
document.getElementById('form-contato').addEventListener('submit', function(event) {
event.preventDefault();

emailjs.sendForm('service_opbb24e', 'template_dih8kvs', this)
.then(() => {
alert('Mensagem enviada com sucesso!');
this.reset();
}, (error) => {
alert('Erro ao enviar. Tente novamente.');
console.error(error);
  });
});

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > lastScrollY) {
    // Scrolling para baixo
    header.classList.add("hide");
  } else {
    // Scrolling para cima
    header.classList.remove("hide");
  }

  lastScrollY = window.scrollY;
});
