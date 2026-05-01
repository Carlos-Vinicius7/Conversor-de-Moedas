const btnTroca = document.getElementById('TrocaDeTema');
const body = document.body;

// Função para alternar o tema
const toggleDarkMode = () => {
    body.classList.toggle('dark-mode');
    
    // Salva a escolha do usuário no navegador
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('tema', isDark ? 'dark' : 'light');
};

// Evento de clique
btnTroca.addEventListener('click', toggleDarkMode);

// Ao carregar a página: verifica se o usuário já tem uma preferência salva
window.addEventListener('DOMContentLoaded', () => {
    const temaSalvo = localStorage.getItem('tema');
    
    if (temaSalvo === 'dark') {
        body.classList.add('dark-mode');
    }
});