/* ==========================================
   ROUTER.JS
   Sistema de Navegação Inteligente
   Católicos da Curiosidade
========================================== */

/*
   Esse sistema permite:
   - Controle de navegação
   - Ativar menu atual
   - Preparar site para SPA no futuro
*/

document.addEventListener("DOMContentLoaded", () => {
  destacarPaginaAtual();
  protegerAdmin();
});

/* ==========================================
   DESTACAR LINK ATIVO NO MENU
========================================== */

function destacarPaginaAtual() {
  const links = document.querySelectorAll(".nav-links a");
  const paginaAtual = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const linkHref = link.getAttribute("href");

    if (linkHref === paginaAtual) {
      link.classList.add("ativo");
    }
  });
}

/* ==========================================
   PROTEÇÃO DE ROTA ADMIN
========================================== */

function protegerAdmin() {
  const pagina = window.location.pathname.split("/").pop();

  if (pagina === "admin.html") {
    const logado = localStorage.getItem("logado");

    if (logado !== "true") {
      alert("Acesso restrito. Faça login primeiro.");
      window.location.href = "login.html";
    }
  }
}

/* ==========================================
   NAVEGAÇÃO SUAVE ENTRE PÁGINAS
========================================== */

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    const destino = this.getAttribute("href");

    if (destino && destino.endsWith(".html")) {
      e.preventDefault();

      document.body.style.opacity = "0";

      setTimeout(() => {
        window.location.href = destino;
      }, 400);
    }
  });
});
