/* ==========================================
   AUTH.JS
   Sistema de Autenticação Profissional
   Católicos da Curiosidade
========================================== */

/*
   Sistema local (GitHub Pages não permite backend)
   Futuramente pode ser integrado com:
   - Firebase
   - Supabase
   - Backend próprio
*/

/* ==========================================
   CADASTRO
========================================== */

function cadastrarUsuario() {
  const nome = document.getElementById("cad-nome")?.value.trim();
  const email = document.getElementById("cad-email")?.value.trim();
  const senha = document.getElementById("cad-senha")?.value;

  if (!nome || !email || !senha) {
    alert("Preencha todos os campos.");
    return;
  }

  if (!validarEmail(email)) {
    alert("Email inválido.");
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  if (usuarios.find(u => u.email === email)) {
    alert("Email já cadastrado.");
    return;
  }

  const novoUsuario = {
    id: Date.now(),
    nome,
    email,
    senha,
    admin: false
  };

  usuarios.push(novoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("Cadastro realizado com sucesso!");
  window.location.href = "login.html";
}

/* ==========================================
   LOGIN
========================================== */

function loginUsuario() {
  const email = document.getElementById("login-email")?.value.trim();
  const senha = document.getElementById("login-senha")?.value;

  if (!email || !senha) {
    alert("Preencha todos os campos.");
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuario = usuarios.find(
    u => u.email === email && u.senha === senha
  );

  if (!usuario) {
    alert("Email ou senha incorretos.");
    return;
  }

  localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
  localStorage.setItem("logado", "true");

  alert("Login realizado com sucesso!");
  window.location.href = "index.html";
}

/* ==========================================
   LOGOUT
========================================== */

function logoutUsuario() {
  localStorage.removeItem("usuarioLogado");
  localStorage.removeItem("logado");

  alert("Você saiu da sua conta.");
  window.location.href = "index.html";
}

/* ==========================================
   VERIFICAR USUÁRIO LOGADO
========================================== */

function usuarioAtual() {
  return JSON.parse(localStorage.getItem("usuarioLogado"));
}

/* ==========================================
   PROTEGER PÁGINA
========================================== */

function protegerPagina() {
  const logado = localStorage.getItem("logado");

  if (logado !== "true") {
    alert("Faça login para acessar esta página.");
    window.location.href = "login.html";
  }
}

/* ==========================================
   TORNAR ADMIN (MANUAL)
   Execute no console:
   tornarAdmin("email@email.com")
========================================== */

function tornarAdmin(email) {
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  usuarios = usuarios.map(u => {
    if (u.email === email) {
      u.admin = true;
    }
    return u;
  });

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  alert("Usuário promovido a admin.");
}

/* ==========================================
   VALIDAR EMAIL
========================================== */

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
