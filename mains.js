// JavaScript para Rolagem de tela.
// Seleciona o botão de rolagem
const scrollToBottomButton = document.querySelector('#scroll-to-bottom');

// Adiciona um evento de clique ao botão
scrollToBottomButton.addEventListener('click', (event) => {
  event.preventDefault(); // Previne o comportamento padrão do link

  // Seleciona o elemento de destino
  const target = document.querySelector('#bottom');

  // Calcula a distância entre o topo da página e o elemento de destino
  const targetPosition = target.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;

  // Define a duração da animação
  const duration = 1500; // 500ms

  // Inicia a animação
  let start = null;
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  });
});

// Função ease-in-out-cubic para criar uma animação suave
function easeInOutCubic(t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t*t + b;
  t -= 2;
  return c/2*(t*t*t + 2) + b;
}
// JavaScript para Rolagem de tela.

// JavaScript para Ativação de animações


// JavaScript para Ativação de animações


