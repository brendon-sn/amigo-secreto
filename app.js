// Lista de amigos
let amigos = [];

// Função para validar nome (apenas letras e espaços, mínimo 2 letras)
function nomeValido(nome) {
	return /^[A-Za-zÀ-ÿ\s]{2,}$/.test(nome.trim());
}

// Função para adicionar amigo
function adicionarAmigo() {
	const input = document.getElementById('amigo');
	const nome = input.value.trim();
	if (!nomeValido(nome)) {
		alert('Por favor, insira um nome válido.');
		input.value = '';
		input.focus();
		return;
	}
	amigos.push(nome);
	input.value = '';
	input.focus();
	mostrarLista();
}

// Função para mostrar a lista de amigos
function mostrarLista() {
	const ul = document.getElementById('listaAmigos');
	ul.innerHTML = '';
	amigos.forEach((amigo, idx) => {
		const li = document.createElement('li');
		li.textContent = amigo;
		ul.appendChild(li);
	});
}

// Função para sortear amigo secreto
function sortearAmigo() {
	if (amigos.length === 0) {
		alert('Adicione pelo menos um amigo antes de sortear!');
		return;
	}
	const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
	const ul = document.getElementById('resultado');
	ul.innerHTML = `<li>O amigo secreto sorteado é: <span style='color: #4B69FD; font-weight: bold;'>${sorteado}</span></li>`;
}
