//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array global que vai armazenar os amigos
let amigos = [];

// Função para adicionar um amigo ao array e atualizar a lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim(); // remove espaços extras

    if (nome !== "") {
        amigos.push(nome); // adiciona ao array
        input.value = "";  // limpa o campo de input
        atualizarLista();  // chama a função que renderiza a lista
    } else {
        alert("Digite um nome válido!");
    }
}

// Função para atualizar a lista de amigos no HTML
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpa a lista antes de recriar

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpa resultado anterior

    if (amigos.length === 0) {
        resultado.innerHTML = "<li>Nenhum amigo disponível para sortear.</li>";
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>🎉 O amigo sorteado foi: <strong>${amigoSorteado}</strong></li>`;
}
