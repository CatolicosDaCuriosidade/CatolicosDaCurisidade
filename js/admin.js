/* ==========================================
   ADMIN.JS
   Painel Administrativo
   Católicos da Curiosidade
========================================== */

/*
   Funções:
   - Listar usuários cadastrados
   - Remover usuários
   - Ver pedidos de oração
   - Estatísticas básicas
*/

/* ==========================================
   VERIFICAR ACESSO ADMIN
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  verificarAdminAcesso();
  carregarUsuarios();
  carregarPedidosAdmin();
});

function verificarAdminAcesso() {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

  if (!usuario || usuario.admin !== true) {
    alert("Acesso restrito ao administrador.");
    window.location.href = "index.html";
  }
}

/* ==========================================
   LISTAR USUÁRIOS
========================================== */

function carregarUsuarios() {
  const container = document.getElementById("listaUsuarios");
  if (!container) return;

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  container.innerHTML = "";

  usuarios.forEach(u => {
    const div = document.createElement("div");
    div.classList.add("admin-item");

    div.innerHTML = `
      <strong>${u.nome}</strong> (${u.email})
      <br>
      Admin: ${u.admin ? "Sim" : "Não"}
      <br>
      <button onclick="removerUsuario(${u.id})">Remover</button>
    `;

    container.appendChild(div);
  });

  atualizarEstatisticas();
}

/* ==========================================
   REMOVER USUÁRIO
========================================== */

function removerUsuario(id) {
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  usuarios = usuarios.filter(u => u.id !== id);

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  carregarUsuarios();
}

/* ==========================================
   CARREGAR PEDIDOS DE ORAÇÃO
========================================== */

function carregarPedidosAdmin() {
  const container = document.getElementById("adminPedidos");
  if (!container) return;

  const pedidos = JSON.parse(localStorage.getItem("pedidosOracao")) || [];

  container.innerHTML = "";

  pedidos.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("admin-item");

    div.innerHTML = `
      <strong>${p.nome}</strong>
      <p>${p.pedido}</p>
      <small>${p.data}</small>
      <hr>
    `;

    container.appendChild(div);
  });
}

/* ==========================================
   ESTATÍSTICAS SIMPLES
========================================== */

function atualizarEstatisticas() {
  const totalUsuarios = (JSON.parse(localStorage.getItem("usuarios")) || []).length;
  const totalPedidos = (JSON.parse(localStorage.getItem("pedidosOracao")) || []).length;

  const stats = document.getElementById("adminStats");
  if (!stats) return;

  stats.innerHTML = `
    <p>Total de usuários: <strong>${totalUsuarios}</strong></p>
    <p>Total de pedidos de oração: <strong>${totalPedidos}</strong></p>
  `;
}
