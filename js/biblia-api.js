/* ==========================================
   BIBLIA-API.JS
   Sistema Oficial da Bíblia Católica
   Católicos da Curiosidade
========================================== */

/*
   Esse sistema:
   - Carrega os livros do arquivo JSON
   - Permite navegação por capítulos
   - Permite busca futura avançada
   - Estrutura pronta para Bíblia COMPLETA
*/

let bibliaCompleta = {};

/* ==========================================
   CARREGAR JSON LOCAL DA BÍBLIA
========================================== */

async function carregarBiblia() {
  try {
    const resposta = await fetch("data/livros-biblia.json");
    bibliaCompleta = await resposta.json();
    console.log("Bíblia carregada com sucesso.");
  } catch (erro) {
    console.error("Erro ao carregar Bíblia:", erro);
  }
}

carregarBiblia();

/* ==========================================
   LISTAR LIVROS DINAMICAMENTE
========================================== */

function listarLivrosBiblia() {
  const container = document.getElementById("listaLivros");
  if (!container || !bibliaCompleta.livros) return;

  container.innerHTML = "";

  bibliaCompleta.livros.forEach(livro => {
    const item = document.createElement("div");
    item.classList.add("livro-item");
    item.textContent = livro.nome;
    item.onclick = () => carregarCapitulos(livro);
    container.appendChild(item);
  });
}

/* ==========================================
   LISTAR CAPÍTULOS
========================================== */

function carregarCapitulos(livro) {
  const container = document.getElementById("conteudoBiblia");
  container.innerHTML = `<h2>${livro.nome}</h2>`;

  livro.capitulos.forEach((capitulo, index) => {
    const btn = document.createElement("button");
    btn.textContent = "Capítulo " + (index + 1);
    btn.classList.add("btn-capitulo");
    btn.onclick = () => mostrarVersiculos(capitulo, livro.nome, index + 1);
    container.appendChild(btn);
  });
}

/* ==========================================
   MOSTRAR VERSÍCULOS
========================================== */

function mostrarVersiculos(capitulo, nomeLivro, numeroCapitulo) {
  const container = document.getElementById("conteudoBiblia");

  container.innerHTML = `
    <h2>${nomeLivro} - Capítulo ${numeroCapitulo}</h2>
  `;

  capitulo.forEach((versiculo, index) => {
    const p = document.createElement("p");
    p.classList.add("versiculo");
    p.innerHTML = `<strong>${index + 1}</strong> ${versiculo}`;
    container.appendChild(p);
  });
}

/* ==========================================
   IR DIRETO PARA REFERÊNCIA
   Exemplo: João 3:16
========================================== */

function irParaReferencia(referencia) {
  if (!bibliaCompleta.livros) return;

  const regex = /([A-Za-zÀ-ú\s]+)\s(\d+):(\d+)/;
  const match = referencia.match(regex);

  if (!match) {
    alert("Formato inválido. Use exemplo: João 3:16");
    return;
  }

  const nomeLivro = match[1].trim();
  const cap = parseInt(match[2]) - 1;
  const ver = parseInt(match[3]) - 1;

  const livro = bibliaCompleta.livros.find(l => l.nome === nomeLivro);

  if (!livro) {
    alert("Livro não encontrado.");
    return;
  }

  const capitulo = livro.capitulos[cap];

  if (!capitulo || !capitulo[ver]) {
    alert("Referência não encontrada.");
    return;
  }

  const container = document.getElementById("conteudoBiblia");
  container.innerHTML = `
    <h2>${nomeLivro} ${cap + 1}:${ver + 1}</h2>
    <p class="versiculo destaque">
      ${capitulo[ver]}
    </p>
  `;
}

/* ==========================================
   SISTEMA PRONTO PARA API EXTERNA FUTURA
========================================== */

async function conectarAPIExterna() {
  console.log("Sistema preparado para API oficial no futuro.");
}
