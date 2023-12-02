// Variáveis para controlar a visibilidade do botão e o estado de rolagem
let isButtonVisible = false;
let isScrolling = false;

// Evento que é acionado quando a página é rolada
window.onscroll = function() {
  // Verifica se não estamos já em processo de rolagem
  if (!isScrolling) {
    // Marca que estamos em processo de rolagem
    isScrolling = true;

    // Adiciona um tempo de espera para evitar comportamento abrupto
    setTimeout(function() {
      // Obtém a referência do botão "Voltar ao Topo" pelo ID
      const button = document.getElementById("scrollToTopButton");

      // Verifica a posição de rolagem da página
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        // Se a rolagem estiver além de um ponto específico (100 pixels no exemplo),
        // e o botão não estiver visível, faz ele aparecer suavemente
        if (!isButtonVisible) {
          button.style.opacity = "1"; // Torna o botão visível
          button.style.display = "block"; // Exibe o botão
          isButtonVisible = true; // Marca o botão como visível
        }
      } else {
        // Se a rolagem estiver abaixo do ponto específico, ou seja, próxima ao topo,
        // e o botão estiver visível, faz ele desaparecer suavemente
        if (isButtonVisible) {
          button.style.opacity = "0"; // Torna o botão invisível
          setTimeout(function() {
            button.style.display = "none"; // Oculta o botão após a transição
          }, 300); // Tempo deve ser igual à duração da transição
          isButtonVisible = false; // Marca o botão como invisível
        }
      }
      // Marca que o processo de rolagem terminou
      isScrolling = false;
    }, 300); // Ajuste este valor conforme necessário para evitar aparecimento sem transição
  }
};


// Quando o botão é clicado, rola suavemente de volta ao topo da página
document.getElementById("scrollToTopButton").addEventListener("click", function() {
  scrollToTop();
});

function scrollToTop() {
  const scrollToTop = window.setInterval(function() {
    const pos = window.pageYOffset;
    if (pos > 0) {
      window.scrollTo(0, pos - 100); // Quanto menor o valor, mais suave é a rolagem
    } else {
      window.clearInterval(scrollToTop);
    }
  }, 5); // Controla a velocidade da rolagem
}
