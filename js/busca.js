/* ==========================================
   BUSCA.JS
   Sistema de Busca Global Inteligente
   Católicos da Curiosidade
========================================== */

/*
   Esse sistema:
   - Busca palavras na Bíblia carregada
   - Destaca resultados
   - Permite busca por livro
   - Preparado para busca geral no site
*/

function buscarGlobal() {
  const termo = document.getElementById("campoBuscaGlobal");
  const resultadoContainer = document.getElementById("resultadoBusca");

  if (!termo || !resultadoContainer) return;

  const textoBusca = termo.value.toLowerCase().trim();

  if (textoBusca.length < 2) {
    resultadoContainer.innerHTML = "<p>Digite pelo menos 2 letras.</p>";
    return;
  }

  resultadoContainer.innerHTML = "<p>Buscando...</p>";

  setTimeout(() => {
    buscarNaBiblia(textoBusca);
  }, 300);
}

/* ==========================================
   BUSCA DENTRO DA BÍBLIA
========================================== */

function buscarNaBiblia(termo) {
  const resultadoContainer = document.getElementById("resultadoBusca");

  if (!bibliaCompleta.livros) {
    resultadoContainer.innerHTML = "<p>Bíblia ainda não carregada.</p>";
    return;
  }

  let resultados = [];

  bibliaCompleta.livros.forEach(livro => {
    livro.capitulos.forEach((capitulo, capIndex) => {
      capitulo.forEach((versiculo, verIndex) => {
        if (versiculo.toLowerCase().includes(termo)) {
          resultados.push({
            livro: livro.nome,
            capitulo: capIndex + 1,
            versiculo: verIndex + 1,
            texto: versiculo
          });
        }
      });
    });
  });

  mostrarResultados(resultados);
}

/* ==========================================
   MOSTRAR RESULTADOS
========================================== */

function mostrarResultados(resultados) {
  const resultadoContainer = document.getElementById("resultadoBusca");

  if (resultados.length === 0) {
    resultadoContainer.innerHTML = "<p>Nenhum resultado encontrado.</p>";
    return;
  }

  resultadoContainer.innerHTML = `<h3>${resultados.length} resultado(s) encontrado(s):</h3>`;

  resultados.slice(0, 50).forEach(r => {
    const div = document.createElement("div");
    div.classList.add("resultado-item");
    div.innerHTML = `
      <strong>${r.livro} ${r.capitulo}:${r.versiculo}</strong>
      <p>${destacarTexto(r.texto)}</p>
    `;

    resultadoContainer.appendChild(div);
  });

  if (resultados.length > 50) {
    const aviso = document.createElement("p");
    aviso.innerHTML = "<em>Mostrando apenas os 50 primeiros resultados.</em>";
    resultadoContainer.appendChild(aviso);
  }
}

/* ==========================================
   DESTACAR PALAVRA BUSCADA
========================================== */

function destacarTexto(texto) {
  const termo = document.getElementById("campoBuscaGlobal").value;
  const regex = new RegExp(`(${termo})`, "gi");

  return texto.replace(regex, "<span class='destaque-busca'>$1</span>");
}
