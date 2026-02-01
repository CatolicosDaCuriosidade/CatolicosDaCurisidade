/* ==========================================
   CALENDARIO.JS
   Calendário Litúrgico Automático
   Católicos da Curiosidade
========================================== */

/*
   Sistema simplificado baseado no mês.
   Futuramente pode ser expandido com cálculo real da Páscoa.
*/

/* ==========================================
   CALCULAR TEMPO LITÚRGICO
========================================== */

function obterTempoLiturgico(data) {
  const mes = data.getMonth() + 1;
  const dia = data.getDate();

  // Aproximação simplificada
  if ((mes === 12 && dia >= 1) || (mes === 11 && dia >= 27)) {
    return "🟣 Tempo do Advento";
  }

  if (mes === 12 && dia >= 25 || mes === 1 && dia <= 13) {
    return "⚪ Tempo do Natal";
  }

  if (mes === 2 || mes === 3) {
    return "🟣 Tempo da Quaresma (aproximado)";
  }

  if (mes === 4 || mes === 5) {
    return "⚪ Tempo Pascal";
  }

  return "🟢 Tempo Comum";
}

/* ==========================================
   EXIBIR NO SITE
========================================== */

function mostrarCalendarioLiturgico() {
  const container = document.getElementById("calendarioLiturgico");
  if (!container) return;

  const hoje = new Date();
  const tempo = obterTempoLiturgico(hoje);

  container.innerHTML = `
    <div class="calendario-box">
      <h3>Calendário Litúrgico</h3>
      <p><strong>Data:</strong> ${hoje.toLocaleDateString()}</p>
      <p><strong>Tempo Atual:</strong> ${tempo}</p>
    </div>
  `;
}

/* ==========================================
   INICIAR AUTOMATICAMENTE
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  mostrarCalendarioLiturgico();
});
