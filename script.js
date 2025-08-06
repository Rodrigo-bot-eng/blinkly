// Evento de envio do formulário de login
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault(); // Impede o envio padrão do formulário

  // Captura os valores digitados nos campos
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Recupera os dados armazenados no localStorage
  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");
  const storedName = localStorage.getItem("name");

  // Verifica se email e senha não estão vazios
  if (!email || !password) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Verifica se o email e senha correspondem aos dados armazenados
  if (email === storedEmail && password === storedPassword) {
    alert(`Login bem-sucedido! Bem-vindo de volta, ${storedName}`);
    window.location.href = "feed.html"; // Redireciona para a página principal
  } else {
    alert("E-mail ou senha inválidos. Tente novamente.");
  }
});
