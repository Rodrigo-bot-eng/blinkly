// Função para criar um toast de boas-vindas moderno
function showWelcomeToast(username) {
  const toast = document.createElement('div');
  toast.textContent = `Bem-vindo ao 𝘽𝙡𝙞𝙣𝙠𝙡𝙮, ${username}! ✨`;
  
  toast.style.position = 'fixed';
  toast.style.top = '20px';
  toast.style.right = '20px';
  toast.style.background = 'rgba(0,0,0,0.8)';
  toast.style.color = '#fff';
  toast.style.padding = '15px 25px';
  toast.style.borderRadius = '30px';
  toast.style.fontFamily = "'Poppins', sans-serif";
  toast.style.fontWeight = '600';
  toast.style.fontSize = '1rem';
  toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
  toast.style.opacity = '0';
  toast.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  toast.style.zIndex = '9999';
  toast.style.transform = 'translateY(-20px)';

  document.body.appendChild(toast);

  // Aparecer
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  });

  // Desaparecer depois de 4 segundos
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-20px)';
    toast.addEventListener('transitionend', () => toast.remove());
  }, 4000);
}

// Recuperar o nome do usuário do localStorage para mensagem
const username = localStorage.getItem('name') || 'usuário';

// Mostrar toast de boas-vindas ao carregar o feed
window.addEventListener('DOMContentLoaded', () => {
  showWelcomeToast(username);
});

// Likes simples
document.querySelectorAll('.btn-like').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('liked');
  });
});

// Trocar usuário (exemplo simples)
document.querySelector('.switch-btn')?.addEventListener('click', e => {
  e.preventDefault();
  alert('Funcionalidade de troca de usuário em desenvolvimento.');
});
