
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
