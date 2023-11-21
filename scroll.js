document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetElement = document.querySelector(this.getAttribute('href'));
      const yOffset = -200; // Valor de deslocamento em pixels (ajuste conforme necessário)

      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });

      // Adiciona uma classe temporária para restaurar as margens
      targetElement.classList.add('temp-margin');

      // Remove a classe temporária após um curto atraso
      setTimeout(() => {
        targetElement.classList.remove('temp-margin');
      }, 500); // 500 milissegundos (0.5 segundo)
    });
});