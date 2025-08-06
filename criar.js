document.getElementById("signupForm")?.addEventListener("submit", function(e) {
  e.preventDefault(); // Impede o comportamento padrão de envio do formulário
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!name || !email || !password || !confirmPassword) {
    alert("Todos os campos são obrigatórios.");
    return;
  }


  if (password !== confirmPassword) {
    alert("As senhas não coincidem. Tente novamente.");
    return;
  }

  if (localStorage.getItem(email)) {
    alert("Este e-mail já está cadastrado.");
    return;
  }

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  
  alert("Conta criada com sucesso! Você pode fazer login agora.");
  
  window.location.href = "index.html";  
});
