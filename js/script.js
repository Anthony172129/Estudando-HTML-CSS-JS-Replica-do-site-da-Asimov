
const leftParen = document.querySelector('.left-paren');
const rightParen = document.querySelector('.right-paren');
const stringText = document.querySelector('.string-text');
const shifts = [-220, -180, -140, -130]; // posição por índice


const messages = [
  '"Desenvolva Agentes de IA"',
  '"Aprenda análise de dados"',
  '"Construa Dashboards"',
  '"Crie automações"'
];

let index = 0;

function animateMessage() {
  // Aproxima os parênteses
  
  stringText.style.opacity = 0;
  rightParen.style.transform = `translateX(${shifts[index]}px)`;
  setTimeout(() => {
    // Troca a mensagem
    index = (index + 1) % messages.length;
    stringText.textContent = messages[index];
  }, 400);

  setTimeout(() => {
    // Afasta os parênteses e mostra o novo texto
    leftParen.style.transform = 'translateX(0)';
    rightParen.style.transform = 'translateX(0)';
    stringText.style.opacity = 1;
  }, 500);
}

setInterval(animateMessage, 3500); // troca a cada 3.5s

const leftbutton = document.querySelector('.back');
const rightbutton = document.querySelector('.next');

document.addEventListener("DOMContentLoaded", () => {
  let count = 1;
  const totalSlides = 3;

  document.getElementById("radio1").checked = true;

  const showSlide = () => {
    document.getElementById("radio" + count).checked = true;
  };

  // Avança automaticamente a cada 4 segundos
  let autoSlide = setInterval(() => {
    count++;
    if (count > totalSlides) count = 1;
    showSlide();
  }, 4000);

  // Botão da esquerda (voltar)
  leftbutton.addEventListener("click", () => {
    count--;
    if (count < 1) count = totalSlides;
    showSlide();
  });

  // Botão da direita (avançar)
  rightbutton.addEventListener("click", () => {
    count++;
    if (count > totalSlides) count = 1;
    showSlide();
  });
});

