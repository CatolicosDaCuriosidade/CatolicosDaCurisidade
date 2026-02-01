/* ==========================================
   RADIO.JS
   Rádio Católica Online
   Católicos da Curiosidade
========================================== */

/*
   Sistema:
   - Player online
   - Play / Pause
   - Controle de volume
   - Status ao vivo
*/

let radio;
let tocando = false;

/* ==========================================
   INICIAR PLAYER
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  radio = new Audio("https://stream-ssl.radio.co/sd9b6e5f3b/listen"); 
  radio.volume = 0.5;
});

/* ==========================================
   PLAY / PAUSE
========================================== */

function alternarRadio() {
  const status = document.getElementById("radio-status");

  if (!radio) return;

  if (!tocando) {
    radio.play();
    tocando = true;
    if (status) status.textContent = "🔴 Ao Vivo";
  } else {
    radio.pause();
    tocando = false;
    if (status) status.textContent = "⏸️ Pausado";
  }
}

/* ==========================================
   CONTROLE DE VOLUME
========================================== */

function ajustarVolume(valor) {
  if (!radio) return;
  radio.volume = valor;
}

/* ==========================================
   AUTO PAUSAR AO SAIR DA PÁGINA
========================================== */

window.addEventListener("beforeunload", () => {
  if (radio) {
    radio.pause();
  }
});
