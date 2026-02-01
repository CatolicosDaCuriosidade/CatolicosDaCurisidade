/* ==========================================
   IDIOMA.JS
   Sistema Multilíngue
   Católicos da Curiosidade
========================================== */

/*
   Sistema:
   - Troca textos dinamicamente
   - Salva idioma escolhido
   - Estrutura pronta para expansão total
*/

const textos = {
  pt: {
    menuHome: "Início",
    menuBiblia: "Bíblia",
    menuCuriosidades: "Curiosidades",
    menuCoroinhas: "Coroinhas",
    menuOracoes: "Orações",
    menuLogin: "Login",
    versiculoDia: "Versículo do Dia"
  },
  en: {
    menuHome: "Home",
    menuBiblia: "Bible",
    menuCuriosidades: "Curiosities",
    menuCoroinhas: "Altar Servers",
    menuOracoes: "Prayers",
    menuLogin: "Login",
    versiculoDia: "Verse of the Day"
  },
  es: {
    menuHome: "Inicio",
    menuBiblia: "Biblia",
    menuCuriosidades: "Curiosidades",
    menuCoroinhas: "Monaguillos",
    menuOracoes: "Oraciones",
    menuLogin: "Acceso",
    versiculoDia: "Versículo del Día"
  }
};

/* ==========================================
   APLICAR IDIOMA
========================================== */

function aplicarIdiomaSite(idioma) {
  const t = textos[idioma];
  if (!t) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {
    const chave = elemento.getAttribute("data-i18n");
    if (t[chave]) {
      elemento.textContent = t[chave];
    }
  });

  localStorage.setItem("idiomaSelecionado", idioma);
}

/* ==========================================
   CARREGAR IDIOMA SALVO
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  const idiomaSalvo = localStorage.getItem("idiomaSelecionado") || "pt";
  aplicarIdiomaSite(idiomaSalvo);
});

/* ==========================================
   BOTÕES DE TROCA DE IDIOMA
========================================== */

function mudarIdioma(idioma) {
  aplicarIdiomaSite(idioma);
}
