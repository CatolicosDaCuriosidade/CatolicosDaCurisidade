/* ==========================================
   VERSICULO-DIA.JS
   Sistema Versículo do Dia
   Católicos da Curiosidade
========================================== */

/*
   Funciona assim:
   - Usa a data atual
   - Gera sempre o mesmo versículo no mesmo dia
   - Muda automaticamente no dia seguinte
*/

const versiculosBase = [
  "João 3:16 — Porque Deus amou tanto o mundo que entregou o seu Filho único.",
  "Salmo 23:1 — O Senhor é meu pastor, nada me faltará.",
  "Romanos 8:28 — Tudo coopera para o bem dos que amam a Deus.",
  "Filipenses 4:13 — Tudo posso naquele que me fortalece.",
  "Provérbios 3:5 — Confia no Senhor de todo o teu coração.",
  "Mateus 5:9 — Bem-aventurados os que promovem a paz.",
  "Isaías 41:10 — Não temas, porque eu estou contigo.",
  "Hebreus 11:1 — A fé é a certeza daquilo que esperamos.",
  "2 Timóteo 1:7 — Deus não nos deu um espírito de medo.",
  "Apocalipse 21:4 — Ele enxugará toda lágrima."
];

/* ==========================================
   GERAR ÍNDICE BASEADO NA DATA
========================================== */

function obterIndiceDoDia() {
  const hoje = new Date();
  const numero = hoje.getFullYear() + hoje.getMonth() + hoje.getDate();
  return numero % versiculosBase.length;
}

/* ==========================================
   EXIBIR NO SITE
========================================== */

function mostrarVersiculoDoDia() {
  const container = document.getElementById("versiculoDia");
  if (!container) return;

  const indice = obterIndiceDoDia();
  const versiculo = versiculosBase[indice];

  container.innerHTML = `
    <div class="versiculo-box">
      <h3>📖 Versículo do Dia</h3>
      <p>${versiculo}</p>
    </div>
  `;
}

/* ==========================================
   INICIAR AUTOMATICAMENTE
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  mostrarVersiculoDoDia();
});
