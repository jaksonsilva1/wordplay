function pesquisar() {
    const termo = document.getElementById('search').value.toLowerCase();
    const historias = document.querySelectorAll('.story-item');

    historias.forEach(historia => {
        const titulo = historia.querySelector('p').textContent.toLowerCase();
        if (titulo.includes(termo)) {
            historia.style.display = 'block';
        } else {
            historia.style.display = 'none';
        }
    });
}
function selecionarHistoria(id) {
    // Salva o ID da história selecionada (ou qualquer outra informação relevante)
    localStorage.setItem('historiaSelecionada', id);
    // Redireciona para a página de leitura
    window.location.href = 'leitura.html';
}

function concluirLeitura() {
    alert("Leitura concluída!");
    window.location.href = 'selecionar_historia.html'; // Retorna à página de seleção
}
function selecionarHistoria(id) {
    // Armazena o ID da história selecionada no localStorage para uso posterior
    localStorage.setItem('historiaSelecionada', id);
    // Redireciona para a página de leitura
    window.location.href = 'leitura.html';
}

function pesquisar() {
    const termo = document.getElementById('search').value.toLowerCase();
    const historias = document.querySelectorAll('.story-item');

    historias.forEach(historia => {
        const titulo = historia.querySelector('p').textContent.toLowerCase();
        if (titulo.includes(termo)) {
            historia.style.display = 'block';
        } else {
            historia.style.display = 'none';
        }
    });
}

function carregarHistoria() {
    const id = localStorage.getItem('historiaSelecionada');
    const conteudoHistoria = document.getElementById('conteudoHistoria');

    if (id) {
        conteudoHistoria.innerHTML = `<p>Conteúdo da História ${id}</p>`;
    } else {
        conteudoHistoria.innerHTML = `<p>História não encontrada.</p>`;
    }
}

function concluirLeitura() {
    alert("Leitura concluída!");
    window.location.href = 'selecionar_historia.html'; // Retorna à página de seleção
}

// Chame a função carregarHistoria apenas na página de leitura
if (window.location.pathname.includes('leitura.html')) {
    carregarHistoria();
}
function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}

function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return;
    }

    // Aqui você pode adicionar código para salvar os dados do usuário
    alert("Usuário cadastrado com sucesso!");
    toggleForms();
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Aqui você pode adicionar código para verificar as credenciais do usuário
    alert("Login realizado com sucesso!");
}



// Usuário e senha padrão para autenticação
const defaultUsername = "usuario";
const defaultPassword = "senha123";

function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}

function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return;
    }

    // Aqui você pode adicionar código para salvar os dados do usuário
    alert("Usuário cadastrado com sucesso!");
    toggleForms();
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Verifica se o nome de usuário e a senha estão corretos
    if (username === defaultUsername && password === defaultPassword) {
        alert("Login realizado com sucesso!");
        window.location.href = 'selecionar_historia.html'; // Redireciona para a tela de seleção de história
    } else {
        alert("Usuário ou senha incorretos.");
    }
}
