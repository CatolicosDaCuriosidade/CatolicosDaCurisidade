/* ==========================================
   ORACOES.JS
   Sistema de Pedidos de Oração
   Católicos da Curiosidade
========================================== */

/*
   Funcionalidades:
   - Enviar pedido
   - Salvar no localStorage
   - Listar pedidos públicos
   - Remover pedido (admin futuramente)
*/

/* ==========================================
   ENVIAR PEDIDO
========================================== */

function enviarPedidoOracao() {
  const nomeInput = document.getElementById("oracao-nome");
  const pedidoInput = document.getElementById("oracao-texto");

  if (!nomeInput || !pedidoInput) return;

  const nome = nomeInput.value.trim();
  const pedido = pedidoInput.value.trim();

  if (!nome || !pedido) {
    alert("Preencha todos os campos.");
    return;
  }

  const pedidos = JSON.parse(localStorage.getItem("pedidosOracao")) || [];

  const novoPedido = {
    id: Date.now(),
    nome,
    pedido,
    data: new Date().toLocaleString()
  };

  pedidos.push(novoPedido);
  localStorage.setItem("pedidosOracao", JSON.stringify(pedidos));

  nomeInput.value = "";
  pedidoInput.value = "";

  alert("Pedido enviado com sucesso 🙏");
  listarPedidosPublicos();
}

/* ==========================================
   LISTAR PEDIDOS PÚBLICOS
========================================== */

function listarPedidosPublicos() {
  const container = document.getElementById("listaPedidosPublicos");
  if (!container) return;

  const pedidos = JSON.parse(localStorage.getItem("pedidosOracao")) || [];

  container.innerHTML = "";

  if (pedidos.length === 0) {
    container.innerHTML = "<p>Ainda não há pedidos de oração.</p>";
    return;
  }

  pedidos.slice().reverse().forEach(p => {
    const div = document.createElement("div");
    div.classList.add("pedido-publico");

    div.innerHTML = `
      <strong>${p.nome}</strong>
      <p>${p.pedido}</p>
      <small>${p.data}</small>
    `;

    container.appendChild(div);
  });
}

/* ==========================================
   REMOVER PEDIDO (ADMIN)
========================================== */

function removerPedido(id) {
  let pedidos = JSON.parse(localStorage.getItem("pedidosOracao")) || [];

  pedidos = pedidos.filter(p => p.id !== id);

  localStorage.setItem("pedidosOracao", JSON.stringify(pedidos));

  listarPedidosPublicos();
}

/* ==========================================
   AUTO CARREGAR PEDIDOS AO ABRIR PÁGINA
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  listarPedidosPublicos();
});
