/* ==========================================
   CATÓLICOS DA CURIOSIDADE - SCRIPT ULTRA
========================================== */

/* ==========================================
   MENU MOBILE TOGGLE (PC)
========================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

/* ==========================================
   ANIMAÇÃO AO ROLAR A PÁGINA
========================================== */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

/* ==========================================
   BOTÃO VOLTAR AO TOPO
========================================== */

const btnTop = document.createElement("button");
btnTop.id = "btnTop";
btnTop.innerHTML = "⬆";
document.body.appendChild(btnTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});

btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ==========================================
   PARTÍCULAS DOURADAS FLUTUANDO
========================================== */

function createParticles() {
  const particleContainer = document.createElement("div");
  particleContainer.classList.add("particles");
  document.body.appendChild(particleContainer);

  for (let i = 0; i < 40; i++) {
    const particle = document.createElement("span");
    particle.classList.add("particle");
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration = 5 + Math.random() * 10 + "s";
    particle.style.animationDelay = Math.random() * 5 + "s";
    particleContainer.appendChild(particle);
  }
}

createParticles();

/* ==========================================
   SISTEMA DE LOGIN SIMPLES (LOCAL)
========================================== */

function cadastrar() {
  const email = document.getElementById("cad-email").value;
  const senha = document.getElementById("cad-senha").value;

  if (!email || !senha) {
    alert("Preencha todos os campos.");
    return;
  }

  localStorage.setItem("usuarioEmail", email);
  localStorage.setItem("usuarioSenha", senha);

  alert("Cadastro realizado com sucesso!");
}

function login() {
  const email = document.getElementById("login-email").value;
  const senha = document.getElementById("login-senha").value;

  const emailSalvo = localStorage.getItem("usuarioEmail");
  const senhaSalva = localStorage.getItem("usuarioSenha");

  if (email === emailSalvo && senha === senhaSalva) {
    alert("Login realizado com sucesso!");
    localStorage.setItem("logado", "true");
  } else {
    alert("Email ou senha incorretos.");
  }
}

function logout() {
  localStorage.removeItem("logado");
  alert("Você saiu da conta.");
}

/* ==========================================
   BUSCA POR PALAVRA NA BÍBLIA
========================================== */

function buscarPalavra() {
  const termo = document.getElementById("buscaBiblia").value.toLowerCase();
  const versiculos = document.querySelectorAll(".versiculo");

  versiculos.forEach((v) => {
    if (v.textContent.toLowerCase().includes(termo)) {
      v.style.background = "#fff3b0";
    } else {
      v.style.background = "transparent";
    }
  });
}

/* ==========================================
   PEDIDOS DE ORAÇÃO
========================================== */

function enviarPedido() {
  const nome = document.getElementById("nomePedido").value;
  const pedido = document.getElementById("pedidoOracao").value;

  if (!nome || !pedido) {
    alert("Preencha todos os campos.");
    return;
  }

  const lista = document.getElementById("listaPedidos");

  const item = document.createElement("div");
  item.classList.add("pedido-item");
  item.innerHTML = `<strong>${nome}</strong>: ${pedido}`;

  lista.appendChild(item);

  document.getElementById("nomePedido").value = "";
  document.getElementById("pedidoOracao").value = "";
}

/* ==========================================
   CALENDÁRIO LITÚRGICO AUTOMÁTICO (SIMPLIFICADO)
========================================== */

function calendarioLiturgico() {
  const hoje = new Date();
  const mes = hoje.getMonth();

  let tempo = "";

  if (mes === 11) tempo = "Tempo do Advento";
  else if (mes === 0) tempo = "Tempo do Natal";
  else if (mes >= 1 && mes <= 2) tempo = "Tempo Comum";
  else if (mes === 3) tempo = "Tempo da Páscoa";
  else tempo = "Tempo Comum";

  const calendario = document.getElementById("calendarioLiturgico");

  if (calendario) {
    calendario.innerHTML = `
      <h3>Tempo Atual:</h3>
      <p>${tempo}</p>
      <p>Data: ${hoje.toLocaleDateString()}</p>
    `;
  }
}

calendarioLiturgico();

/* ==========================================
   SISTEMA MULTILÍNGUE SIMPLES
========================================== */

function mudarIdioma(idioma) {
  if (idioma === "en") {
    alert("English version coming soon.");
  } else if (idioma === "es") {
    alert("Versión en español próximamente.");
  } else {
    alert("Português ativado.");
  }
}
