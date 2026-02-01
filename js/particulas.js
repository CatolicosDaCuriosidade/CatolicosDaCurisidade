/* ==========================================
   PARTICULAS.JS
   Partículas Douradas Flutuantes
   Católicos da Curiosidade
========================================== */

/*
   Efeito:
   - Partículas douradas suaves
   - Movimento flutuante
   - Leve para GitHub Pages
*/

document.addEventListener("DOMContentLoaded", () => {
  criarSistemaParticulas();
});

/* ==========================================
   CRIAR CONTAINER
========================================== */

function criarSistemaParticulas() {
  const container = document.createElement("div");
  container.id = "particulas-container";
  document.body.appendChild(container);

  gerarParticulas(container);
}

/* ==========================================
   GERAR PARTÍCULAS
========================================== */

function gerarParticulas(container) {
  const quantidade = window.innerWidth < 768 ? 25 : 60;

  for (let i = 0; i < quantidade; i++) {
    const particula = document.createElement("span");
    particula.classList.add("particula");

    configurarParticula(particula);

    container.appendChild(particula);
  }
}

/* ==========================================
   CONFIGURAR PARTÍCULA
========================================== */

function configurarParticula(particula) {
  const tamanho = Math.random() * 6 + 2;
  const posicaoX = Math.random() * window.innerWidth;
  const duracao = Math.random() * 15 + 10;
  const delay = Math.random() * 10;

  particula.style.width = `${tamanho}px`;
  particula.style.height = `${tamanho}px`;
  particula.style.left = `${posicaoX}px`;
  particula.style.animationDuration = `${duracao}s`;
  particula.style.animationDelay = `${delay}s`;
}

/* ==========================================
   RESPONSIVIDADE
========================================== */

window.addEventListener("resize", () => {
  const container = document.getElementById("particulas-container");
  if (container) {
    container.innerHTML = "";
    gerarParticulas(container);
  }
});
