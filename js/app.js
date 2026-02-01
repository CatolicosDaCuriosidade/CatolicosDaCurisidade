/* ==========================================
   APP.JS - SISTEMA CENTRAL AVANÇADO
   CATÓLICOS DA CURIOSIDADE
========================================== */

/* ==========================================
   BASE COMPLETA DOS LIVROS DA BÍBLIA CATÓLICA
   (73 LIVROS - ORGANIZADOS)
========================================== */

const livrosBiblia = {
  "Antigo Testamento": [
    "Gênesis","Êxodo","Levítico","Números","Deuteronômio",
    "Josué","Juízes","Rute","1 Samuel","2 Samuel",
    "1 Reis","2 Reis","1 Crônicas","2 Crônicas",
    "Esdras","Neemias","Tobias","Judite","Ester",
    "1 Macabeus","2 Macabeus","Jó","Salmos","Provérbios",
    "Eclesiastes","Cântico dos Cânticos","Sabedoria",
    "Eclesiástico","Isaías","Jeremias","Lamentações",
    "Baruc","Ezequiel","Daniel","Oseias","Joel","Amós",
    "Abdias","Jonas","Miqueias","Naum","Habacuc",
    "Sofonias","Ageu","Zacarias","Malaquias"
  ],
  "Novo Testamento": [
    "Mateus","Marcos","Lucas","João","Atos",
    "Romanos","1 Coríntios","2 Coríntios","Gálatas",
    "Efésios","Filipenses","Colossenses",
    "1 Tessalonicenses","2 Tessalonicenses",
    "1 Timóteo","2 Timóteo","Tito","Filemom",
    "Hebreus","Tiago","1 Pedro","2 Pedro",
    "1 João","2 João","3 João","Judas","Apocalipse"
  ]
};

/* ==========================================
   GERADOR AUTOMÁTICO DA LISTA DE LIVROS
========================================== */

function gerarListaLivros() {
  const container = document.getElementById("listaLivros");

  if (!container) return;

  for (let testamento in livrosBiblia) {
    const titulo = document.createElement("h3");
    titulo.textContent = testamento;
    container.appendChild(titulo);

    livrosBiblia[testamento].forEach(livro => {
      const item = document.createElement("div");
      item.classList.add("livro-item");
      item.textContent = livro;
      item.onclick = () => carregarLivro(livro);
      container.appendChild(item);
    });
  }
}

gerarListaLivros();

/* ==========================================
   SISTEMA DE CARREGAMENTO DINÂMICO
   (BASE EXPANSÍVEL PARA BÍBLIA COMPLETA)
========================================== */

function carregarLivro(nomeLivro) {
  const conteudo = document.getElementById("conteudoBiblia");
  if (!conteudo) return;

  conteudo.innerHTML = `
    <h2>${nomeLivro}</h2>
    <p class="versiculo">
      1,1 — No princípio Deus criou o céu e a terra.
    </p>
    <p class="versiculo">
      (Sistema preparado para inserir capítulos completos futuramente)
    </p>
  `;
}

/* ==========================================
   PAINEL ADMIN BASE (FUTURO)
========================================== */

function verificarAdmin() {
  const logado = localStorage.getItem("logado");

  const painel = document.getElementById("adminArea");

  if (!painel) return;

  if (logado === "true") {
    painel.style.display = "block";
  } else {
    painel.style.display = "none";
  }
}

verificarAdmin();

/* ==========================================
   SISTEMA MULTILÍNGUE EXPANSÍVEL
========================================== */

const traducoes = {
  pt: {
    tituloHome: "Bem-vindo aos Católicos da Curiosidade"
  },
  en: {
    tituloHome: "Welcome to Catholics of Curiosity"
  },
  es: {
    tituloHome: "Bienvenidos a Católicos de la Curiosidad"
  }
};

function aplicarIdioma(lang) {
  const titulo = document.getElementById("tituloHome");
  if (!titulo) return;

  titulo.textContent = traducoes[lang].tituloHome;
}

/* ==========================================
   MODO TEMA CLARO/ESCURO
========================================== */

function alternarTema() {
  document.body.classList.toggle("tema-escuro");

  if (document.body.classList.contains("tema-escuro")) {
    localStorage.setItem("tema", "escuro");
  } else {
    localStorage.setItem("tema", "claro");
  }
}

function carregarTema() {
  const tema = localStorage.getItem("tema");
  if (tema === "escuro") {
    document.body.classList.add("tema-escuro");
  }
}

carregarTema();

/* ==========================================
   ESTRUTURA PREPARADA PARA API FUTURA
========================================== */

async function carregarVersiculosAPI() {
  console.log("Sistema preparado para futura API oficial da Bíblia.");
}

/* ==========================================
   ANIMAÇÃO EXTRA DE ENTRADA SUAVE GLOBAL
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "opacity 1.5s ease";
    document.body.style.opacity = 1;
  }, 200);
});
